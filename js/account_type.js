const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());




// Kiranpal: 
// Some code in here is redundent and can be removed - This is the Account Type Database Field selection page
// IF Tenant - User account is Tenant (goes to tenant dashboard)
// If Landlord - User account is Landlord (goes to landlord dashboard) 




// API # 1. Configure the MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // Replace with your DB host
    user: 'root',      // Replace with your DB username
    password: 'password', // Replace with your DB password
    database: 'your_database_name', // Replace with your DB name
});

// API #2. Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database.');
    }
});

// API #3. Define the API endpoint
app.post('/api/select-account-type', (req, res) => {
    const { account_type } = req.body;

    if (!account_type) {
        return res.status(400).json({ message: 'Account type is required.' });
    }

    const query = 'INSERT INTO account_types (account_type) VALUES (?)'; // Adjust table name as necessary
    db.query(query, [account_type], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error.' });
        }

        res.status(200).json({ message: 'Account type saved successfully.', results });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
