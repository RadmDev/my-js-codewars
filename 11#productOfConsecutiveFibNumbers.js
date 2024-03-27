const productFib = prod => {
  // Inisialisasi dua variabel a dan b dengan nilai awal 0 dan 1
  let [a, b] = [0, 1];
  
  // Loop while untuk mencari dua bilangan Fibonacci yang memiliki produk lebih dari atau sama dengan prod
  while (a * b < prod) {
    // Perbarui nilai a dengan b, dan b dengan a + b (aturan bilangan Fibonacci)
    [a, b] = [b, a + b];
  }
  
  // Kembalikan array yang berisi a, b, dan status kebenaran apakah a * b sama dengan prod atau tidak
  return [a, b, a * b === prod];
};

console.log(productFib(4895));

//   ################--Best Practice--################
