var savedUserInput = prompt("Hello! Who are you? Please introduce yourself c:");

console.log(savedUserInput);

document.getElementById("k").innerText = savedUserInput;

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  }) 