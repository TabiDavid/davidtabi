function getUpdate(){
  
    var d = document.lastModified;

    document.getElementById("outputDiv").innerHTML = "Last Update: " + d;
}

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
  }