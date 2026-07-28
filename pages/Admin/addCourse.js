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





courseName.innerHTML = ""
lecture.innerHTML = ""
poster.innerHTML = ""
description.innerHTML = ""


courseName.focus();


console.log(form)

form.addEventListener("submit", (e) => {


    e.preventDefault();
})









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






// =======================================



// Function to to Delete  Single User




// let dId ;
// functionID.addEventListener('onclick', async ()=>{

// dId = deleteID.value

//     console.log(dId)

//     console.log("delete me")

//     try {

//          fetch(`http://localhost:3000/courses/${dId}`, {
//         method:"DELETE"   })

//         console.log("Deleted...!")

//     } catch (error) {

//     }



// })


// async function deletTo(id) {




//         let res = await fetch(`http://localhost:3000/courses/${id}`, {
//         method: "DELETE"   })

//         console.log("Deleted...!")

// }


// deletTo(11)

// =========================================================






// // Function to Delete Multiple Users

// async function deleteUpto(form,to) {

//     for(i=form;i<=to;i++){


//         try {
//               let res = await fetch(`http://localhost:3000/courses/${i}`, {
//         method: "DELETE"    })


//         console.log("Deleted...!")

//         } catch (error) {

//         }








//     }


// }


// // deleteUpto(2,10);
// // deleteUpto(8);


let homeBtn = document.querySelector(".homeBtn");

homeBtn.addEventListener("click", () => {

    alert("move to Home Page")
    window.location.href = "../../index.html";

})



// ====================== ADDED DYNAMIC ======================


async function allCourses(){

    let res = await fetch(" https://json-server-apis-0w5g.onrender.com/courses", { method: "GET" })

    let courses = await res.json();

    try {
        let coursesContainer = document.querySelector(".courses-container");




        if(!res.ok){
            throw new Error("Courses not Fetched...!")
        }

        let items = document.createElement("div")
        items.innerHTML = courses.map((course) =>{

            return `
            
            <div class="course">
            
            <b> ${course.id}</b>
            <b> ${course.courseName}</b>
            <img src="${course.poster}" /> 

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

        let editE = document.querySelector(`#delete${course.id}`);
        let deleteE = document.querySelector(`#delete${course.id}`);


        deleteE.addEventListener("click",()=>{

            alert("Want to Delete...!")

            deleteCourse(course.id);

         
        })

        
    });



}

async function deleteCourse(id) {

    let res = await fetch(` https://json-server-apis-0w5g.onrender.com/courses/${id}`, { method: "DELETE" })
    
   window.location.reload()

}





addEventListener("DOMContentLoaded", allCourses);



