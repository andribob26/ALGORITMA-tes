const str: string = "NEGIE1";
const sentence: string = "Saya sangat senang mengerjakan soal algoritma";
const INPUT: string[] = ["xc", "dz", "bbb", "dz"];
const QUERY: string[] = ["bbb", "ac", "dz"];
const Matrix: number[][] = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const reverseStr = (str: string) => {
  let arrStr = str.split("");
  const lastArrStr = arrStr.slice(-1);
  let revArrStr: string[] = [];
  for (let i: number = arrStr.length - 2; i >= 0; i--) {
    revArrStr = [...revArrStr, arrStr[i]];
  }
  arrStr = [...revArrStr, ...lastArrStr];

  return arrStr.join("");
};

const longest = (sentence: string) => {
  const arrStr = sentence.split(" ");
  let length: number = 0;
  let reslt!: string;
  arrStr.forEach((e) => {
    if (e.length > length) {
      length = e.length;
      reslt = e;
    }
  });

  return `${reslt}: ${reslt.length} character`;
};

const cekArr = () => {
  let arrReslt: number[] = [];
  let c: number = 0;

  for (let i: number = 0; i < QUERY.length; i++) {
    arrReslt[i] = 0;
    for (let j: number = 0; j < INPUT.length; j++) {
      if (QUERY[i] === INPUT[j]) {
        if (arrReslt[i] === 0) {
          c = 1;
          arrReslt[i] = 1;
        } else {
          c++;
          arrReslt[i] = c;
        }
      }
    }
  }

  return arrReslt;
};

const pMatrik = (matrik: number[][]) => {
  let arrM = [];
  let tot = 0;

  for (let i: number = 0; i < matrik.length; i++) {
    arrM[i] = 0;
    for (let j = 0; j < matrik[i].length; j++) {
      arrM[i] += matrik[i][j];
    }
  }
  arrM.forEach((el) => {
    if (tot === 0) {
      tot += el;
    } else {
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
