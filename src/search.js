function onLoad() {

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

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
                var a = this.classList.toggle("active");
                console.log(a);
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                content.style.display = "block";
                }
        });
    } //cite: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
}

function searchFunction() {
    var input = document.getElementById("myInput");
    var search = input.value.toUpperCase();
    var ul = document.getElementById("myUL");
    var group = ul.getElementsByClassName("group");

    var i, txtValue;
    for (i = 0; i < group.length; i++) {
        txtValue = group[i].getElementsByTagName("button")[0].innerHTML;
        if (txtValue.toUpperCase().indexOf(search) > -1) {
            group[i].style.display = "";
        } else {
            group[i].style.display = "none";
        }
    }
}

function collapseAll() {
    var group = document.getElementById("myUL").getElementsByClassName("group");
    var button;
    for (var i = 0; i < group.length; i++){
        button = group[i].getElementsByTagName("button")[0];
        button.classList.toggle('active', false)
        button.nextElementSibling.style.display = "none";
    }
}

function openAll() {
    var group = document.getElementById("myUL").getElementsByClassName("group");
    var button;
    for (var i = 0; i < group.length; i++){
        button = group[i].getElementsByTagName("button")[0];
        button.classList.toggle('active', true)
        button.nextElementSibling.style.display = "";
    }
}