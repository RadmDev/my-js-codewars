function spinWords(string) {
  return (
    string
      // pisahkan tiap kata
      .split(" ")
      // jika panjangnya lebih dari 5 (reverse kata)
      .map((word) =>
        word.length >= 5 ? word.split("").reverse().join("") : word
      )
      // gabungkan lagi menjadi kalimat
      .join(" ")
  );
}

console.log(spinWords("This is another test"));

//   ################--Best Practice--################
// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
//     .join(" ");
// }
