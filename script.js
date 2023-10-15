var ol = document.getElementById("list")
var input=document.getElementById("input")
function add() {
    var listitem = document.createElement("li")
    listitem.innerHTML = input.value +" "+ "<button class='btn btn-success' onclick='del(event)'>Delete</button><br>"
    ol.append(listitem)
}
function del(event){
    event.target.parentElement.remove()
}