function solution(string) {
  return (
    string
      // pisahkan tiap huruf
      .split("")
      // jika hurufnya kapital, tambahkan spasi
      .map((char) => (char === char.toUpperCase() ? ` ${char}` : char))
      // gabungkan kembali
      .join("")
  );
}

console.log(solution("identifier"));

//   ################--Best Practice--################
