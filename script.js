// Student Login System

function loginStudent(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if(username === "" || password === ""){

        alert("Please enter Username and Password");

        return;

    }


    // Save Login Status

    localStorage.setItem("studentLogin","true");
    localStorage.setItem("studentName",username);



    // Redirect to Dashboard

    window.location.href="dashboard.html";


}



// Logout Function

function logout(){

    localStorage.removeItem("studentLogin");
    localStorage.removeItem("studentName");

    window.location.href="index.html";

}
