var src="https://www.google.com/search?num=100&site=&source=hp&q=test&oq=test&gs_l=hp.3..0l2j0i131k1l3j0l5.8516.8804.0.8962.5.5.0.0.0.0.162.645.1j4.5.0....0...1c.1.64.hp..0.4.578.0..0i131i155k1.wsl5nPs6jnw"
var tabs = ["visual","raw","updates"];
var tcont = ["t1","t2","t3"];
var frame = document.getElementById("loader");
function l(){
  window.requestAnimationFrame(l);
  switch(document.getElementById("fileTab").value.toString()){
    case "1":
      alert("open");
    break;
    case "2":
      var lookup = document.getElementById("topic").value;
      loader.src=src.replace(/test/gm,lookup);
    break;
    case "3":
      window.close();
    break;
  }
  document.getElementById("fileTab").value = "0";
}
l();
