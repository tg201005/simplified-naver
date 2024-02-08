document.addEventListener('DOMContentLoaded', function() {
    // Remove #container
    const container = document.querySelector('#container');
    if (container) {
        container.remove();
    }

    // Keep only the fourth div inside /html/body/div[2]/div[2]/div and remove the first three
    const divsToKeep = document.querySelectorAll('/html/body/div[2]/div[2]/div/div[4]');
    const parentDiv = document.querySelector('/html/body/div[2]/div[2]/div');
    if (parentDiv && divsToKeep.length > 0) {
        while (parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
        // Append the fourth div back to its parent
        divsToKeep.forEach(div => {
            parentDiv.appendChild(div);
        });
    }

    // Remove #search-right-banner
    const searchRightBanner = document.querySelector('#search-right-banner');
    if (searchRightBanner) {
        searchRightBanner.remove();
    }
});