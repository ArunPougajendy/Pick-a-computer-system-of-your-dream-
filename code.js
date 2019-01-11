/*A user interface that allows users to pick the computer system of their dreams, similar in principle to the e‐commerce sites selling computers over the Internet. For example, they could be given a choice of processor type, speed, memory, and hard drive size, and the option to add additional components like a DVD‐ROM drive, a sound card, and so on. As the users change their selections, the price of the system will update automatically and notify them of the cost of the system as they specified it by using an alert box*/

var processorHandle = document.getElementById('cboProcessor');
var ssdHandle = document.getElementById('cboSsd');
var dvdHandle = document.getElementById('chkDVD');
var bluRayHandle = document.getElementById('chkBluRay');
var caseHandle = document.getElementById('radCase');
var desktopHandle = document.getElementById('desktop');
var minitowerHandle = document.getElementById('minitower');
var fulltowerHandle = document.getElementById('fulltower');
var textHandle = document.getElementById('txtOrder');
var buttonHandle = document.getElementById('btnUpdate');
var sum;

var selectedOption = {
    processor:'',
    ssd:'',
    dvd:false,
    bluRay:false,
    case:'Desktop'
};
var calculateValue = {
    processorValue:0,
    ssdValue:0,
    dvdValue:0,
    bluRayValue:0,
    caseValue:0
};

var amount = {
    processorAmount:0,
    ssdAmount:0,
    dvdAmount:0,
    bluRayAmount:0,
    caseAmount:5000
}

function calculate (amount,value) {
    if(value == 100) {
        amount.processorAmount = 6300;
    } else if ( value == 101) {
        amount.processorAmount = 12600;
    } else if (value == 102) {
        amount.processorAmount = 25200;
    }

    if(value == 200) {
        amount.ssdAmount = 7000;
    } else if (value == 201) {
        amount.ssdAmount = 14000;
    } else if (value == 202) {
        amount.ssdAmount = 28000;
    }

    if(value == 300) {
        amount.dvdAmount = 1000;
    } else if (value == 301) {
        amount.bluRayAmount = 2500;
    }

    if(value == 400) {
        amount.caseAmount = 5000;
    } else if (value == 401) {
        amount.caseAmount = 6000;
    } else if (value == 402) {
        amount.caseAmount = 7000;
    }
}

function display(amount,selectedOption) {
    var values = Object.values(amount);
    sum = 0;
    values.forEach((value)=>{
        sum += value;
    })

    return `Processor: ${selectedOption.processor} = ${amount.processorAmount}\nSSD: ${selectedOption.ssd} = ${amount.ssdAmount}\nDVD = ${amount.dvdAmount}\nBLU-RAY = ${amount.bluRayAmount}\ncase: ${selectedOption.case} = ${amount.caseAmount}\n----------------------\nTotal: ${sum}`;
}

processorHandle.addEventListener('change',function(){
    if(processorHandle.value) {
        selectedOption.processor = processorHandle.options[processorHandle.selectedIndex].text;
        calculateValue.processorValue = processorHandle.value;
        calculate(amount,processorHandle.value);
        textHandle.innerHTML = display(amount,selectedOption);
    } else {
        selectedOption.processor = '';
        calculateValue.processorValue = 0;
        amount.processorAmount=0;
        textHandle.innerHTML = display(amount,selectedOption);
    }
},false);

ssdHandle.addEventListener('change',function(e){
    
    if(ssdHandle.value) {
        selectedOption.ssd = ssdHandle.options[ssdHandle.selectedIndex].text;
        calculateValue.ssdValue = ssdHandle.value;
        calculate(amount,ssdHandle.value);
        textHandle.innerHTML = display(amount,selectedOption);
    } else {
        selectedOption.ssd = '';
        calculateValue.ssdValue = 0;
        amount.ssdAmount=0;
        textHandle.innerHTML = display(amount,selectedOption);
    }
},false);

dvdHandle.addEventListener('change',function(){
    if(dvdHandle.checked) {
        selectedOption.dvd = dvdHandle.checked;
        calculateValue.dvdValue = dvdHandle.value;
        calculate(amount,dvdHandle.value);
        textHandle.innerHTML = display(amount,selectedOption);
    } else {
        selectedOption.dvd = dvdHandle.checked;
        calculateValue.dvdValue = 0;
        amount.dvdAmount = 0;
        textHandle.innerHTML = display(amount,selectedOption);
    }
},false);

bluRayHandle.addEventListener('change',function(){
    if(bluRayHandle.checked) {
        selectedOption.bluRay = bluRayHandle.checked;
        calculateValue.bluRayValue = bluRayHandle.value;
        calculate(amount,bluRayHandle.value);
        textHandle.innerHTML = display(amount,selectedOption);
    } else {
        selectedOption.bluRay = bluRayHandle.checked;
        calculateValue.bluRayValue = 0;
        amount.bluRayAmount = 0;
        textHandle.innerHTML = display(amount,selectedOption);
    }
},false);

desktopHandle.addEventListener('change',function(e){
    selectedOption.case = desktopHandle.id;
    calculateValue.caseValue = desktopHandle.value;
    calculate(amount,desktopHandle.value);
    textHandle.innerHTML = display(amount,selectedOption);

},false);

minitowerHandle.addEventListener('change',function(e){
    selectedOption.case = minitowerHandle.id;
    calculateValue.caseValue = minitowerHandle.value;
    calculate(amount,minitowerHandle.value);
    textHandle.innerHTML = display(amount,selectedOption);
},false);

fulltowerHandle.addEventListener('change',function(e){
    selectedOption.case = fulltowerHandle.id;
    calculateValue.caseValue = fulltowerHandle.value;
    calculate(amount,fulltowerHandle.value);
    textHandle.innerHTML = display(amount,selectedOption);
},false);

buttonHandle.addEventListener('click',function(){
    if(Object.values(selectedOption).includes('')) {
        alert('Enter all Mandatory values');
    } else {
        textHandle.innerHTML = display(amount,selectedOption);
        alert(`The Total is ${sum}`);
    }
},false);