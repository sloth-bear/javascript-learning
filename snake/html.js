const insertHtml = () => {
  const elements = document.getElementsByTagName("*");

  [...elements]
    .filter((e) => e.getAttribute("data-html"))
    .forEach((e) => {
      const request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            e.innerHTML = this.response;
          }

          e.removeAttribute("data-html");
          insertHtml();
        }
      };

      request.open("GET", e.getAttribute("data-html"), true);
      request.send();
    });
};

window.addEventListener("DOMContentLoaded", () => {
  insertHtml();
});
