function biodata(name, nim) {
    var mahasiswa = {
      name: name,
      nim: nim
    };
  
    console.log(mahasiswa);
  }
  
  // Contoh pemanggilan fungsi
  var name = "Diana Lathifa";
  var nim = "V3922016";
  
  biodata(name, nim);
  
  console.log(biodata.length)
