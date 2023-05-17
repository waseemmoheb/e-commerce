function formValidate() {
var name = document.getElementById("name").Value ;
var email = document.getElementById("email").Value ;
var phone = document.getElementById("phone").Value ;
var error = document.getElementById("error");
var text = '';
        if(name.lengh < 3){
            
            text ="please enter valid name";
            error.innerHTML = text;
            return false;
        }


        else if(email.indexof("@") == -1 ) {
            text ="please enter valid email";
            error.innerHTML = text; 
            return false;
        }








        if(isNaN(phone)){
            text ="please enter valid phone";
            error.innerHTML = text; 
            return false;
        }


else{
    alert("done");
    return true;

}



















}