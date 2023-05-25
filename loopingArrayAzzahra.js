function printArrayElements(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  // Contoh pemanggilan fungsi
  var array = [1, 2, 3, "Pemrograman Web", {
    "matkul": "Pemweb",
    "kampus": "UNS"
  }];
  
  printArrayElements(array);

  function checkArrayDataType(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        console.log("Ini adalah string");
      } else if (typeof arr[i] === "number") {
        console.log("Ini adalah number");
      } else if (typeof arr[i] === "object") {
        console.log("Ini adalah object");
      }
    }
  }
  
  // Contoh pemanggilan fungsi
  var array = [1, 2, 3, "Pemrograman Web", {
    "matkul": "Pemweb",
    "kampus": "UNS"
  }];
  
  checkArrayDataType(array);