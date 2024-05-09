function checkInputTxt(inputText) {
  if (inputText === '') {
    alert('Input field can not be blank')
    return false;
  }

  return inputText;
}

export { checkInputTxt };
