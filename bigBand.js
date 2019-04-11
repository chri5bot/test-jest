export const validateInput = input => {
  if (input === 0) {
    return false;
  }

  if (input < 0) {
    return false;
  }

  if (input !== parseInt(input, 10)) {
    return false;
  }

  if (input > 100) {
    return false;
  }

  return true;
};

export const validateAmounts = amounts => {
  if (
    amounts.some(amount => {
      return amount > 1000 || amount < 0;
    })
  ) {
    return false;
  }

  if (amounts.length > 100) {
    return false;
  }

  return true;
};

export const calcAmountToExchange = (input, amounts) => {
  if (!validateInput(input)) {
    return false;
  }

  if (!validateAmounts(amounts)) {
    return false;
  }

  if (input !== amounts.length) {
    return false;
  }

  let sum = amounts.reduce((previous, current) => (current += previous));

  let avg = sum / amounts.length;

  let exchangeAmount = 0;

  amounts.forEach(amount => {
    if (amount < avg) {
      exchangeAmount = exchangeAmount + (avg - amount);
    }
  });

  const fact = Math.pow(10, 2);

  const result = Math.floor(exchangeAmount * fact) / fact;

  return result === 0.01 ? 0 : result;
};
