let display = document.getElementById("display");

function append(value) {
  if (display.textContent === "0" && value !== ".") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function calculate() {
  try {
    let result = eval(display.textContent);
    if (!isFinite(result)) throw "Math Error";
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}
