
var fbRef = new Firebase('https://trainingdiary.firebaseio.com');
var d = '';
var authD = null;
fbRef.child("exercises").on("child_added", function(snapshot){
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
       console.log("* DEL * ****", snapshot.key());
        d = '';
        d += JSON.stringify(snapshot.val()) +'\n\n';
        gotData(d);
    });


function gotData(data) {
    console.log("###", data);
    
    document.getElementById("ta").innerHTML = data;
}

function addHarjoite() {
    var ti = document.getElementById("title").value;
    var no = document.getElementById("notes").value;
    var de = document.getElementById("descr").value;
    var tag = document.getElementById("tag").value;
    console.log(ti, no, de, tag);
    if (authD !== null){
    var data = JSON.parse('{ "title": "'+ti+'", "notes": "'+no+'", "description": "'+de+'" ,"'+tag+'": "true", "createdByUser": "'+authD.uid+'" }');
    console.log('####', data);
    var exerc = new Firebase('https://trainingdiary.firebaseio.com/exercises');
    exerc.push(data);
    } else {
        alert("You must log in first");
    }
}

function delHarjoite(hId){
    console.log(hId);
    fbRef.child("exercises").child(hId).remove();
}

function logIn() {
    fbRef.authWithPassword({
    "email": document.getElementById("userid").value,
    "password": document.getElementById("pwd").value
    }, function(error, authData) {
    if (error) {
        console.log("Login Failed!", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
        authD = authData;
    }
});
}

function logOut() {
    console.log("#### OUT -->>>!");
    fbRef.unauth();
}

function signIn () {
    alert("This projec is heavily under construction so new user are not yet allowed to register !!");
}
