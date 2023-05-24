function generatoreNumeri(){
  const numeri = [];

    while(numeri.length < 4){
      const numeroRandomico = Math.floor(Math.random() * 150) + 1;

      if (!numeri.includes(numeroRandomico)) {
      numeri.push(numeroRandomico);
    }
    }
  return numeri;
}

const numeroRandomico = generatoreNumeri();
console.log(numeroRandomico);