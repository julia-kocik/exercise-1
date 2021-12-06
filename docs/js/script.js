const button = document.querySelector('.button');
const even = document.querySelector('.even');
const odd = document.querySelector('.odd');

const generateNumbers = () => {
  const allNumbers = [];
  while (allNumbers.length < 20) {
    let random = Math.floor(Math.random()*100 +1);
    !allNumbers.includes(random) && allNumbers.push(random);
  }
  const evenNumbers = allNumbers.filter(item => item%2 === 0).sort((a,b) => a-b);
  const oddNumbers = allNumbers.filter(item => item %2 !== 0).sort((a,b) => a-b);
  even.innerHTML = evenNumbers.join(', ');
  odd.innerHTML = oddNumbers.join(', ');
};

button.addEventListener('click', generateNumbers);