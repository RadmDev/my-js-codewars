const validBraces = (braces) => {
  // Inisialisasi objek pairs
  const pairs = { "}": "{", "]": "[", ")": "(" };

  // Mengembalikan true jika semua karakter dalam braces tidak ada yang berulang
  return !braces
    .split("")
    // Menggunakan reduce untuk mengecek apakah karakter berulang
    .reduce(
      (stack, brace) =>
      // Jika ada, lakukan pengecekan apakah karakter yang sekarang berada di antara karakter yang ada di stack
        pairs[brace]
        // Jika iya, hapus karakter yang ada di stack
          ? stack[stack.length - 1] === pairs[brace]
          // Jika tidak, tambahkan karakter ke stack
            ? stack.slice(0, -1)
            // Jika tidak ada karakter yang berulang, tambahkan karakter ke stack
            : stack.concat(brace)
            // Jika tidak ada karakter yang berulang, tambahkan karakter ke stack
          : stack.concat(brace),
          // Jika tidak ada karakter yang berulang, return stack
      []
    ).length;
};

console.log(validBraces("[]{{}}"));

//   ################--Best Practice--################
