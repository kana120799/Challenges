let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        if (display.innerText) display.innerText = eval(display.innerText);
        else display.innerText = "";

        break;
      case "CE":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "%":
        display.innerText = display.innerText / 100;

        break;
      case "sqrt":
        display.innerText = Math.sqrt(display.innerText);
        break;

      case "sin":
        display.innerText = Math.sin(display.innerText);
        break;

      case "cos":
        display.innerText = Math.cos(display.innerText);
        break;

      case "tan":
        display.innerText = Math.tan(display.innerText);
        break;

      case "pi":
        display.innerText += 3.14;
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
