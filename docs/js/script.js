const button = document.querySelector('.button');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');

const generateNumbers = () => {
  const allNumbers = [];
  for(let i = 0; i < 20; i++) {
    allNumbers.push(Math.floor(Math.random()*100 +1));
  }
  const evenNumbers = allNumbers.filter(item => item%2 === 0).sort((a,b) => a-b);
  const oddNumbers = allNumbers.filter(item => item %2 !== 0).sort((a,b) => a-b);
  even.innerHTML = evenNumbers.join(', ');
  odd.innerHTML = oddNumbers.join(', ');
};

button.addEventListener('click', generateNumbers);