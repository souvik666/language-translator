/* test();
 */
async function getlangs() {
  let res = await fetch(`https://libretranslate.de/languages`);
  let data = await res.json();
  appenddata(data);
}
getlangs();

function appenddata(d) {
  let maindiv = document.getElementById(`Langs`);
  d.forEach((el) => {
    let opt = document.createElement(`option`);
    opt.value = el.code;
    opt.textContent = el.name;
    maindiv.append(opt);
  });
}

function getTheValu() {
  let val = document.getElementById(`Langs`).value;
  localStorage.setItem(`lang`, JSON.stringify(val));
  return val;
}

async function detectLang() {
  const res = await fetch("https://libretranslate.de/detect", {
    method: "POST",
    body: JSON.stringify({
      q: "hola",
      source: "en",
      target: "es",
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(await res.json());
}
//detectLang();

function getInput() {
  let log = document.getElementById("Box");
  return log.value;
}
let userinput = getInput();

async function translate() {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: getInput(),
      source: "en",
      target: getTheValu(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  let data = await res.json();
  let { translatedText } = data;
  appendres(translatedText);
}

function getthevalu() {
  let log = document.getElementById("Box");
  translate();
}

function appendres(data) {
  let trgt = document.getElementById(`Box2`);
  trgt.value = data;
}
