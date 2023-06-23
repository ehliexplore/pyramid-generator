function getInputValue() {
  let input = document.querySelector(".js-input").value;

  if (!isNaN(input)) {

    let inputNumber = parseInt(input);
    generatePyramid(inputNumber);
  } else {
    
    alert("Please enter a valid number.")
  }


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


