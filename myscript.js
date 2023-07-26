function get_date(){
    var node = document.getElementById("HELLO");
    var date = Date();
    node.innerHTML = "$ Last login: " + date.slice(0,16);
}