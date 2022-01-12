const API_URL = "https://elearning-aueb.herokuapp.com/";

/* Query and fetch API data using a provided keyword */

const searchBtn = document.getElementById("search-keyword-btn");
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Retrieve the keyword from it's input field
  const keyword = document.getElementById("courseName").value;

  // Fetch the courses by title
  fetch(API_URL + "courses/search?title=" + keyword)
    .then((response) => response.json())
    .then((data) => {
      // Get and compile the handlebars template
      const source = document.getElementById("subject-preview").innerHTML; //script name
      const template = Handlebars.compile(source);
      let ourGeneratedHTML = template(data);

      let coursesContainer = document.getElementById("course-results-preview");
      coursesContainer.innerHTML = ourGeneratedHTML;
      // Create a new preview for each course fetched
      /*   data.forEach((course) => {
        console.log(course);
      });  */
      console.log(course);
    })
    .catch((err) => console.log(err));
});
