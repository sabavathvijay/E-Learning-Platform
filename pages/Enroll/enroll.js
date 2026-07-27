
//===================Enrolling to Course ===============

form.addEventListener('submit', (e) => {

    e.preventDefault();

})



let Name;
let mail;
var c_id;





async function enroll(courseId) {

    //Window TO collect Enrolled Course

    c_id=courseId;

    let want = window.confirm("Do you want to Enroll into this COURSE..? ")

    if (want) {

        window.open(`./pages/Enroll/enroll.html`, " ", "width=300px height=400px")





        // Name = courseName.value;
        // mail = email.value;
        // c_id = courseID.innerHTML = courseID;


        // let enrolled = {
        //     "courseName": Name,
        //     "email": mail,
        //     "courseID": c_id

        // }


        // console.log(enrolled)



        // let res = await fetch("  http://localhost:3001/enrolled", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(enrolled)
        // })





    }

    else {
        alert("OK Alright, Happy Learning")
    }







}


















let courseName = document.querySelector("#courseName");
let email = document.querySelector("#email");
let courseID = document.querySelector("#courseID");
let courseEnroll = document.querySelector("#courseEnroll");


console.log(email.value)
// courseEnroll.addEventListener("click",async () =>{

//       Name = courseName.value;
//         mail = email.value;
//     //  courseID.innerHTML = ;

        





//         let enrolled = {
//             "courseName": Name,
//             "email": mail,
//             "courseID": c_id

//         }



//          let res = await fetch("  http://localhost:3001/enrolled", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(enrolled)
//         })


// })




