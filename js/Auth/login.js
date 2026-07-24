
let email = document.querySelector("#email");

const password = document.querySelector("#password");
const form = document.querySelector("form");
const loginBtn = document.querySelector(".loginBtn");



form.addEventListener('submit', (e) => {

    e.preventDefault();
})

loginBtn.addEventListener('click', () => {
    login(email.value, password.value)

})



console.log("email,password")







async function login(email, password) {


    let res = await fetch("https://json-server-iw8b.onrender.com/Users", { method: "GET" })

    let data = await res.json();

    let has = false;

    data.forEach(user => {

        if (user.email === email && user.password === password) {

            has = true;

        }


    });


    if(has){

          console.log("You are a User..! \n Welcome You Logined");
          
        //   window.location.href="/pages/home/home.html";
          window.location.href="../home/home.html";
          window.confirm("Welcom Your Login Successfully....!")
        }
        
        else{
            window.confirm("Sorry Your Login is Failed....!\n Register first...!")
            console.log("Sorry Your Login is Failed....!\n Register first...!");

             window.location.href="./register.html";
            


    }
  





}