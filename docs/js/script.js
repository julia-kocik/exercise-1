const button = document.querySelector('.button');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');

const checkNumber = (num, arr) => {
  return arr.includes(num) ? num + 1 : arr.includes(num) && num === 100 ? num - 1 : num;
};

const generateNumbers = () => {
  const allNumbers = [];
  for(let i = 0; i < 20; i++) {
    let random = checkNumber(Math.floor(Math.random()*100 +1), allNumbers);
    allNumbers.push(random);
  }
  const evenNumbers = allNumbers.filter(item => item%2 === 0).sort((a,b) => a-b);
  const oddNumbers = allNumbers.filter(item => item %2 !== 0).sort((a,b) => a-b);
  even.innerHTML = evenNumbers.join(', ');
  odd.innerHTML = oddNumbers.join(', ');
};

button.addEventListener('click', generateNumbers);