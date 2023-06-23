
function getInputValue() {
  let inputNumber = document.querySelector(".js-input").value;

  generatePyramid(inputNumber);

  function generatePyramid(layers) {
    let pyramidHTML = '';

    for (let i = 0; i < layers; i++) {
      let line = '';

      for (let j = 0; j < i + 1; j++) {
        line += `<div class="brick"></div>`;
      }
      pyramidHTML += '<div class="row">' + line + '</div>';
    }

    document.querySelector(".js-pyramid").innerHTML = pyramidHTML;
  }
}


