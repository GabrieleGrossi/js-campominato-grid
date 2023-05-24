/* function generateRandomNumbers() {
    const numbers = [];
  
    while (numbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
  
      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);
      }
    }
  
    return numbers;
  }
  
  const randomNumbers = generateRandomNumbers();
  console.log(randomNumbers);
  */

  function generatoreNumeri(){
    const numeri = [];

    while(numeri.length < 4){
      const numeroRandomico = Math.floor(Math.random() * 5) + 1;

      if (!numeri.includes(numeroRandomico)) {
        numeri.push(numeroRandomico);
      }
    }
    return numeri;
  }

  const numeroRandomico = generatoreNumeri();
  console.log(generatoreNumeri);