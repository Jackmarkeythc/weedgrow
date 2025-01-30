document.getElementById('signUpLink')?.addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'block';
});

document.getElementById('loginLink')?.addEventListener('click', function() {
    document.getElementById('signUpContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('forgotPasswordLink')?.addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordContainer').style.display = 'block';
});

document.getElementById('backToLoginLink')?.addEventListener('click', function() {
    document.getElementById('forgotPasswordContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Perform validation or API call here
    if (email === 'user@example.com' && password === 'password123') {
        // Redirect to the main page upon successful login
        window.location.href = 'main.html';
    } else {
        alert('Invalid email or password');
    }
});

document.getElementById('signUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle sign-up form submission
    alert('Sign-up form submitted');
});

document.getElementById('forgotPasswordForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle forgot password form submission
    alert('Forgot password form submitted');
});
