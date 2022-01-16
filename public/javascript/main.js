const fetchCategories = () => {
    const API_URL = 'https://elearning-aueb.herokuapp.com/categories/'

    // Fetch the courses
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            // Search result's section tag
            const destination = document.getElementById('courses-dropdown-container')

            // Get and compile the handlebars template
            const source = document.getElementById('course-dropdown-link').innerHTML
            const template = Handlebars.compile(source)

            // Create a link for each category
            const CATEGORY_URL = 'courses?category='
            for (let course of data) {
                let html = template({
                    link: CATEGORY_URL + course.id,
                    text: course.title,
                })
                destination.innerHTML += html
            }
        })
        .catch((err) => console.log(err))
}

// Add event listener for creating the categories dropdown
const dropdown = document.getElementById('courses-dropdown-nav-item')
dropdown.addEventListener('mouseenter', (event) => {
    event.preventDefault()
    fetchCategories()
})

dropdown.addEventListener('mouseleave', (event) => {
    event.preventDefault()

    // Empty the dropdown list
    const list = document.getElementById('courses-dropdown-container')
    list.innerHTML = ''
})
