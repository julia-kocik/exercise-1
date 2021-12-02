const button = document.querySelector('.button');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');

const generateNumbers = () => {
  const allNumbers = [];
  for(let i = 0; i < 20; i++) {
    allNumbers.push(Math.floor(Math.random()*100 +1));
  }
  console.log(allNumbers);
  const evenNumbers = allNumbers.filter(item => item%2 === 0).sort();
  const oddNumbers = allNumbers.filter(item => item %2 !== 0).sort();
  even.innerHTML = evenNumbers;
  odd.innerHTML = oddNumbers;
};

button.addEventListener('click', generateNumbers);