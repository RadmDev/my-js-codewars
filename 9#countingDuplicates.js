function duplicateCount(text) {
  return (
    // mengambil value dari karakter yang muncul lebih dari sekali
    Object.values(
      // Mengonversi string menjadi huruf kecil
      text
        .toLowerCase()
        // membaginya menjadi array karakter
        .split("")
        // mereduksi array untuk menghitung kemunculan setiap karakter
        .reduce((countObject, char) => {
          // Menambahkan atau menginisialisasi jumlah kemunculan karakter pada objek countObject
          countObject[char] = (countObject[char] || 0) + 1;
          return countObject;
        }, {})
    )
      // Menggunakan filter untuk menyaring karakter yang muncul lebih dari sekali
      .filter((count) => count > 1).length
  );
}

console.log(duplicateCount("Abcdeabd"));

//   ################--Best Practice--################
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
