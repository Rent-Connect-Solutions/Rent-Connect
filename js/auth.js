document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const confirmPassword = document.getElementById('confirm-password-input').value;
    const errorMessage = document.getElementById('signup-error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate passwords
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return;
    }

    try {
        const response = await fetch('https://your-api-endpoint.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert('Sign-up successful! Redirecting to login...');
            window.location.href = 'login.html';
        } else {
            const errorData = await response.json();
            errorMessage.textContent = errorData.message || 'Failed to sign up. Please try again.';
        }
    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again.';
        console.error(error);
    }
});

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.textContent = '';

    try {
        const response = await fetch('https://your-api-endpoint.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            alert('Login successful!');
            // Redirect to a different page, e.g., dashboard
            window.location.href = '/dashboard.html';
        } else {
            const errorData = await response.json();
            errorMessage.textContent = errorData.message || 'Invalid credentials. Please try again.';
        }
    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again later.';
        console.error(error);
    }
});
