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
    //some random code
    var x=1;
    var y=2;
    var z=x+y;
    console.log('Hello');
}

function divide(){
  
}
