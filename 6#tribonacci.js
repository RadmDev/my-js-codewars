function tribonacci(signature, n) {
  // lakukan perulangan dengan indeks i dari 3 selama i kurang dari n
  for (let i = 3; i < n; i++) {
    // simpan penjumlahan tiga deret sebelumnya ke variabel signature[i]
    signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
  }
  // sesuaikan panjang variabel signature menjadi n
  return signature.slice(0, n);
}

console.log(tribonacci([1, 0, 0], 10));

//   ################--Best Practice--################
