function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function createParks() {
    const parent = document.getElementById("div1");
    const child = document.getElementById("p1");

    const li = document,createElement("li");
    const a = document.createElement("a");
    const node = document.createTextNode("park name here");
    para.appendChild(node);

    const element = document.getElementById("div1");
    const child = document.getElementById("p1");
    element.insertBefore(para, child);

}