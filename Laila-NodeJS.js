function fullName2(nama,nim){
    const bio = {
        nama,
        nim
    }

    console.log(bio);
}

fullName2("Laila Ainur Rahma", "V3922026");

//  Tugas 2 - function dengan loop

function loop(dataArray){
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        
        if (typeof data === "number") {
          console.log(data + " This is a number");
        } else if (typeof data === "string") {
          console.log(data + " This is a string");
        } else if (typeof data === "object") {
          console.log(data + " This is an object");
        }
      }
}

loop([1, 2, 3, "Pemrograman Web", {
  "matkul": "Pemweb",
  "kampus": "UNS"
}]);
