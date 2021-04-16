//each developer is assigned with one functionality each corresponding to each of four buttons + - * and /
//add code as assigned below

function add(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    var c = a + b;
    document.getElementById("operator").innerHTML = "+";
    document.getElementById("result").innerHTML = c;
    document.getElementById("msg").innerHTML = '';
}

function subtract(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    var c = a - b;
    document.getElementById("operator").innerHTML = "-";
    document.getElementById("result").innerHTML = c;
    document.getElementById("msg").innerHTML = '';
}

function multiply(){
    //writing some random code to cause conflict
    var a=5;
    var b=2;
    var c=a+b;
    console.log(c);
}

function divide(){
  
}
