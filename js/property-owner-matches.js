
document.addEventListener("DOMContentLoaded", () => {
    const tenantGrid = document.querySelector('.tenant-grid');

    // API Connection #7: Fetch matched tenants for a specific property.
    fetch('/api/matched-tenants?propertyId=123')
        .then(response => response.json())
        .then(tenants => {
            tenants.forEach(tenant => {
                const card = document.createElement('div');
                card.className = 'cards';

                const documentStatus = `
                    <ul>
                        <li>Credit Score: <span>${tenant.documents.creditScore ? '✔️' : '❌'}</span></li>
                        <li>Proof of Income: <span>${tenant.documents.proofOfIncome ? '✔️' : '❌'}</span></li>
                        <li>References: <span>${tenant.documents.references ? '✔️' : '❌'}</span></li>
                    </ul>
                `;

                card.innerHTML = `
                    <img src="${tenant.image}" alt="${tenant.name}">
                    <h1>${tenant.name}</h1>
                    ${documentStatus}
                    <button onclick="viewTenantProfile(${tenant.id})">View Profile</button>
                `;

                tenantGrid.appendChild(card);
            });
        })
        .catch(err => console.error('Error fetching tenants:', err));
});

// API Connection #8: Navigate to a specific tenant profile.
function viewTenantProfile(tenantId) {
    window.location.href = `/tenant-profile.html?id=${tenantId}`;
}
