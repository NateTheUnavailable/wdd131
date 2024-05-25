// Get the current year
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

// Update the footer content with the current year
document.getElementById('footer').innerText = `© ${currentYear} Nathaniel Gardner | Last Modified: ${lastModifiedDate}`;