function createMahasiswa(name, nim) {
    const mahasiswa = {
      name: name,
      nim: nim
    };
    return mahasiswa;
  }
  
  const mahasiswaObject = createMahasiswa("Alfrida Putri Bella Azzara", "V3922003");
  console.log(mahasiswaObject);