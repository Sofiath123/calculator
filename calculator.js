var i = 0;
var j = 0;
var result = 0;
var display = [];
var operators = [];
var numbers = [];
document.getElementById("n1").value = "0";

//--1----------------------------------------------------
function get1() {
    display[i] = 1;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--2----------------------------------------------------
function get2() {
    display[i] = 2;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--3----------------------------------------------------
function get3() {
    display[i] = 3;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--4----------------------------------------------------
function get4() {
    display[i] = 4;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--5----------------------------------------------------
function get5() {
    display[i] = 5;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--6----------------------------------------------------
function get6() {
    display[i] = 6;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--7----------------------------------------------------
function get7() {
    display[i] = 7;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--8----------------------------------------------------
function get8() {
    display[i] = 8;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--9----------------------------------------------------
function get9() {
    display[i] = 9;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--0----------------------------------------------------
function get0() {
    display[i] = 0;
    document.getElementById("n1").value = display.join("");
    i++;
}

//--OK--------------------------------------------------------
function getOk() {
    //console.log("1. Mpike sto =")
    document.getElementById("n1").value = display.join("");
    // console.log("2. Perase ton arithmo")
    numbers[j] = parseInt(document.getElementById("n1").value = display.join(""));
    // console.log("3. Ton ekane Int")
    // console.log("4. operators["+j+"] "+ operators[j]);
    // console.log("5. numbers["+j+"] "+ numbers[j]);

    for (var k = 0; k <= numbers.length; k++) {
        if (operators[k] === '+') {
            //console.log("6. Mpike sto if me to +")
            //console.log("7. 1os: "+numbers[k]+" + 2os: "+numbers[k+1])
            numbers[k + 1] = numbers[k] + numbers[k + 1];
            result = numbers[k + 1];
        }

        if (operators[k] === '-') {
            //console.log("6. Mpike sto if me to -")
            //console.log("7. 1os: "+numbers[k]+" - 2os: "+numbers[k+1])
            numbers[k + 1] = numbers[k] - numbers[k + 1];
            result = numbers[k + 1];
        }

        if (operators[k] === '*') {
            //console.log("6. Mpike sto if me to *")
            //console.log("7. 1os: "+numbers[k]+" * 2os: "+numbers[k+1])
            numbers[k + 1] = numbers[k] * numbers[k + 1];
            result = numbers[k + 1];
        }

        if (operators[k] === '/') {
            //console.log("6. Mpike sto if me to /")
            //console.log("7. 1os: "+numbers[k]+" / 2os: "+numbers[k+1])
            numbers[k + 1] = numbers[k] / numbers[k + 1];
            result = numbers[k + 1];
        }
    }
    document.getElementById("n1").value = result;
}

//-----------------------BUTTONS---------------------------


//--[+]----------------------------------------------------
function addition() {
    operators[j] = '+';
    document.getElementById("n1").value = display.join("");
    numbers[j] = parseInt(document.getElementById("n1").value = display.join(""));
    //console.log(" operators[" + j + "] " + operators[j]);
    //console.log(" numbers[" + j + "] " + numbers[j]);
    deleteArrayIndex(display);

    j++;
}

//--[-]----------------------------------------------------
function extraction() {
    operators[j] = '-';
    document.getElementById("n1").value = display.join("");
    numbers[j] = parseInt(document.getElementById("n1").value = display.join(""));
    //console.log(" operators[" + j + "] " + operators[j]);
    //console.log(" numbers[" + j + "] " + numbers[j]);
    deleteArrayIndex(display);
    j++;
}

//--[*]----------------------------------------------------
function multiply() {
    operators[j] = '*';
    document.getElementById("n1").value = display.join("");
    numbers[j] = parseInt(document.getElementById("n1").value = display.join(""));
    //console.log(" operators[" + j + "] " + operators[j]);
    //console.log(" numbers[" + j + "] " + numbers[j]);
    deleteArrayIndex(display);
    j++;
}

//--[/]----------------------------------------------------
function division() {
    operators[j] = '/';
    document.getElementById("n1").value = display.join("");
    numbers[j] = parseInt(document.getElementById("n1").value = display.join(""));
    //console.log(" operators[" + j + "] " + operators[j]);
    //console.log(" numbers[" + j + "] " + numbers[j]);
    deleteArrayIndex(display);
    j++;
}

function clr() {
    document.getElementById("n1").value = "0";
    deleteArrayIndex(display);
    deleteArrayIndex(numbers);
    deleteArrayIndex(operators);

    i = 0;
    j = 0;
    result = 0;
}

function deleteArrayIndex(array) {
    while (array.length) {
        array.pop();
    }
}