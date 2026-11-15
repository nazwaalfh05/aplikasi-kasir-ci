function hitungTotalBayar(harga, jumlah, diskonPersen) {
  if (harga < 0 || jumlah <= 0) throw new Error("Input tidak valid");
  const subtotal = harga * jumlah;
  const potongan = subtotal * (diskonPersen / 100);
  return subtotal + potongan;
}

module.exports = { hitungTotalBayar };