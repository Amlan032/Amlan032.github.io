$(document).ready(function(){
  $("input[name=1]").click(function(){
    document.forom.result.value+="1";
  });
  $("input[name=2]").click(function(){
    document.forom.result.value+="2";
  });
  $("input[name=3]").click(function(){
    document.forom.result.value+="3";
  });
  $("input[name=4]").click(function(){
    document.forom.result.value+="4";
  });
  $("input[name=5]").click(function(){
    document.forom.result.value+="5";
  });
  $("input[name=6]").click(function(){
    document.forom.result.value+="6";
  });
  $("input[name=7]").click(function(){
    document.forom.result.value+="7";
  });
  $("input[name=8]").click(function(){
    document.forom.result.value+="8";
  });
  $("input[name=9]").click(function(){
    document.forom.result.value+="9";
  });
  $("input[name=0]").click(function(){
    document.forom.result.value+="0";
  });
  $("input[name=a]").click(function(){
    document.forom.result.value+="+";
  });
  $("input[name=s]").click(function(){
    document.forom.result.value+="-";
  });
  $("input[name=m]").click(function(){
    document.forom.result.value+="*";
  });
  $("input[name=d]").click(function(){
    document.forom.result.value+="/";
  });
  $("input[name=del]").click(function(){
  var l=document.forom.result.value;
 l=l.slice(0,l.length-1);   document.forom.result.value=l;
  });
  $("input[name=ac]").click(function(){
    document.forom.result.value="";
  });
  $("input[name=point]").click(function(){
    document.forom.result.value+=".";
  });
  $("input[name=e]").click(function(){
    var z=document.forom.result.value;
    document.forom.result.value=eval(z);
  });
});