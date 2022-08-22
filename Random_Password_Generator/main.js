const words = [
  "law",
  "list",
  "hard",
  "plate",
  "block",
  "two",
  "pupil",
  "were",
  "lot",
  "pay",
  "would",
  "tired",
  "dull",
  "mud",
  "sky",
  "grew",
  "hard",
  "ill",
  "frame",
  "sport",
  "did",
  "many",
  "been",
  "page",
  "year",
  "trail",
  "earth",
  "are",
  "while",
  "off",
  "town",
  "doing",
  "size",
  "aside",
  "her",
  "cent",
  "box",
  "fuel",
  "block",
  "those",
  "late",
  "sun",
  "map",
  "silk",
  "lady",
  "meant",
  "still",
];

function getPassword() {
  const str = "0123456789!@#$%&";
  const strLength = str.length;
  let password = "";

  while (password.length < 23) {
    password = password.concat(randomWords());
    password = password.concat(str[randomNumber(strLength)]);
  }
  password = password.slice(0, 15);

  document.getElementById("password").value = password;
}

function randomNumber(len) {
  return Math.floor(Math.random() * len);
}

function randomWords() {
  const num = randomNumber(words.length);
  return words[num];
}
