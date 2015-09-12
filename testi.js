
var fbRef = new Firebase('https://trainingdiary.firebaseio.com');
var d = '';
fbRef.child("exercises").on("child_added", function(snapshot){
//fbRef.orderByChild("db").on("child_added", function(snapshot){
       console.log("******", snapshot.key());
        d += JSON.stringify(snapshot.val()) +'\n\n';
        var title = document.createElement("div");
        title.setAttribute("id", snapshot.key());
        console.log(snapshot.val().title);
        var cont = document.createTextNode(snapshot.val().title);
        title.appendChild(cont);
        var delB = document.createElement("button");
        delB.innerHTML = "X"
        delB.onclick = function () { delHarjoite(snapshot.key()) };
        title.appendChild(delB);
        document.getElementById("harjoitteet").appendChild(title);
        gotData(d);
    });

fbRef.child("exercises").on("child_removed", function(snapshot){
//fbRef.orderByChild("db").on("child_added", function(snapshot){
       console.log("* DEL * ****", snapshot.key());
        d = '';
        d += JSON.stringify(snapshot.val()) +'\n\n';
        //var list = document.getElementById("harjoitteet").
        //list.removeChild(list.getElementById(snapshot.key()));
        gotData(d);
    });


function gotData(data) {
    console.log("###", data);
    
    document.getElementById("ta").innerHTML = data;
}

(function getData(){
    
    var xmlHttp = null;
    var theUrl = 'https://trainingdiary.firebaseio.com/exercises.json?callback=gotData&print=pretty';
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send();
    gotData(xmlHttp.response);
}());

function addHarjoite() {
    var ti = document.getElementById("title").value;
    var no = document.getElementById("notes").value;
    var de = document.getElementById("descr").value;
    var tag = document.getElementById("tag").value;
    console.log(ti, no, de, tag);
    
        var xmlHttp = null;
    var theUrl = 'https://trainingdiary.firebaseio.com/exercises.json';
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, true);
    var data = '{ "title": "'+ti+'", "notes": "'+no+'", "description": "'+de+'" ,"'+tag+'": "true" }';
    console.log('####', data);
    xmlHttp.send(data);
}

function delHarjoite(hId){
    console.log(hId);
     var xmlHttp = null;
    var theUrl = 'https://trainingdiary.firebaseio.com/exercises/'+hId+'.json';
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "DELETE", theUrl, false );
    xmlHttp.send();
}