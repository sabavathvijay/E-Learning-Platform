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

        let res = await fetch(" http://localhost:3000/courses", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(
                course
            )
        })
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



// let container = document.querySelector(".courses-container")




// async function getCourse() {

//     let res = await fetch(" https://json-server-apis-0w5g.onrender.com/courses", { method: "GET" })

//     let courses = await res.json() || [];

//     let items = document.createElement("div");


//     items.innerHTML = courses.map((course) => {


//         //=================================CHANGE======================================================
//         return `


          
//         <div class="course">
//                         <h2>Course : ${course.courseName}</h2>
                       
                       
//                         <figure>
                          
//                     <!-- 
                    
//                     ${course.poster}
                    
//                     -->

//                      <img src='${course.poster}' alt="NO Image" />
                    
                    

//                             <figcaption>
//                             Description : ${course.description}
//                             </figcaption>
//                         </figure>
                     
//         </div>


// `

//     }).join(" ");


//     container.appendChild(items);

//     items.classList.add("items");

//     let btn;
//     courses.forEach(course => {

//         btn = document.querySelector(`#enroll${course.id}`);

//         btn.addEventListener('click', () => {
//             console.log("Enroll...!")
//             //   enroll();

//             alert(course.courseID)
//             play(course.courseID);

//         })


//     });



//     console.log(items)




// }



// //=======================Play ================

// let winn;

// async function play(courseID) {

//     let res = await fetch(" https://json-server-apis-0w5g.onrender.com/courses", { method: "GET" })
//     let courses = await res.json();

//     courses.forEach((course) => {

//         if (courseID === course.courseID) {


//             window.open(`../PlayList/playCourse.html`, "", "width=600px, height=500px")

//             // winn=window.open("about:blank","","width=600px, height=500px")



//         }

//         // winn.innerHTML=`





//     })


// }




// // ====================Enrolling to Course ===============

// function enroll() {

//     let want = window.confirm("Do you want to Enroll into this COURSE..? ")

//     if (want) {



//     }







// }



// addEventListener("DOMContentLoaded", getCourse);



