document.getElementById("startBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    if(name=="" || email=="" || mobile==""){
        alert("Please fill all details.");
        return;
    }

    alert("Registration Successful!");

});
