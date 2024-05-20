function Area(){
    var val1 = document.Circle.radius.value;  //assined value of the numb. type of input to a var//
    var R = Number(val1);                     //Converts the value to a numb//

    result = Math.PI * R * R ;                //Area = pi * r^2//

        //The if statement Compares the both value seperated by AND //
        //carries out following statements depending on the evaluation//
    
    if(Number(document.Circle.radius.value) && !isNaN(document.Circle.radius.value)){
        document.Circle.Answer.value = result;
    }
    else if(isNaN(document.Circle.radius.value)){
        alert("Input A Correct Value For RADIUS")
        document.Circle.radius.focus();
        return false;
    }
    else{
        alert("Input A Correct Value For RADIUS")
        document.Circle.radius.focus();
        return false;   
    }
    return true;
}
        //The same steps taken in the Function Above Are used here with Minimal Difference//

function Circumference(){
    var val1 = document.Circle.radius.value;
    var R = Number(val1);

    result = 2 * Math.PI * R ;              //Circumference = 2 * pi * r //

    if(Number(document.Circle.radius.value) && !isNaN(document.Circle.radius.value)){
        document.Circle.Answer.value = result;
    }
    else if(isNaN(document.Circle.radius.value)){
        alert("Input A Correct Value For RADIUS")
        document.Circle.radius.focus();
        return false;
    }
    else{
        alert("Input A Correct Value For RADIUS")
        document.Circle.radius.focus();
        return false;
    }
    return true;
}
