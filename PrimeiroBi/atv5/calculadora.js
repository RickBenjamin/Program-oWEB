const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = valorConta * (percentualGorjeta / 100);

const valorTotal = valorConta + valorGorjeta;

console.log("valor da conta: R$ " + valorConta + "\nGorjeta: R$ " + valorGorjeta + "\nTotal a pagar: R$ " + valorTotal);
