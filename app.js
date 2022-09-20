var signUp = document.getElementById("signUp");
console.log(signUp)
var signIn = document.getElementById("signIn");



function signUpForm() {
    signIn.style.display = "none";
    signUp.style.display = "block"
    saveGmail.value = "";
    savePaw.value = "";
    
error1.style.display = "none"
error1P.style.display = "none"


    signUp.animate([   
        // { transform: 'translateY(660px)'},
        { transform: 'translateY(-900px)'},
        {transition: '2s'}
    ],{
        duration: 1500
    });

}

var userName = document.getElementById("name")
userName.setAttribute("onBlur", "uName()")

var gmail = document.getElementById("email")
gmail.setAttribute("onBlur", "emaila()")

var pass = document.getElementById("pwd")
pass.setAttribute("onBlur", "password()")
var confPass = document.getElementById("confpwd")
confPass.setAttribute("onBlur", "confirm()")

var address = document.getElementById("addre")
var dob = document.getElementById("date")
var pic = document.getElementById("avatar")

var phoneNo = document.getElementById("phone")
phoneNo.setAttribute("onBlur", "correctNo()")

var postal = document.getElementById("postal")
postal.setAttribute("onBlur", "correctPostal()")


var maleF = document.getElementById("male")
maleF.setAttribute("onClick", "male()")

var femaleF = document.getElementById("female")
femaleF.setAttribute("onClick", "female()")



// Errors
var emptyError = document.getElementById("emptyError")
var lengthError = document.getElementById("lengthError")
var spaceError = document.getElementById("spaceError")
var emailError = document.getElementById("emailError")
var confirmation = document.getElementById("confirmation")
var numberError = document.getElementById("correctNoError");
var numberLengthError = document.getElementById("noLengthError");
var pLError = document.getElementById("postalLengthError")
var passError = document.getElementById("passError")
var existGmailError = document.getElementById("existGmailError")






emptyError.style.display = "none"
lengthError.style.display = "none"
spaceError.style.display = "none"
emailError.style.display = "none"
confirmation.style.display = "none"
numberError .style.display = "none"
numberLengthError .style.display = "none"
pLError .style.display = "none"
passError .style.display = "none"
existGmailError.style.display = "none"

function Data(userGmail, userPass, userName, userAddress, userDOB, userPic, userNo, userCode,logInUser,seatsBooked) {
    this.userGmail = userGmail;
    this.userPass = userPass;
    this.userData = userName;
    this.userAddress = userAddress;
    this.userDOB = userDOB;
    this.userPic = userPic;
    this.userNo = userNo;
    this.userCode = userCode;
    this.logInUser = logInUser
    this.seatsBooked = seatsBooked

}

var userData = []


function dis() {
    if(pass.hasAttribute("type", "password" || confPass.hasAttribute("type", "password"))) {
        pass.setAttribute("type", "text")
        confPass.setAttribute("type", "text")

    }

    else{
        pass.setAttribute("type", "password")
        confPass.setAttribute("type", "password")
    }



}



function uName() {

    
    var incorrectName = /\s{2}/.test(userName.value)
    if (userName.value.length < 3) {
        lengthError.style.display = "block"
        spaceError.style.display = "none"

    }

    else if (incorrectName) {
        spaceError.style.display = "block"
        lengthError.style.display = "none"
        
    }

    else{
        lengthError.style.display = "none"
        spaceError.style.display= "none"
    }

   
}


function emaila() {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test( gmail.value.toLowerCase())) {
        emailError.style.display = "none"
    }
    else{
        emailError.style.display = "block"
        emptyError.style.display = "none"
    }

  

    var object = JSON.parse(window.localStorage.getItem('userData'));
    for (var key in object) {
       if (gmail.value === object[key].userGmail){
            existGmailError.style.display="block"

        }
        else{
            existGmailError.style.display="none"

        }


    }

   
}

function password() {
    var incorrectPass= /\s{2}/.test(pass.value)

    if (incorrectPass) {
        passError.style.display = "block"
    }

    else{
        passError.style.display = "none"
    }



}


function confirm() {
    if (pass.value !== confPass.value) {
        confirmation.style.display = "block"
    }
   

    else{
        confirmation.style.display = "none"
    }
}

var x;


function male() {
    maleF.style.background = "#55DD33"
    maleF.style.color = "white"
    maleF.style.transition = "2s ease"
    maleF.style.fontWeight = "bolder"
    maleF.style.border = "none"
    x = true


    if ( femaleF.style.background = "#55DD33") {
        femaleF.style.background = "rgba(128, 128, 128, 0.062)"
        femaleF.style.border=" 1px solid rgba(128, 128, 128, 0.452)" ;
        femaleF.style.color = "rgba(128, 128, 128, 0.767)"
        femaleF.style.transition = "2s ease"

    }

}

