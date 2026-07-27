let form = document.querySelector("body");

let container = document.querySelector(".courses-container")






form.addEventListener('submit', (e) => {

    e.preventDefault();

})




async function getCourse() {

    let res = await fetch(" http://localhost:3000/courses", { method: "GET" })

    let courses = await res.json() || [];

    let items = document.createElement("div");


    items.innerHTML = courses.map((course) => {

        return `




          <div class="course">
                        <h2>Course : ${course.courseName}</h2>
                        <figure>
                          
                    <img src='${course.poster}' alt="NO Image" />

                            <figcaption>
                            Description : ${course.description}
                            </figcaption>
                        </figure>
                        <button class="Enroll" id= "enroll${course.id}" > Enroll now </button>
        </div>


`

    }).join(" ");


    container.appendChild(items)

    items.classList.add("items");

    let btn;
    courses.forEach(course => {

        btn = document.querySelector(`#enroll${course.id}`);

        btn.addEventListener('click', () => {
            console.log("Enroll... !")

            //Course ID
            enroll(course.id);
        })


    });



    console.log(items)




}

// ====================Enrolling to Course ===============

async function enroll(courseId) {

    //Window TO collect Enrolled Course


    let want = window.confirm("Do you want to Enroll into this COURSE..? ")

    if (want) {

        window.open(`./pages/Enroll/enroll.html`, " ", "width=300px height=400px")


        let courseName = document.querySelector("#courseName");
        let email = document.querySelector("#email");
        let courseID = document.querySelector("#courseID");


        let name = courseName.value;
        let mail = email.value;
        let c_id = courseID.innerHTML = courseID;


        let enrolled = {
            "courseName": name,
            "email": mail,
            "courseID": c_id

        }





        let res = await fetch(" http://localhost:3000/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enrolled)
        })





    }

    else{
        alert("OK Alright, Happy")
    }







}



addEventListener("DOMContentLoaded", getCourse);