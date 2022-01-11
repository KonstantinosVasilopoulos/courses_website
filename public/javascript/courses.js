// Retrieve the category ID from the URL
const getId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

const generateRoot = () => {
    // Root div
    const root = document.getElementById('courses-root')

    const id = getId()
    if (id != null) {
        // Create the handlebars template
        const source = document.getElementById('courses-template').innerHTML
        const template = Handlebars.compile(source)

        // Fetch the courses
        fetch('https://elearning-aueb.herokuapp.com/courses/search?category=' + id)
            .then(response => response.json())
            .then(data => {
                // Display the courses
                const html = template({
                    courses: data,
                })
                root.innerHTML += html
            })
            .catch(error => {
                console.log(error)
            })

    } else {
        // Show error message
        root.innerHTML += '<h1 class="p-5 text-red">No such course exists!</h1>'
    }
}

// Generate content on start
generateRoot()
