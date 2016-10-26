var mode = "render";
var canvas = document.getElementById("renderJScan");
canvas.width = document.getElementById("renderJS").offsetWidth-10;
canvas.height = window.innerHeight-70;
function l(){
  try{
  window.requestAnimationFrame(l);
  switch(document.getElementById("fileTab").value.toString()){
    case "1":
      mode = "loadJS";
      document.getElementById("jsimport").value="";
      document.getElementById("renderJS").hidden = true;
      document.getElementById("importFile").hidden = false;
    break;
    case "2":
      
    break;
    case "3":
      
    break;
  }
  document.getElementById("fileTab").value = "0";
  if(mode === "loadJS"){
    if(document.getElementById("jsimport").value !== ""){
      mode = "render";
      proccessJS(document.getElementById("jsimport").value);
      document.getElementById("importFile").hidden = true;
      document.getElementById("renderJS").hidden = false;
    }
  }
  }catch(e){
    console.log(e);
  }
}
l();
function proccessJS(js){
  var output = [];
  var functions = js.split("function");
  for(var i = 0;i<functions.length;i++){
    output.push({});
    output[i].isObject = false;
    output[i].variables = [];
    output[i].function = "funciton "+functions[i];
    var objData = functions[i].split("this");
    if(objData.length>1){
      output[i].isObject = true;
      var _temp = [];
      for(var j= 0;j<objData.length;j++){
        _temp.push(objData[j].split(" ")[0]);
      }
      output[i].variables = _temp;
    }
  }
  console.log(output);
  return output;
}
