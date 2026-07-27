
const email = document.querySelector("#email");

const password = document.querySelector("#password");
const myform = document.querySelector("form");
const loginBtn = document.querySelector(".loginBtn");
const homeBtn = document.querySelector("#homeBtn");

email.focus();





myform.addEventListener('submit', (e) => {

    e.preventDefault();

    //  login()
})



//============= Save data into LocalStorage ===================


// let data;
async function myStorage() {

    let res = await fetch("https://json-server-iw8b.onrender.com/Users", { method: "GET" })

    let data = await res.json();

    // let allUser = JSON.parse(localStorage.getItem("users")) || [];




    localStorage.setItem("users", JSON.stringify(data));


    console.log(data)




}
//  myStorage()







loginBtn.addEventListener('click', () => {

    myStorage()

    if (email.value && password.value) {

        if (email.value === "admin@gmail.com" && password.value === "admin") {

            window.location.href = "../Admin/addCourse.html"

        }
        else{

            login()
        }

    }

})



console.log("email,password")






let users;

async function login() {

    // Window.location.reload();

    let res = await fetch("https://json-server-iw8b.onrender.com/Users", { method: "GET" })

    users = await res.json();





    // let users = JSON.parse(localStorage.getItem("users"))




    let matched = false;

    users.forEach(user => {

        console.log(matched)

        if (user.email === email.value && user.password === password.value) {

            matched = true;

            email.innerHTML = " "
            password.innerHTML = " "


        }


    });


    if (matched) {

        console.log("You are a User..! \n Welcome You Logined");

        window.alert("Welcom Your Login Successfully....!")
        window.location.href = "../home/home.html";
    }

    else {
        let want = window.confirm("Sorry Your Login is Failed....!\n Register first...!")
        console.log("Sorry Your Login is Failed....!\n Register first...!");

        if (want) {

            window.location.href = "./register.html";
        }
        else {
            window.location.href = "./login.html";
        }



    }






}

homeBtn.addEventListener("click", () => {
    window.location.href = "../../index.html";

})







