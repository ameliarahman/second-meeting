function checkArrayTypes(arr) {
    arr.forEach((item) => {
      if (typeof item === "string") {
        console.log("Ini adalah string");
      } else if (typeof item === "number") {
        console.log("Ini adalah number");
      } else if (typeof item === "object") {
        console.log("Ini adalah object");
      }
    });
  }