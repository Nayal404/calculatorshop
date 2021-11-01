function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function SimpleInterest(){
    p = document.getElementById('p').value;
    r = document.getElementById('t').value;
    t = document.getElementById('r').value;
    si = p*t*r/100
    document.getElementById('h1').innerHTML = si;
}
