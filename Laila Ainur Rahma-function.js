// console.log("Hello World");

// var name = "Laila Ainur Rahma";
// let firstname = "Laila";
// const lastName = "Rahma";

// console.log(name);
// console.log(firstname);
// console.log(lastName);
//perbedaan var, dan let adalah scope
//const tidak bisa diubah nilainya
// const dataNull = null
// console.log(dataNull);
// console.log(typeof dataNull);

// let dataUndifined;
// console.log(dataUndifined);
// console.log(typeof dataUndifined);

// const dataBoolean = true;
// console.log(dataBoolean);
// console.log(typeof dataBoolean);

// const dataNumber= 1;
// console.log(dataNumber);
// console.log(typeof dataNumber);

// const dataString = "true";
// console.log(dataString);
// console.log(typeof dataString);

// const dataSymbol = Symbol();
// console.log(dataSymbol);
// console.log(typeof dataSymbol);

// const dataBigInt = 13214235433534464342n;
// console.log(dataBigInt);
// console.log(typeof dataBigInt);

// const dataObject = {
//     name: "Laila Ainur Rahma",
//     nim: "V3922026",

// };

// console.log(dataObject);
// console.log(typeof dataObject);
// console.log(dataObject.name);

// const dataNewArray = [1,2,"Informatika", {
//     matkul: "pemweb"
// }];

// for (const dataarray of dataNewArray) {
//     console.log(dataarray);
// }

function fullName(biodata){
    console.log(biodata.name)
    console.log(biodata.nim)

}
fullName({name:"Laila Ainur Rahma", nim: "V3922026"});