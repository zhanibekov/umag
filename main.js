function func() {
    var num0 = Number(document.getElementById("num0").value);
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var num4 = Number(document.getElementById("num4").value);
    var num5 = Number(document.getElementById("num5").value);
    var result = num0 + num1 + num2 - num3 - num4 + num5;
    console.log(num1 + num2 - num3 - num4 + num5);
    document.getElementById("result").innerHTML = result;
}