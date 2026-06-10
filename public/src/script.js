document.addEventListener('DOMContentLoaded', () => {
    // Show the first tab by default
    showTab('mortgage');
    console.log('123');
});

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
} 