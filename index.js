String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/gi, "");
}

function convert(){
  var bins = document.getElementById("bin").value.trim();
  
  var hexs = "";
  for(var i = 0; i < (bins.length/4) ; i++)
    {
      hexs += parseInt(bins.substr(4*i , 4) , 2).toString(16);
    }
  document.getElementById("hex").value=hexs;
 
}

function reconvert(){
  var hexs = document.getElementById("hex").value.trim();
  
  var bins = "";
  for(var i = 0; i < hexs.length ; i++)
    {
      var tmp = parseInt(hexs.substr(i , 1) , 16).toString(2);
        while(tmp.length < 4 ) //&& i+1 != hexs.length
          tmp = "0" + tmp;
      
      bins += tmp
    }
  document.getElementById("rebin").value=bins;
 
}