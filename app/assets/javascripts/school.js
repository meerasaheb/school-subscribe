
function myFunction() {
    var x = document.getElementById("mySelect").selectedIndex;
    alert(document.getElementsByTagName("option")[x].value);
}