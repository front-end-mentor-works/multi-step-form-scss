const nums = document.querySelectorAll(".step .step_num");
let currentStepNum = 1;
for (const [i, num] of nums.entries()) {
  num.addEventListener("click", () => {
    const index = i + 1;
    const className = "step_" + index;
    document.querySelector(`.${"step_" + currentStepNum}`).style.display =
      "none";
    nums[currentStepNum - 1].classList.remove("step_num-active");
    num.classList.add("step_num-active");

    document.querySelector(`.${className}`).style.display = "block";
    currentStepNum = +index;
  });
}
