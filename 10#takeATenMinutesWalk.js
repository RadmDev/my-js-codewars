function isValidWalk(walk) {
  // Memeriksa apakah panjang langkah adalah tepat 10
  return (
    walk.length === 10 &&
    // Menggunakan metode reduce untuk menghitung total langkah ke utara/selatan (y) dan timur/barat (x)
    !walk
      .reduce(
        ([x, y], dir) =>
          // Menggunakan operator ternary untuk menentukan perubahan nilai x dan y berdasarkan arah langkah
          dir === "n"
            ? [x, y + 1]
            : dir === "s"
            ? [x, y - 1]
            : dir === "e"
            ? [x + 1, y]
            : dir === "w"
            ? [x - 1, y]
            : [x, y], // Nilai awal adalah [0, 0]

        // Memeriksa apakah ada langkah yang tidak membawa kita kembali ke titik awal
        [0, 0]
      )
      .some((coord) => coord !== 0)
  );
}

// Contoh penggunaan:
console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "w", "e", "n", "s"])); // Output: true
console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "w", "e", "n"])); // Output: false (tidak tepat sepuluh menit)
console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "w", "e", "w", "w"])); // Output: false (tidak kembali ke titik awal)

//   ################--Best Practice--################
// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0
// }
