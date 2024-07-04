const criptoButton = document.querySelector('#button__cripto');
const descriptoButton = document.querySelector('#button__descripto');
const textAreaInput = document.querySelector('textarea');
const errorDisplay = document.querySelector('#error__display');
const errorTag = document.querySelector('.main__content_bottom__alert__error')
const showMessageTag = document.querySelector('#message__found')
const hideMessageTag = document.querySelector('#no__message__found')

const regexAccent = /[áàâãéèêíïóôõöúçñ]/g;
const regexUppercase = /[A-Z]/g;

function validateTextAreaInput() {
  const text = textAreaInput.value;

  if (text === '' || text === null) return showErrorMsg('O texto não pode ser vazio!');
  if (text.match(regexAccent) !== null) return showErrorMsg('Não é permitido acentuação!');
  if (text.match(regexUppercase) !== null) return showErrorMsg('Não é permitido letras maiúsculas!');

  return true;
}

function handleCriptoButtonClick() {
  const isValid = validateTextAreaInput();

  if (isValid) {
    hideErrorMsg();
    const encryptText = encrypt(textAreaInput.value);
    showCryptoMessage(encryptText);
  }
}

function handleDescriptoButtonClick() {
  const isValid = validateTextAreaInput();

  if (isValid) {
    hideErrorMsg();
    const decryptText = decrypt(textAreaInput.value);
    showCryptoMessage(decryptText);
  }
}

function showErrorMsg(msg) {
  errorTag.style.display = "flex";
  errorDisplay.innerHTML = msg;
}

function hideErrorMsg() {
  errorTag.style.display = "none";
  errorDisplay.innerHTML = "";
}

function encrypt(text) {
  // Sem o replace e regex

  // const encryptedText = text.split('').reduce((acc, curr) => {
  //   switch (curr) {
  //     case "e":
  //       acc += "enter"
  //       break;
  //     case "i":
  //       acc += "imes"
  //       break;
  //     case "a":
  //       acc += "ai"
  //       break;
  //     case "o":
  //       acc += "ober"
  //       break;
  //     case "u":
  //       acc += "ufat"
  //       break;
  //     default:
  //       acc += curr;
  //       break;
  //   }
  //   return acc;
  // }, "");

  // return encryptedText;

  return text.replace(/e/g, 'enter')
  .replace(/a/g, 'ai').replace(/i/g, 'imes')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');
}

function decrypt(text) {
  // Sem replace e regex

  // let decryptedText = "";

  // for (let i = 0; i < text.length; i++) {
  //   if (text.startsWith("enter", i)) {
  //     decryptedText += "e";
  //     i += 4;
  //   } else if (text.startsWith("imes", i)) {
  //     decryptedText += "i";
  //     i += 3;
  //   } else if (text.startsWith("ai", i)) {
  //     decryptedText += "a";
  //     i += 1;
  //   } else if (text.startsWith("ober", i)) {
  //     decryptedText += "o";
  //     i += 3;
  //   } else if (text.startsWith("ufat", i)) {
  //     decryptedText += "u";
  //     i += 3;
  //   } else {
  //     decryptedText += text[i];
  //   }
  // }

  // return decryptedText;

  return text.replace(/enter/g, 'e')
  .replace(/ai/g, 'a')
  .replace(/imes/g, 'i')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

}

function showCryptoMessage(msg) {
  hideMessageTag.style.display = "none";
  showMessageTag.style.display = "flex";
  showMessageTag.querySelector('p').innerText = msg;
}

async function copyToClipboard() {
  const copyText = showMessageTag.querySelector('p');

  await navigator.clipboard.writeText(copyText.innerText);

  alert("Texto copiado para a área de transferência!");
}
