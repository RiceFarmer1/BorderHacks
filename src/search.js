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
    
    for (i=0;i<3;i++){
        const parent = document.getElementById("myUL");
        const li = document.createElement("li");
        const a = document.createElement("a");
        const node = document.createTextNode("park name here");
        a.appendChild(node);
        li.appendChild(a);
        parent.appendChild(li);
    }
}
function test() {
    var url = "https://gist.githubusercontent.com/guest271314/c4eebf14b4a3cfd36f58/raw/37b82a07ec91e9f35396a23ee7aac26b8dd52c23/file.csv";

    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  

    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
        csvData.push(jsonObject[i].split(','));
    }
    // Retrived data from csv file content
    console.log(csvData);
}
