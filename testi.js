
var fbRef = new Firebase('https://trainingdiary.firebaseio.com');
var data = '';
var authD = null;

fbRef.child("exercises").on("child_added", function(snapshot){
       console.log("Firebase data entry Id: ", snapshot.key());
        data += JSON.stringify(snapshot.val()) +'\n\n';
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
        gotData(data);
    });

fbRef.child("exercises").on("child_removed", function(snapshot){
       console.log("Deleted on firease", snapshot.key(), JSON.stringify(snapshot.val()));
    });


function gotData(data) {
    document.getElementById("ta").innerHTML = data;
}

function addHarjoite() {
    var ti = document.getElementById("title").value;
    var no = document.getElementById("notes").value;
    var de = document.getElementById("descr").value;
    var tag = document.getElementById("tag").value;
    console.log('Input field values: ', ti, no, de, tag);
    if (authD !== null){
        var data = JSON.parse('{ "title": "'+ti+'", "notes": "'+no+'", "description": "'+de+'" ,"'+tag+'": "true", "createdByUser": "'+authD.uid+'" }');
        console.log('Data entry to be saved to firebase: ', data);
        var exerc = new Firebase('https://trainingdiary.firebaseio.com/exercises');
        exerc.push(data);
    } else {
        alert("You must log in first");
    }
}

function delHarjoite(hId){
    console.log('deleted excercise id:', hId);
    fbRef.child("exercises").child(hId).remove();
    var child = document.getElementById(hId);
    child.parentNode.removeChild(child);
    
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
    console.log(" log out from firebase access");
    fbRef.unauth();
}

function register () {
    alert("This projec is heavily under construction so new user are not yet allowed to register !!");
}
