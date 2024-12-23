// Handle User Login
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Login successful!");
    return false; // Prevent form submission for demo purposes
}

// Handle User Sign Up
function signupUser() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Sign Up successful!");
    return false; // Prevent form submission for demo purposes
}

// Handle Adding a Resource
function addResource() {
    const title = document.getElementById('resource-title').value;
    const link = document.getElementById('resource-link').value;

    if (title === "" || link === "") {
        alert("Please provide both title and link.");
        return false;
    }

    const resourceList = document.getElementById('resource-list');
    const newResource = document.createElement('li');
    newResource.innerHTML = `${title} - <a href="${link}" target="_blank">Download</a>`;
    resourceList.appendChild(newResource);

    alert("Resource added successfully!");
    document.getElementById('add-resource-form').reset(); // Reset the form
    return false; // Prevent form submission for demo purposes
}
