var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5]
var myObj = {
    first: 'First Name',
    last: 'Last Name'
}

var decimal2 = myNum.toFixed(2);

var i = 0;
++i;
i++;
--i;
i--;


var myTest = 20;
myTest += 1;
myTest -= 1;
myTest *= 1;
myTest /= 1;
myTest %= 1;


var myPi = Math.PI;
var myRound = Math.round(89.279);
var myRandom = Math.random() * 10;
var myPow = Math.pow(3, 5)


var str = 'Мама мыла раму, рама мыла маму';
var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: str.length
};

var isRamaPos = strObj.str.indexOf('рама');

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');

strReplace.toLowerCase();
strReplace.toUpperCase();
