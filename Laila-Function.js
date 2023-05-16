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

// function fullName(biodata){
//     console.log(biodata.name)
//     console.log(biodata.nim)

// }

// fullName({name:"Laila Ainur Rahma", nim: "V3922026"});

// function fullName2(nama,nim){
//     const bio = {
//         Nama: nama,
//         Nim: nim
//     }

//     console.log(bio.Nama);
//     console.log(bio.Nim);

// }


// fullName2("Laila Ainur Rahma", "V3922026");

// Looping -> kale datanya number bikin console this is number, kalau datanya string bikin console this is string, dan object juga demikian

function loop(dataArray){
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        
        if (typeof data === "number") {
          console.log("This is a number");
        } else if (typeof data === "string") {
          console.log("This is a string");
        } else if (typeof data === "object") {
          console.log("This is an object");
        }
      }

}

  
loop([1, 2, 3, "Amelia", {
    name: "Amelia",
    favoriteNumber: 1
  }]);
