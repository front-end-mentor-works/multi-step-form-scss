const nums = document.querySelectorAll(".step .step_num");
let currentStepNum = 1;
for (const [index, num] of nums.entries()) {
  num.addEventListener("click", () => {
    const index = num.innerHTML.trim();
    const className = "step_" + index;
    document.querySelector(`.${"step_" + currentStepNum}`).style.display =
      "none";
    document.querySelector(`.${className}`).style.display = "block";
    currentStepNum = +index;
  });
}
