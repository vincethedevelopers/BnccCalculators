function appendToDisplay(value) {
  const result = document.getElementById('result');
  if (result.value === '0' || result.value === 'Error') {
    result.value = value;
  } else {
    result.value += value;
  }
}

function clearDisplay() {
  document.getElementById('result').value = '0';
}

function calculateResult() {
  const result = document.getElementById('result');
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      appendToDisplay(value);
    }
  });
});
