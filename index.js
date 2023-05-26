function fullName(name, nim) {
    let object  = {
      Nama: name,
      Nim : nim
    };
    console.log(object);
  }
  
fullName("Kembang Prima Rossari", "V3922025");

function typeArray(paramArray) {
    for (let i = 0; i < paramArray.length; i++) {
      if (typeof paramArray[i] === "string") {
        console.log("Ini adalah string");
      } else if (typeof paramArray[i] === "number") {
        console.log("Ini adalah number");
      } else if (typeof paramArray[i] === "object") {
        console.log("Ini adalah object");
      }
    }
  }
  
  const Array = [1, 2, 3, "Pemrograman Web", {
    "matkul": "Pemweb",
    "kampus": "UNS"
  }];
  
  typeArray(Array);