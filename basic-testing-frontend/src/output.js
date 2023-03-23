export function generateResultText(calculationResult) {
  let resultText = "";

  if (calculationResult === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (calculationResult !== "no-calc") {
    resultText = "Result: " + calculationResult;
  }

  return resultText;
}

export function outputResult(resultText) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = resultText;
}
