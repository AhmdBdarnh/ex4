
  
var Age_Counter = 23;

window.onload = () => {
    createOption();
    document.getElementById("TheName").style.marginLeft = "20px";
    document.getElementById("TheName").style.marginTop = "20px";

}
















function createOption() {
    for(let i = Age_Counter ; i < 39 ; i ++){
    var option = document.createElement("option"); 
    option.innerHTML = Age_Counter;
    if(Age_Counter == 23){
        option.selected = true;
    }
    var box = document.getElementById("SelectAge"); 
    box.appendChild(option);
    ++Age_Counter;

    }        
}


function submitButton() {

    //check name

        document.querySelector("form").addEventListener("submit", function (event) {
        
            var nameInput = document.getElementsByName("fullName")[0];
        
            var nameValue = nameInput.value.trim();
            if (!/^[A-Za-z]+$/.test(nameValue)) {
                event.preventDefault();
                nameInput.style.border = "2px solid red";
                document.getElementById("Name-warning").style.visibility = "visible";
                nameInput.value = ""; 
            } 
   
     //check interests
        var interests = document.querySelectorAll('input[name="interests[]"]:checked');
        if (interests.length < 3) {
            event.preventDefault();
             var warning = document.getElementById("interest-warning"); 
            warning.style.visibility = "visible";
        } 
        else{
            warning.style.visibility = "hidden";
        }
        });
        
}






















































































