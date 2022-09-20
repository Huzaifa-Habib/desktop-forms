
var get = window.localStorage.getItem('userData');
var object = JSON.parse(window.localStorage.getItem('userData'));
console.log(get)
for (var key in object) {
   console.log( object[key])
}

var userName = document.getElementById("userName")
userName.value = object[key].userData
var gmail = document.getElementById("gmail");
gmail.value = object[key].userGmail
var address = document.getElementById("address")
address.value = object[key].userAddress
var pass = document.getElementById("pass");
pass.value = object[key].userPass
var dob = document.getElementById("dob");
dob.value = object[key].userDOB
var postal = document.getElementById("postal");
postal.value = object[key].userCode
var phone = document.getElementById("phone")
phone.value = object[key].userNo

var dropD = document.getElementById("drop")
dropD.style.display = "none"

var dropdown= document.getElementById("drop")
dropdown.style.display="none"


function p () {
    if (dropdown.style.display=="none"){
                dropdown.style.display="flex"
               
            }
            else{
                dropdown.style.display="none"
        
        
            }

}


var profile = document.getElementById("pro");
var modal = document.getElementById("info") 

function modalF() {
      modal.style.display="block"
      dropdown.style.display="none"


      modal.animate([   
         // { transform: 'translateY(660px)'},
         { transform: 'translateY(-660px)'},
         {transition: '2s'}
     ],{
         duration: 1000
     });
     


}

function closeM(){
   modal.style.display="none"
}

function main() {
   var k = document.getElementById("j")
   k.setAttribute("href", "../index.html")
   var object = JSON.parse(window.localStorage.getItem('userData'));

   let getPrevData =JSON.parse(window.localStorage.getItem('userData'));
   for(var key in getPrevData){
       if(  getPrevData[key].logInUser  === true){
           getPrevData[key].logInUser = false
           console.log(getPrevData[key])
           localStorage.setItem('userData',JSON.stringify(getPrevData))

           
       }
       
   }
    
}
















