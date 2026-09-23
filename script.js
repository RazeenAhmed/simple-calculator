const display = document.getElementById("display");

function appendValue(val) {
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    if (display.value.trim() === "") return;
    // Basic sanitization allowing only numbers and arithmetic operators
    const sanitized = display.value.replace(/[^0-9+\-*/.]/g, "");
    display.value = Function(`'use strict'; return (${sanitized})`)();
  } catch (err) {
    display.value = "Error";
  }
}