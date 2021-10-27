function SaveInfo()
{

    let name;
    if(!document.getElementById("nm").value.trim())
    {
        alert("There is no value for name entered");
        return false;
    }
    else if(isNaN(document.getElementById("nm").value.trim()))
    {
        name=parseFloat(document.getElementById("nm").value);

    }
    else
    {
        alert("Invalid value");
    }




    let ID;
    if(!document.getElementById("idto").value.trim())
    {
        alert("There is no value entered for ID");
        return false;
    }
    else if(!isNaN(document.getElementById("idto").value.trim()))
    {
        milage = parseFloat(document.getElementById("idto").value);
    }
    else
    {
        alert("Invalid Value for ID");
        return false;
    }
let Note;
    if(!document.getElementById("nt").value.trim())
    {
        alert("There is no value for note!");
        return false;
    }
    else if(isNaN(document.getElementById("nt").value.trim()))
    {
        Note=parseFloat(document.getElementById("nt").value);

    }
else
    {
        alert("Invalid value");
    }
    let mail;
    if(!document.getElementById("mail").value.trim())
    {
        alert("There is no value for mail entered");
        return false;
    }
    else if(isNaN(document.getElementById("mail").value.trim()))
    {
        mail=parseFloat(document.getElementById("mail").value);

    }
    else
    {
        alert("Invalid value");
    }


    let calcObj = {
        surname,
        name,
        ID,
        mail,
        Note,

    };
    if (document.getElementById("save").onclick == true){
        localStorage.setItem("contact", JSON.stringify(calcObj));
        document.getElementById("result").innerHTML = JSON.stringify(calcObj);
        return true;

    }



}