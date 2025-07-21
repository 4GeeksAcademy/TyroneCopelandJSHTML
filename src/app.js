import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  //write your code here
 document.querySelector("#validate-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const form = e.target;
      let hasError = false;

      document.querySelector("#error-alert").style.display = "none";

     
      form.querySelectorAll(".form-control, .form-select, textarea").forEach(input => {
        input.classList.remove("is-invalid");
      });

      form.querySelectorAll("input, select, textarea").forEach(input => {
        if (!input.checkValidity()) {
          hasError = true;
          input.classList.add("is-invalid");
        }
      });

      if (hasError) {
        document.querySelector("#error-alert").style.display = "block";
      } else {
        alert("Form submitted successfully (you can add real submission here)");
      }
    });