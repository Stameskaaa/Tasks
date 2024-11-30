const targetNumber = Math.floor(Math.random() * 100);
console.log(`Компьютер 1 загадал число: ${targetNumber}\n`);

function firstComputer(num) {
  if (num === targetNumber) {
    console.log('Компьютер 1: Угадал!\n');
    return { state: true, number: null };
  }

  if (num > targetNumber) {
    console.log('Компьютер 1: Меньше.\n');
    return { state: false, number: 'small' };
  }
  if (num < targetNumber) {
    console.log('Компьютер 1: Больше.\n');
    return { state: false, number: 'big' };
  }
}

function secondComputer(max = 100, min = 1, count = 0) {
  if (count >= 50) {
    console.log('ALL BAD');
    return;
  }

  let currentValue = Math.floor((max + min) / 2);
  console.log(`Компьютер 2: Пробую число ${currentValue}`);
  let answer = firstComputer(currentValue);

  if (answer.state) {
    console.log('Компьютер 2 закончил выполнение');
    return currentValue;
  }

  if (count >= 50) {
    console.log('ALL BAD');
    return;
  }

  if (answer.number === 'big') {
    return secondComputer(max, currentValue, ++count);
  }

  if (answer.number === 'small') {
    return secondComputer(currentValue, min, ++count);
  }
}

secondComputer();
