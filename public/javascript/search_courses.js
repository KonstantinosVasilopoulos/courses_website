const API_URL = 'https://elearning-aueb.herokuapp.com/'

/* Query and fetch API data using a provided keyword */
const searchBtn = document.getElementById('search-keyword-btn')
searchBtn.addEventListener('click', (event) => {
    event.preventDefault()

    // Retrieve the keyword from it's input field
    const keyword = document.getElementById('courseName').value

    // Fetch the courses by title
    fetch(API_URL + 'courses/search?title=' + keyword)
    .then(response => response.json())
    .then(data => {
        // Search result's section tag
        const destination = document.getElementById('course-results-preview')

        // Get and compile the handlebars template
        const source = document.getElementById('course-preview').innerHTML
        const template = Handlebars.compile(source)

        // Create the preview for the courses fetched
        const html = template({
            courses: data,
        })
        destination.innerHTML += html
    })
    .catch(err => console.log(err))
})
