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
    function readTextFile(file){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    } // source: https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file

    const csvFile = readTextFile("https://raw.githubusercontent.com/RiceFarmer1/BorderHacks/main/src/Fundy_NP_Forest_TrailConditionIndex_2014_data.csv");
    console.log(typeof(csvFile))
    //const reader = new FileReader();

    //const text = e.target.result;
    //document.write(text);

}
