function count(string) {
  return (
    string
      // Memecah string menjadi array karakter
      .split("")
      // mereduksi array untuk menghitung jumlah kemunculan setiap karakter
      .reduce((countObject, char) => {
        // Mengupdate countObject dengan jumlah kemunculan karakter yang sesuai
        countObject[char] = (countObject[char] || 0) + 1;
        return countObject;
      }, {})
  );
}

console.log(count(""));

//   ################--Best Practice--################
// function count (string) {
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }
