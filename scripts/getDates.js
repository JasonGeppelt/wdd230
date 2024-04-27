// Get the current year and update the content of the element with ID 'currentYear'
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get the last modified date of the document and update the content of the element with ID 'lastModified'
document.getElementById('lastModified').textContent = document.lastModified;
