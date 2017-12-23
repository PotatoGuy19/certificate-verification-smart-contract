// Think of these JS codes as existing directly in the HTML files.
// You should not use them to send AJAX responses, you should only use them
// to send AJAX request.
// Sending AJAX response in HTML itself is useless because it's the same
// as Clients sending stuff to themselves without reaching the server.

/* ============================================================================ */

function sendSubmit() {
  var tempIss = document.getElementById("issuer").value;
  var tempRec = document.getElementById("recipient").value;
  var tempIpfs = document.getElementById("file").value;

  var request = "sendSubmit/" + tempIpfs + "/" + tempIss + "/" + tempRec;

  alert("Request: " + request);

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ipfs_addr").innerHTML = this.responseText;
    }
  }

  xhttp.open("POST", request, true);
  xhttp.send();
}

/* ============================================================================ */

function renderSubmit() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var account = JSON.parse(this.responseText);

     for(var i = 0; i < 10; i++){
       var id = "iss" + i;
       document.getElementById(id).innerHTML = account[i];
     }

     for(var i = 0; i < 10; i++){
       var id = "rec" + i;
       document.getElementById(id).innerHTML = account[i];
     }
    }
  }

  xhttp.open("POST", "renderSubmit", true);
  xhttp.send();
}

/* ============================================================================ */
function issSearch() {
  var tempIpfs = document.getElementById("ipfsVerify").value;
  var request = "issSearch/" + tempIpfs;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("issVerify").innerHTML = this.responseText;
    }
  }

  xhttp.open("POST", request, true);
  xhttp.send();
}

/* ============================================================================ */

function recSearch() {
  var tempIpfs = document.getElementById("ipfsVerify").value;
  var request = "recSearch/" + tempIpfs;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("recVerify").innerHTML = this.responseText;
    }
  }

  xhttp.open("POST", request, true);
  xhttp.send();
}

/* ============================================================================ */

// function uploadSubmit(){
//
//   var fullPath = document.getElementById('file').value;
//   var filename;
//
//     if (fullPath) {
//       var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
//       filename = fullPath.substring(startIndex);
//
//       if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
//         filename = filename.substring(1);
//       }
//   }
//
//   var request = "uploadSubmit/" + filename;
//
//   var xhttp = new XMLHttpRequest();
//
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("ipfsTest").innerHTML = this.responseText;
//     }
//   }
//
//   xhttp.open("POST", request, true);
//   xhttp.send();
// }
