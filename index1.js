const ans=Math.floor(Math.random()*10+1);
let gusses=0;
document.getElementById("resetbtn").onclick=function()
{
    gusses=0;
    document.getElementById("ss").value="";
    document.getElementById("result").innerHTML="";
    ans=Math.floor(Math.random()*10+1);
}
document.getElementById("ss").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
document.getElementById("submitbtn").addEventListener("click",checkGuess)
function checkGuess()
{
    let num=document.getElementById("ss").value;
    gusses=gusses+1;
    if(num==ans)
    {
        document.getElementById("result").innerHTML="You got your answer in "+gusses+" gusses";
    }
    else if(num<ans)
    {
        document.getElementById("result").innerHTML="Too small!Try again!";   
    }
    else
    {
        document.getElementById("result").innerHTML="Too large!Try again!";   
    }
}