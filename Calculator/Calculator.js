function Plus(){
    var val1 = document.Calculator.value1.value; //assigned value of the number input field 1 to a variable//
    var integer1 = Number(val1);                 //converts the value in the input field to a number// 

    var val2 = document.Calculator.value2.value;    //assigned value of the number input field 2 to a variable//
    var integer2 = Number(val2);                    //converts the value to a Number//

    result = integer1 + integer2;                   //sums up the two values in input 1 and 2//

        //The if statement checks if the values in the two input fields are numbers //
        //The Else If checks only the first input field and returns focus//
        //The Else checks the second input and returns Focus//

    if( Number(document.Calculator.value1.value) && Number(document.Calculator.value2.value)){      
        document.Calculator.value3.value = result;
    }
    else if(isNaN(document.Calculator.value1.value)){
        alert("Input Some Correct Values")
        document.Calculator.value2.focus();
        return false;
    }
    else{
        alert("Input Some Correct values")
        document.Calculator.value1.focus();
        return false;
    }
    return true;
}

//NB The same Comments/Steps taken in the Plus Function are Notable Here With Minimal Difference//
function Minus(){
    var val1 = document.Calculator.value1.value;
    var integer1 = Number(val1);

    var val2 = document.Calculator.value2.value;
    var integer2 = Number(val2);

    result = integer1 - integer2;           //subtraction occurs//

    if( Number(document.Calculator.value1.value) && Number(document.Calculator.value2.value)){
        document.Calculator.value3.value = result;
    }
    else if(isNaN(document.Calculator.value1.value)){
        alert("Input Some Correct Values")
        document.Calculator.value2.focus();
        return false;
    }
    else{
        alert("Input Some Correct values")
        document.Calculator.value1.focus();
        return false;
    }
    return true;
}

//NB The same Comments/Steps taken in the Plus Function are Notable Here With Minimal Difference//
function Of(){
    var val1 = document.Calculator.value1.value;
    var integer1 = Number(val1);

    var val2 = document.Calculator.value2.value;
    var integer2 = Number(val2);

    result = integer1 * integer2;           //multiplication occurs//

    if( Number(document.Calculator.value1.value) && Number(document.Calculator.value2.value)){
        document.Calculator.value3.value = result;
    }
    else if(isNaN(document.Calculator.value1.value)){
        alert("Input Some Correct Values")
        document.Calculator.value2.focus();
        return false;
    }
    else{
        alert("Input Some Correct values")
        document.Calculator.value1.focus();
        return false;
    }
    return true;
}

//NB The same Comments/Steps taken in the Plus Function are Notable Here With Minimal Difference//
function division(){
    var val1 = document.Calculator.value1.value;
    var integer1 = Number(val1);

    var val2 = document.Calculator.value2.value;
    var integer2 = Number(val2);

    result = integer1 / integer2;               //division occurs//

    if( Number(document.Calculator.value1.value) && Number(document.Calculator.value2.value)){
        document.Calculator.value3.value = result;
    }
    else if(isNaN(document.Calculator.value1.value)){
        alert("Input Some Correct Values")
        document.Calculator.value2.focus();
        return false;
    }
    else{
        alert("Input Some Correct values")
        document.Calculator.value1.focus();
        return false;
    }
    return true;
}

//NB The same Comments/Steps taken in the Plus Function are Notable Here With Minimal Difference//
function Triangle(){
    var val1 = document.Calculator.value1.value;
    var integer1 = Number(val1);

    var val2 = document.Calculator.value2.value;
    var integer2 = Number(val2); 

    result = 0.5 * integer1 * integer2;         //Area = 1/2 base * height//

if( Number(document.Calculator.value1.value) && Number(document.Calculator.value2.value)){
    document.Calculator.value3.value = result;
}
else if(isNaN(document.Calculator.value1.value)){
    alert("Input Some Correct values")
    document.Calculator.value2.focus();
    return false;
} 
else{
    alert("Input Some Correct Values")
    document.Calculator.value1.focus()
    return false;
}
    return true;
}
   
//NB The same Comments/Steps taken in the Plus Function are Notable Here With Minimal Difference//
function Parallelogram(){
    var val1 = document.Calculator.value1.value;
    var integer1 = Number(val1);

    var val2 = document.Calculator.value2.value;
    var integer2 = Number(val2);

    result = integer1 * integer2;           //Area of A Parallelogram = b * h//

    if( Number(document.Calculator.value1.value) && Number(document.Calculator.value2.value)){
        document.Calculator.value3.value = result;
    }
    else if(isNaN(document.Calculator.value1.value)){
        alert("Input Some Correct Values")
        document.Calculator.value2.focus();
        return false;
    }
    else{
        alert("Input Some Correct values")
        document.Calculator.value1.focus();
        return false;
    }
    return true;
}