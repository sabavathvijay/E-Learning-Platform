let courseName = document.querySelector("#courseName");
let poster = document.querySelector("#poster");
let lecture = document.querySelector("#lectureURL");
let description = document.querySelector("#description");
let addCourse = document.querySelector("courseName");
let form = document.querySelector("form");





console.log(form)

form.addEventListener("submit",(e) =>{

    
    e.preventDefault();
})


  



   


async function myCourses(){



    let course ={
        "courseName":courseName.value,
        "poster":poster.value,
        "description":description.value

    }


    let res = await fetch(" http://localhost:3000/courses",{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify(
            course



        )
    })




}

// myCourses()


