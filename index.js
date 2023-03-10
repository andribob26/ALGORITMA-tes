var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var str = "NEGIE1";
var sentence = "Saya sangat senang mengerjakan soal algoritma";
var INPUT = ["xc", "dz", "bbb", "dz"];
var QUERY = ["bbb", "ac", "dz"];
var Matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
];
var reverseStr = function (str) {
    var arrStr = str.split("");
    var lastArrStr = arrStr.slice(-1);
    var revArrStr = [];
    for (var i = arrStr.length - 2; i >= 0; i--) {
        revArrStr = __spreadArray(__spreadArray([], revArrStr, true), [arrStr[i]], false);
    }
    arrStr = __spreadArray(__spreadArray([], revArrStr, true), lastArrStr, true);
    return arrStr.join("");
};
var longest = function (sentence) {
    var arrStr = sentence.split(" ");
    var length = 0;
    var reslt;
    arrStr.forEach(function (e) {
        if (e.length > length) {
            length = e.length;
            reslt = e;
        }
    });
    return "".concat(reslt, ": ").concat(reslt.length, " character");
};
var cekArr = function () {
    var arrReslt = [];
    var c = 0;
    for (var i = 0; i < QUERY.length; i++) {
        arrReslt[i] = 0;
        for (var j = 0; j < INPUT.length; j++) {
            if (QUERY[i] === INPUT[j]) {
                if (arrReslt[i] === 0) {
                    c = 1;
                    arrReslt[i] = 1;
                }
                else {
                    c++;
                    arrReslt[i] = c;
                }
            }
        }
    }
    return arrReslt;
};
var pMatrik = function (matrik) {
    var arrM = [];
    var tot = 0;
    for (var i = 0; i < matrik.length; i++) {
        arrM[i] = 0;
        for (var j = 0; j < matrik[i].length; j++) {
            arrM[i] += matrik[i][j];
        }
    }
    arrM.forEach(function (el) {
        if (tot === 0) {
            tot += el;
        }
        else {
            tot -= el;
        }
    });
    return tot;
};
console.log("no1--------------------------");
console.log(reverseStr(str));
console.log("-----------------------------");
console.log("no2--------------------------");
console.log(longest(sentence));
console.log("-----------------------------");
console.log("no3--------------------------");
console.log(cekArr());
console.log("-----------------------------");
console.log("no4--------------------------");
console.log(pMatrik(Matrix));
console.log("-----------------------------");
