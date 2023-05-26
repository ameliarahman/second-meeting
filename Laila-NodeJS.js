function fullName2(nama,nim){
    const bio = {
        nama,
        nim
    }

    return bio
}

console.log(fullName2("Laila Ainur Rahma", "V3922026"));

//  Tugas 2 - function dengan loop

function loop(dataArray){
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i];
        
        if (typeof data === "number") {
          return data + " This is a number";
        } else if (typeof data === "string") {
          return data + " This is a string";
        } else if (typeof data === "object") {
          return data + " This is an object";
        }
      }
}

const newloop = loop([1, 2, 3, "Pemrograman Web", {
  "matkul": "Pemweb",
  "kampus": "UNS"
}]);

console.log(newloop);
