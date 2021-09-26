function searchFunction() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    group = ul.getElementsByClassName("group");
    for (i = 0; i < group.length; i++) {
        txtValue = group[i].getElementsByTagName("button")[0].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            group[i].style.display = "";
        } else {
            group[i].style.display = "none";
        }
    }
}

function buttonFunction() {
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
    });
} 
}

function createParks() {
    var url = "https://raw.githubusercontent.com/RiceFarmer1/BorderHacks/main/src/data/data.csv";

    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  

    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
        csvData.push(jsonObject[i].split(','));
    }

    console.log(csvData)
    var i;
    for (i=1;i<csvData.length;i++){
        const parent = document.getElementById("myUL");
        const group = document.createElement("li")
        const btn = document.createElement("button");
        btn.innerHTML = csvData[i][1];
        btn.className = "collapsible";
        btn.onclick = buttonFunction();
        group.className = "group";
        
        const div = document.createElement("div");
        for (var j = 0; j < csvData[i].length; j++){
            var text = csvData[0][j] + ": " + csvData[i][j];
            const li = document.createElement("li");
            li.innerHTML = text;
            li.className = "infolist";
            div.appendChild(li);
        }
        
        div.style.display = "none";
        div.className="infobox"

        group.appendChild(btn);
        group.appendChild(div);
        parent.appendChild(group);
    }
}