function female() {
    femaleF.style.background = "#55DD33"
    femaleF.style.color = "white"
    femaleF.style.fontWeight = "bolder"
    femaleF.style.border = "none"
    femaleF.style.transition = "2s ease"
    x = true



    if(maleF.style.background = "#55DD33") {
        maleF.style.background = "rgba(128, 128, 128, 0.062)"
        maleF.style.border=" 1px solid rgba(128, 128, 128, 0.452)" ;
        maleF.style.color = "rgba(128, 128, 128, 0.767)"
        maleF.style.transition = "2s ease"

    }

}

function correctNo() {
    var pValue = phoneNo.value;

    for (var i =0; i < pValue.length; i++) {
        if(Number(pValue[0]) === 0 && Number(pValue[1]) === 3 ) {
            numberError.style.display="none"
            console.log(pValue[0])
            console.log(pValue[1])
            break;
        }

        else{
            numberError.style.display="block"
         }
    }


    if (Number(pValue.length) < 11 ) {
        numberLengthError.style.display = "block"
        if (numberError.style.display="block") {
            numberError.style.display="none"


        }


    }

    else if(Number(pValue.length) > 11) {
        numberLengthError.style.display = "block"

    }

    else {
        numberLengthError.style.display = "none"


    }
    
}

function correctPostal() {
    if (Number(postal.value.length) !== 5) {
        pLError.style.display="block"
    }
    else{
        pLError.style.display = "none"
    }
}

var signUp = document.getElementById("signUp");
let getPrevData =JSON.parse(window.localStorage.getItem('userData'));

function signUpF() {
    



    if (emptyError.style.display === "block" || lengthError.style.display === "block" || spaceError.style.display === "block" || emailError.style.display === "block" || confirmation.style.display === "block" || numberError.style.display === "block" || numberLengthError.style.display === "block" || pLError.style.display === "block" || existGmailError.style.display==="block"  ) {
        alert("Something Wrong or missing above")
    }

    else if(userName.value === "" || gmail.value === "" || pass.value === "" || confPass.value === "" || address.value === "" || postal.value === "" || phoneNo.value === "" || dob.value === "" || pic.value === "") {
        alert("Fill Out All Fields")

    }

    else if(x !== true) {
        alert("Please Select Gender")
    }


    else {
        if(getPrevData) {
            userData.push(... getPrevData)    
        }



        AmagiLoader.show();
         setTimeout(() => {
        AmagiLoader.hide();
    }, 3000);
       
        signUp.style.display = "none"
        signIn.style.display = "block"
        signIn.animate([   
            // { transform: 'translateY(660px)'},
            { transform: 'translateY(-200px)'},
            {transition: '2s'}
        ],{
            duration: 1500
        });

        var data = new Data(gmail.value, pass.value,userName.value,address.value, dob.value, pic.value, phoneNo.value, postal.value, false, false)
        userData.push(data)
        var string =JSON.stringify(userData)
        window.localStorage.setItem("userData", string);

        console.log(userData)

        

        userName.value = ""
        gmail.value = "" 
        pass.value = "" 
        confPass.value = ""
        address.value = "" 
        postal.value = "" 
        phoneNo.value = "" 
        dob.value = "" 
        pic.value = ""
        maleF.style.background = "rgba(128, 128, 128, 0.062)"
        maleF.style.border=" 1px solid rgba(128, 128, 128, 0.452)" ;
        maleF.style.color = "rgba(128, 128, 128, 0.767)"
        maleF.style.transition = "2s ease"
        femaleF.style.background = "rgba(128, 128, 128, 0.062)"
        femaleF.style.border=" 1px solid rgba(128, 128, 128, 0.452)" ;
        femaleF.style.color = "rgba(128, 128, 128, 0.767)"
        femaleF.style.transition = "2s ease"




    }

    

   
}

function already(){
    signUp.style.display = "none"
    signIn.style.display = "block"
    signIn.animate([   
        // { transform: 'translateY(660px)'},
        { transform: 'translateY(-200px)'},
        {transition: '2s'}
    ],{
        duration: 1500
    });

}


// Sign in validation

var saveGmail = document.getElementById("userGmail")
var savePaw = document.getElementById("Userpwd")

var error1 = document.getElementById("error1")
var error2 = document.getElementById("error2")
var error1P = document.getElementById("error1P")
var error2P = document.getElementById("error2P")

error1.style.display = "none"
error1P.style.display = "none"





function signInF() {
    var get = window.localStorage.getItem('userData');
    var object = JSON.parse(window.localStorage.getItem('userData'));
    for (var key in object) {
       console.log( "addas"+object[key].userGmail)

       if(saveGmail.value !== object[key].userGmail || savePaw.value !== object[key].userPass  ) {
            error1.style.display = "block"
            error1P.style.display = "block"  
                     
       }

    

       else{
        let getPrevData =JSON.parse(window.localStorage.getItem('userData'));
        for(var key in getPrevData){
            if(getPrevData[key].userGmail === saveGmail.value){
                getPrevData[key].logInUser = true
                console.log(getPrevData[key])
                localStorage.setItem('userData',JSON.stringify(getPrevData))

                
            }
            
        }

        var link = document.getElementById("link");
        link.setAttribute("href", ".//dashboard/dashboard.html");
       
       }
     
        
    }

    
}




// localStorage.clear()



