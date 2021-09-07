var recognizing;
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
reset();
recognition.onend = reset();

recognition.onresult = function (event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      Box.value += event.results[i][0].transcript;
    }
    if (event.results[i][0].transcript.trim() === "Kalam") {
      window.location.href = "https://www.kalaam.io/";
    }
  }
};

function reset() {
  recognizing = false;
  button.innerHTML = "Click to Speak";
}

function handleTrigger() {
  if (recognizing) {
    recognition.stop();
    reset();
  } else {
    recognition.start();
    recognizing = true;
    button.innerHTML = "Click to Stop";
  }
}
