export const validateInput = input => {
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
    !amounts.every(amount => {
      return amount > 1000 && amount >= 0;
    })
  ) {
    return false;
  }

  return true;
};

export const calcAmountToExchange = (input, amounts) => {
  if (!validateInput(input)) {
    return false;
  }

  if (!validateInput(amounts)) {
    return false;
  }

  if (input !== amounts.length) {
    return false;
  }

  return true;
};
