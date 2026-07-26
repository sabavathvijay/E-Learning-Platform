const logout = document.querySelector("#logout");

let user = document.querySelector("#user");

user.addEventListener('submit', (e) => {

   // e.preventDefault();



   //let list = document.createElement("")



})


logout.addEventListener("click",() =>{

    let want =window.confirm("Are you sure to Logout...!")

    console.log(want)

    if(want){
        window.location.href ="../../index.html";
        
    }
    else{
   window.location.href ="./home.html";

}

})



