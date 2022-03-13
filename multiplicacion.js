let num = parseInt(prompt(`Ingresa un numero entre 0 y 20`));

let validador = (number) => {
 if (number >= 0 && number <= 20) {
 } else {
  alert(`Numero fuera de rango`);
  location.reload();
 }
};

let multiplicador = (number) => {
 for (let mult = 1; mult <= number; mult++) {
  // console.log(number);
  console.log(`${mult} X ${number} = ${mult * number}`);
 }
};

let factoriales = (number) => {
 for (let i = 1; i <= number; i++) {
  let acumuladorFactorial = 1;
  for (let cont = i; cont > 0; cont--) {
   console.log(
    // `acumuladorFactorial(${acumuladorFactorial}) X cont(${cont})  = `
   );
   acumuladorFactorial = acumuladorFactorial * cont;
  //  console.log(`Acumulador then (${acumuladorFactorial})`);
  }
  console.log(`El factorial del ${i} es = ${acumuladorFactorial}`);
  acumuladorFactorial = 1;
 }
};
validador(num);
multiplicador(num);
factoriales(num);
