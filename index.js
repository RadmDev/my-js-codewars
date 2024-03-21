function digitalRoot(n) {
    // Mulai dengan angka input;
    while (n > 9) {
        // Jika angka input lebih dari 9;
        n = n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        // Ubah angka input menjadi string;Pisahkan string menjadi array karakter;Hitung total digit dengan menjumlahkan setiap digit dalam array;
    }
    // Jika hasil penjumlahan kurang dari 10, maka itu adalah akar digital dan selesai;
      return n;
  }

  console.log(digitalRoot(456));

//   ################--Best Practice--################
