require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to get all properties
app.get('/properties', (req, res) => {
    const query = 'SELECT * FROM property';
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route to get a single property by ID
app.get('/properties/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM property WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Property not found' });
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Route to create a new property
app.post('/properties', (req, res) => {
    const {
        user_id, user_is_tenant, permission_to_rent, property_type, name, 
        property_amenities, num_bed, num_bath, location_id, ts_created, ts_updated
    } = req.body;

    const query = `INSERT INTO property 
        (user_id, user_is_tenant, permission_to_rent, property_type, name, 
         property_amenities, num_bed, num_bath, location_id, ts_created, ts_updated)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [user_id, user_is_tenant, permission_to_rent, property_type, name,
                    property_amenities, num_bed, num_bath, location_id, ts_created, ts_updated];

    db.query(query, values, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(201).json({ message: 'Property created', propertyId: results.insertId });
        }
    });
});

// Route to update a property
app.put('/properties/:id', (req, res) => {
    const { id } = req.params;
    const {
        user_id, user_is_tenant, permission_to_rent, property_type, name, 
        property_amenities, num_bed, num_bath, location_id, ts_updated
    } = req.body;

    const query = `UPDATE property SET 
        user_id = ?, user_is_tenant = ?, permission_to_rent = ?, property_type = ?, 
        name = ?, property_amenities = ?, num_bed = ?, num_bath = ?, location_id = ?, 
        ts_updated = ? WHERE id = ?`;

    const values = [user_id, user_is_tenant, permission_to_rent, property_type, name,
                    property_amenities, num_bed, num_bath, location_id, ts_updated, id];


                    db.query(query, values, (error, results) => {
                        if (error) {
                            res.status(500).json({ error: error.message });
                        } else if (results.affectedRows === 0) {
                            res.status(404).json({ message: 'Property not found' });
                        } else {
                            res.status(200).json({ message: 'Property updated' });
                        }
                    });
                });
                
                // Route to delete a property
                app.delete('/properties/:id', (req, res) => {
                    const { id } = req.params;
                    const query = 'DELETE FROM property WHERE id = ?';
                    db.query(query, [id], (error, results) => {
                        if (error) {
                            res.status(500).json({ error: error.message });
                        } else if (results.affectedRows === 0) {
                            res.status(404).json({ message: 'Property not found' });
                        } else {
                            res.status(200).json({ message: 'Property deleted' });
                        }
                    });
                });
                
                // Start the server
                const PORT = process.env.PORT || 3000;
                app.listen(PORT, () => {
                    console.log(`Server is running on port ${PORT}`);
                });
                