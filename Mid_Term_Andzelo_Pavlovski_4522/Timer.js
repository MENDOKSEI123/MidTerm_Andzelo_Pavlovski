var mytime;

function myClock()
{
    var date = new Date();
    var s;
    s = date.getSeconds();

    var time="";
    time = +s;
    document.getElementById("time").innerHTML = time;
    mytime = setTimeout("myClock()", 1000);
}
function timer()


{
    let name;
    if(!document.getElementById("nm1").value.trim())
    {
        alert("There is no value for name entered");
        return false;
    }

    let ID;
    if(!document.getElementById("idto1").value.trim())
    {
        alert("There is no value entered for id");
        return false;
    }
    else if(!isNaN(document.getElementById("idto1").value.trim()))
    {
        ID = parseFloat(document.getElementById("idto1").value);
    }
    else
    {
        alert("Invalid ID Value");
        return false;
    }


}

function stopClock(){
    clearTimeout(mytime);
}