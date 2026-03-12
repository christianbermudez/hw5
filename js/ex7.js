const input1 = prompt("Enter the first integer:");
const input2 = prompt("Enter the second integer:");

const content = document.getElementById("content");

const displayResult = (message, isError) => {
  let span = document.createElement("span");
  span.style.color = "red";
  span.style.fontWeight = "bold";
  span.textContent = message;

  let p = document.createElement("p");
  p.textContent = isError ? "" : "Sum: ";
  p.appendChild(span);

  content.appendChild(p);
}

const processInput = () => {
  // Check if inputs are valid integers (not decimals, not letters)
  if (isNaN(input1) || isNaN(input2) || input1.trim() === "" || input2.trim() === "") {
    displayResult(`Error: "${input1}" and "${input2}" are not valid integers.`, true);
    return;
  }

  // Check for decimals
  if (!Number.isInteger(Number(input1))) {
    displayResult(`Error: "${input1}" is not an integer (decimals not allowed).`, true);
    return;
  }

  if (!Number.isInteger(Number(input2))) {
    displayResult(`Error: "${input2}" is not an integer (decimals not allowed).`, true);
    return;
  }

  // Valid — calculate and display sum
  let sum = Number(input1) + Number(input2);

  let p = document.createElement("p");
  p.textContent = `${input1} + ${input2} = `;

  let span = document.createElement("span");
  span.style.color = "red";
  span.style.fontWeight = "bold";
  span.textContent = sum;

  p.appendChild(span);
  content.appendChild(p);
}

processInput();
