function get_date(){
    var node = document.getElementById("intro_date");
    var date = Date();
    node.innerHTML = " Last login: " + date.slice(0,16);
}

function hide_once(){
    elm1 = document.getElementById("first_term");
    elm2 = document.getElementById("second_term");
    if(elm1.style.display !== "none"){
        elm1.style.display = "none";
    }  
    if(elm2.style.display === "none"){
        elm2.style.display = "block";
    }   
   // removeEventListener('click',hide_once) 
}
