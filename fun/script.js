$("#plsdont").click(() => {
  window.alert("ok bro i just said not to");
});

$(document).ready(() => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
    var theme = "dark";
  } else {
    var theme = localStorage.getItem("theme");
    if (theme === "light") {
      $('link[href="../darkmode.css"]').attr("href", "../lightmode.css");
    }
  }
});
