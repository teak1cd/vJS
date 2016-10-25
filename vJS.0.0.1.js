var tabs = ["visual","raw","updates"];
var tcont = ["t1","t2","t3"];
function l(){
  window.requestAnimationFrame(l);
  switch(document.getElementById("fileTab").value.toString()){
    case "1":
      alert("open");
    break;
    case "2":
      alert("compile");
    break;
    case "3":
      window.close();
    break;
  }
  document.getElementById("fileTab").value = "0";
}
l();
