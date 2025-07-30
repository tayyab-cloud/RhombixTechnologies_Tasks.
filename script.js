const apiUrl = 'https://azh8jyxj98.execute-api.us-east-1.amazonaws.com/prod'; // Make sure this is correct

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
});

function getVisitorCount() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // response.json() has already parsed the data into an object.
            // We can directly access the 'count' property.
            document.getElementById('visitor-count').textContent = data.count;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            document.getElementById('visitor-count').textContent = 'Error';
        });
}
