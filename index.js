let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset');
const printBtn = document.getElementById('printer')

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
 counter++;
 counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
 counter--;
 counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

function reset() {
 counter = 0;
 counterValue.innerHTML = counter;
}


printBtn.addEventListener('click', () => {
    console.log("The current number is:",counter);
}
)

// comit