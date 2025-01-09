
document.addEventListener("DOMContentLoaded", () => {
    const tenantId = new URLSearchParams(window.location.search).get('id');
    
    // API Connection #9: Fetch tenant details using the tenantId.
    fetch(`/api/tenant-details?id=${tenantId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('tenant-name').textContent = data.name;
            document.getElementById('tenant-age-profession').textContent = `Age: ${data.age} | Profession: ${data.profession}`;
            document.getElementById('tenant-score').textContent = `Tenant Score: ${data.score}%`;
            document.getElementById('tenant-bio').textContent = data.bio;

            // Populate documents
            const documentsContainer = document.getElementById('tenant-documents');
            data.documents.forEach(doc => {
                const link = document.createElement('a');
                link.href = doc.url;
                link.textContent = doc.name;
                link.target = '_blank';
                documentsContainer.appendChild(link);
            });

            // Populate amenities
            const amenitiesContainer = document.getElementById('tenant-amenities');
            data.amenities.forEach(amenity => {
                const div = document.createElement('div');
                div.className = 'amenity';
                div.textContent = amenity;
                amenitiesContainer.appendChild(div);
            });
        })
        .catch(err => console.error("Error fetching tenant details:", err));
});
