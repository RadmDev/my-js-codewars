function order(words) {
  return (
    words
      // pisahkan setiap kata
      .split(" ")
      // urutkan kata yang ada angka di dalamnya
      .sort((a, b) => a.match(/\d/) - b.match(/\d/))
      // gabungkan kembali kata yang sudah diurutkan
      .join(" ")
  );
}

console.log(order(""));
