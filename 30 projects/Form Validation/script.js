const submitBtn= document.getElementById('submitBtn');

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();


    if(validateName() && validatemail() && validatpassword()){
        alert("Form is submitted Succesfully")
    }
});


function validateName(){

    let name = document.getElementById('name').value;
    
    if(name.length == 0){
        nameError.innerHTML= "Name is required";
        return false;
    }
    
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write Full Name";
        return false;
    }
    nameError.innerhtml="";
    return true;
}

function validatemail(){

    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML= "Email is required";
        return false;
    }
    
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Enter valid Email";
        return false;
    }
    emailError.innerhtml="";
    return true;
}

function validatpassword(){

    let password = document.getElementById('password').value;

    if(password.length == 0){
        passError.innerHTML= "password is required";
        return false;
    }
    
    // if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
    //     passError.innerHTML="Password should contain 1 uppercase , 1 lowercase ,";
    //     return false;
    // }
    passError.innerhtml="";
    return true;
}
