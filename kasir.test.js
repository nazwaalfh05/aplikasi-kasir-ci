const { hitungTotalBayar } = require('./kasir');

test('Menghitung total bayar dengan diskon 10%', () => {
  expect(hitungTotalBayar(50000, 2, 10)).toBe(90000);
});