function fullName(name, nim) {
    let objek  = {
      Nama: name,
      Nim : nim
    };
    console.log(objek);
  }
  
fullName("Jeni Fla", "V3922024");

function typeArray(paramA) {
    for (let i = 0; i < paramA.length; i++) {
      if (typeof paramA[i] === "string") {
        console.log("Ini adalah string");
      } else if (typeof paramA[i] === "number") {
        console.log("Ini adalah number");
      } else if (typeof paramA[i] === "object") {
        console.log("Ini adalah object");
      }
    }
  }
  
  const array = [1, 2, 3, "Pemrograman Web", {
    "matkul": "Pemweb",
    "kampus": "UNS"
  }];
  
  typeArray(array);
  