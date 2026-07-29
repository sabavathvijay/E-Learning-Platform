let courseName = document.querySelector("#courseName");
let poster = document.querySelector("#poster");
let lecture = document.querySelector("#lectureURL");
let description = document.querySelector("#description");
let addCourse = document.querySelector("#addCourse");
let form = document.querySelector("form");
let display = document.querySelector(".display");
let fieldset = document.querySelector("fieldset");
let courseID = document.querySelector("#courseID");
let deleteID = document.querySelector("#deleteID");
let functionID = document.querySelector("#deleteIDf");
let inputs = document.querySelector(".inputs");




form.addEventListener("submit", (e) => {


    e.preventDefault();
})

courseName.innerHTML = ""
lecture.innerHTML = ""
poster.innerHTML = ""
description.innerHTML = ""


courseName.focus();


console.log(form)










async function myCourse() {


    let ids = courseName.value
    ids += +(Math.floor(Math.random() * 10000000));

    let course = {
        "courseName": courseName.value,
        "poster": poster.value,
        "description": description.value,
        "courseID": ids
    }


    addMyCourse(course)


}

//==========  Adding my Course ============

async function addMyCourse(course) {




    if (courseName.value && poster.value && description.value && lecture.value) {

        let res = await fetch("https://json-server-apis-0w5g.onrender.com/courses", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(
                course
            )
        })

        alert("Course Added....!")
        window.location.reload()
    }
    else {
        // alert("Fill the Course Details")
    }



}


addCourse.addEventListener("click", () => {

    myCourse();


})


let homeBtn = document.querySelector(".homeBtn");

homeBtn.addEventListener("click", () => {

    alert("move to Home Page")
    window.location.href = "../../index.html";

})

// ====================== ADDED DYNAMIC ======================


async function allCourses() {

    let res = await fetch(" https://json-server-apis-0w5g.onrender.com/courses", { method: "GET" })

    let courses = await res.json();

    try {
        let coursesContainer = document.querySelector(".courses-container");




        if (!res.ok) {
            throw new Error("Courses not Fetched...!")
        }

        let items = document.createElement("div")
        items.innerHTML = courses.map((course) => {

            return `
            
            <div class="course">
            
            <b>ID : ${course.id}</b>
            <b> ${course.courseName}</b>
            <img src="${course.poster}" /> 
            <b>Course ID :</b><i style='"border:solid 2px"; color:blue; " '> ${course.courseID}</i>

            <div class="btns">
            <button id="delete${course.id}" class="delete"> Delete</button>
            <button id="edit${course.id}" class="edit">Edit</button>
          </div>
            
            </div>           
            `

        }).join(" ");

        coursesContainer.appendChild(items)


        items.classList.add("items")



    } catch (error) {
        console.warn(error)


    }



    courses.forEach(course => {

        let editE = document.querySelector(`#edit${course.id}`);
        let deleteE = document.querySelector(`#delete${course.id}`);


        deleteE.addEventListener("click", () => {

            alert("Want to Delete...!")

            deleteCourse(course.id);




        })

        editE.addEventListener("click", () => {
            alert("Want to edit..!");
          
                editCourse(course.id);
           
        })

    });

}

//Delete Course

async function deleteCourse(id) {

    let res = await fetch(` https://json-server-apis-0w5g.onrender.com/courses/${id}`, { method: "DELETE" })

    window.location.reload()

}

//Edit Course

//=======================================
// Edit Course
async function editCourse(id) {
  let courseName = document.querySelector("#courseName");
  let poster = document.querySelector("#poster");
  let lecture = document.querySelector("#lectureURL");
  let description = document.querySelector("#description");

  let res = await fetch(`https://json-server-apis-0w5g.onrender.com/courses/${id}`, { method: "GET" });
  let myCourse = await res.json();

  if (!res.ok) {
    throw new Error("Course Not Found");
  }

  //   get input fields values
  courseName.value = myCourse.courseName;
  poster.value = myCourse.poster;
  lecture.value = myCourse.lecture;
  lecture.value = myCourse.lecture;
  description.value = myCourse.description;

  // Adding Update button
  let updateTO = document.querySelector("#span");
  updateTO.innerHTML = `<button type="submit" onclick="UpdateCourse(${id})">Update</button>`;
}



// Update Course


async function UpdateCourse(id) {
  let courseName = document.querySelector("#courseName");
  let poster = document.querySelector("#poster");
  let lecture = document.querySelector("#lectureURL");
  let description = document.querySelector("#description");

  let update = {
    courseName: courseName.value,
    poster: poster.value,
    lecture: lecture.value,
    description: description.value
  };

  alert("Want to Update");

  let res = await fetch(`https://json-server-apis-0w5g.onrender.com/courses/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(update)
  });
  window.location.reload()

  if (res.ok) {
    // alert("Course updated successfully!");
  } else {
    alert("Failed to update course.");
  }

 
}



addEventListener("DOMContentLoaded", allCourses);



