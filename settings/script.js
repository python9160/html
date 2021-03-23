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

$("#toggle1").click(() => {
  if (theme === "dark") {
    theme = "light";
    $('link[href="../darkmode.css"]').attr("href", "../lightmode.css");
    localStorage.setItem("theme", "light");
    alert("Theme changed to light.");
  } else if (theme === "light") {
    theme = "dark";
    $('link[href="../lightmode.css"]').attr("href", "../darkmode.css");
    localStorage.setItem("theme", "dark");
    alert("Theme changed to dark.");
  }
});
