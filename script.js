const result = document.getElementById("result");
    const numInput = document.getElementById("number");
    const button = document.getElementById("check");

    button.addEventListener("click", function() {
      const num = parseInt(numInput.value);

      if (isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        return;
      }

      if (num <= 1) {
        result.textContent = num + " is NOT a prime number.";
        return;
      }

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          result.textContent = num + " is NOT a prime number.";
          return;
        }
      }

      result.textContent = num + " is a PRIME number.";
    });