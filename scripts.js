
function bmiCalculator()
{
    var kg = document.getElementById("kg").value;
    var m = document.getElementById("m").value;
    var bmi;
    bmi = (kg/(Math.pow(m,2)));
    bmi = bmi.toFixed(1);
    console.log(bmi);
    document.getElementById("output").innerHTML = bmi;
    if(bmi < 18.5){
    document.getElementById("means").innerHTML = "That you are too thin :("
    document.getElementById("means").style.color = 'red';
    }
    if(bmi > 18.5 && bmi < 25){
        document.getElementById("means").innerHTML = "That you are healthy :)"
        document.getElementById("means").style.color = 'green';
    }
    if(bmi > 25){
        document.getElementById("means").innerHTML = "That you have overweight :("
        document.getElementById("means").style.color = 'red';
    }
   
}