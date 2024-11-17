const out = document.querySelector(".saida");
const key = document.querySelectorAll(".key");
const result = document.querySelector(".resultado");

key.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.textContent === "C") {
      out.value = "";
      result.value = "";
    }
    else if (key.textContent !== "=") {
      out.value += key.textContent;
      result.value = eval(
        out.value.replace(/\x/g, "*").replace(/\÷/g, "/").replace(/\,/g, ".").replace(/\%/g, '/100')
      );
      
    }
    else if (key.textContent  === "=") {
      out.value = eval(
        result.value.replace(/\x/g, "*").replace(/\÷/g, "/").replace(/\,/g, '.')
      );
      result.value = "";
    }
    else {
      
    }
  });
});
