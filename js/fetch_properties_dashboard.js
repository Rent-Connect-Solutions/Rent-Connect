// File: fetch_properties_dashboard
// This JS file pulls property names to the main Dashboard so Landlords can get an overview globally of their proeprties they have added to Rent Connect.

// Replace with dynamic user ID logic (e.g., from session or authentication token)
const userId = 1;

async function fetchProperties() {
  try {
    // API Connection Point #5: Fetch properties from the backend API
    const response = await fetch(`http://localhost:3000/api/properties?userId=${userId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }

    const data = await response.json();
    const propertyList = document.getElementById('property-list');

    // API Connection Point #6: Populate the frontend with fetched properties
    if (data.properties.length > 0) {
      data.properties.forEach(property => {
        const li = document.createElement('li');
        li.textContent = property.property_name;
        propertyList.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'No properties found';
      propertyList.appendChild(li);
    }
  } catch (error) {
    console.error('Error:', error);
    // API Connection Point #7: Handle frontend errors (e.g., failed fetch or network issue)
  }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchProperties);
