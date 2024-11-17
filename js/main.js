const out = document.querySelector(".saida");
const delet = document.getElementById("back");
const key = document.querySelectorAll(".key");
const result = document.querySelector(".resultado");

delet.addEventListener("click", () => {
  out.value = out.value.substring(0, out.value.length - 1);
  result.value = eval(
    out.value
      .replace(/\x/g, "*")
      .replace(/\÷/g, "/")
      .replace(/\,/g, ".")
      .replace(/\%/g, "/100")
  );
});

key.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.textContent === "C") {
      out.value = "";
      result.value = "";
    } else if (key.textContent !== "=") {
      out.value += key.textContent;
      result.value = eval(
        out.value
          .replace(/\x/g, "*")
          .replace(/\÷/g, "/")
          .replace(/\,/g, ".")
          .replace(/\%/g, "/100")
      );
    } else if (key.textContent === "=") {
      out.value = eval(
        result.value.replace(/\x/g, "*").replace(/\÷/g, "/").replace(/\,/g, ".")
      );
      result.value = "";
    } else {
    }
  });
});
