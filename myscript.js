function get_date(){
    var node = document.getElementById("intro_date");
    var date = Date();
    node.innerHTML = " Last login: " + date.slice(0,16);
}


let my_count = 0;
function hide_once(){
        let elm1 = document.getElementById("press_enter");
        if(elm1.style.display !== "none"){
            elm1.style.display = "none";
            }  
        let elm2 = document.getElementById("fix_this");
        elm2.addEventListener(click,hide_second());
}

function hide_second(){
    let elm1 = document.getElementById("press_enter")
    elm1.innerHTML = "cd ./Desktop/About"
    let elm2 = document.getElementById("bar_1");
    if(elm2.style.display === "none"){
        elm2.style.display = "inline-block";
        }
}

let my_index = 0; 

function showNext() {
    const sequence_divs = document.querySelectorAll('.sequential_div');
    console.log(sequence_divs)
    if (my_index <sequence_divs.length){
        sequence_divs[my_index].style.display = 'flex';
        my_index++;
    }
}

