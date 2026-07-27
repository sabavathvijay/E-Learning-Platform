const logout = document.querySelector("#logout");

let user = document.querySelector("#user");



// form.addEventListener('submit', (e) => {

//     e.preventDefault();

// })


user.addEventListener('submit', (e) => {

    // e.preventDefault();



    //let list = document.createElement("")



})


logout.addEventListener("click", () => {

    let want = window.confirm("Are you sure to Logout...!")

    console.log(want)

    if (want) {
        window.location.href = "../../index.html";

    }
    else {
        window.location.href = "./home.html";

    }

})


// ====================== ADDED DYNAMIC ======================



let container = document.querySelector(".courses-container")




async function getCourse() {

    let res = await fetch(" https://json-server-apis-0w5g.onrender.com/courses", { method: "GET" })

    let courses = await res.json() || [];

    let items = document.createElement("div");


    items.innerHTML = courses.map((course) => {


        //=================================CHANGE======================================================
        return `


          <div class="course">
                        <h2>Course : ${course.courseName}</h2>
                        <figure>
                          
                    <!-- 
                    
                    ${course.poster}
                    
                    -->

    <img src='${course.poster}' alt="NO Image" />
                    
                    

                            <figcaption>
                            Description : ${course.description}
                            </figcaption>
                        </figure>
                        <button class="Enroll" id= "enroll${course.id}" > Enroll now </button>
        </div>


`

    }).join(" ");


    container.appendChild(items);

    items.classList.add("items");

    let btn;
    courses.forEach(course => {

        btn = document.querySelector(`#enroll${course.id}`);

        btn.addEventListener('click', () => {
            console.log("Enroll...!")
            //   enroll();

            alert(course.courseID)
            play(course.courseID);

        })


    });



    console.log(items)




}



//=======================Play ================

let winn;

async function play(courseID) {

      let res = await fetch(" https://json-server-apis-0w5g.onrender.com/courses", { method: "GET" })
    let courses = await res.json();

    courses.forEach((course) =>{

        if(courseID===course.courseID){


            window.open(`../PlayList/playCourse.html`,"","width=600px, height=500px")

        // winn=window.open("about:blank","","width=600px, height=500px")

               

        }

        // winn.innerHTML=`
        
        

        

    })

    
}




// ====================Enrolling to Course ===============

function enroll() {

    let want = window.confirm("Do you want to Enroll into this COURSE..? ")

    if (want) {



    }







}



addEventListener("DOMContentLoaded", getCourse);




