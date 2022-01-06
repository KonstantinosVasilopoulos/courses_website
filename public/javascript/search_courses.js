const API_URL = 'https://elearning-aueb.herokuapp.com/'

/* Query and fetch API data using a provided keyword */
function searchCourse() {
    // Retrieve the keyword from it's input field
    const keyword = document.getElementById('courseName').value

    // Fetch the courses by title
    fetch(API_URL + 'courses/search?title=' + keyword, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
}