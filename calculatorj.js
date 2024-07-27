function pick(val)
{
    document.getElementById("result").value +=val;
}

function solve(val)
{
   var x= document.getElementById("result").value;
   var y=eval(x);
   document.getElementById("result").value=y;
}
function clr(val)
{
    document.getElementById("result").value ="";
}
function del(val) {
  document.getElementById("result").value=document.getElementById("result").value.toString().slice(0,-1);
}