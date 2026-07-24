

let form = document.querySelector("form");

let userName = document.querySelector("#userName");

let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let password = document.querySelector("#password");
let sumbitBtn = document.querySelector(".registerBtn");


form.addEventListener('submit', (e) => {

    e.preventDefault();

})

sumbitBtn.addEventListener('click', async () => {
    console.log("ClickEd...!")



    if (email.value && userName.value && email.value && password.value && mobile.value) {

        let res = await fetch("https://json-server-iw8b.onrender.com/Users", { method: "GET" })

        let data = await res.json();

        console.log(data)

        let flag = false;
        let has = false;
        data.forEach(user => {


            console.log(user.email)
            if (user.email === email.value) {

                has = true;



                console.log("User already Exist..!")


            }
            // else {

            //     flag = true;



            // }



        });

        if ( !has) {
            postData();
            window.confirm("User Registered")
            window.location.href="./login.html";
        }
        else {
            window.location.href="./pages/login/login.html";
            window.confirm("User already Exist..!")
        }






    }

})




// Post User Data into JSON file
async function postData() {

    let user = {

        "userName": userName.value,
        "email": email.value,
        "mobile": mobile.value,
        "password": password.value


    }

    console.log("Data Posted")

    let res = await fetch("https://json-server-iw8b.onrender.com/Users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    })



    console.log("Posted..!")




}



// Function to Delete Multiple Users

async function deleteUpto(form,to) {

    for(i=form;i<=to;i++){


        let res = await fetch(`https://json-server-iw8b.onrender.com/Users/${i}`, {
        method: "DELETE"    })

        console.log("Deleted...!")







    }

    
}

// Function to to Delete  Single User

async function deleteUpto(id) {

    


        let res = await fetch(`https://json-server-iw8b.onrender.com/Users/${id}`, {
        method: "DELETE"    })

        console.log("Deleted...!")







    

    
}
//deleteUpto(1,20);
// deleteUpto(8);