var btn = document.getElementsByClassName("btn");
var container = document.getElementsByClassName("container-fluid");
var success = document.getElementsByClassName("success");

btn.addEventListener("click", function() {
    container.addClass("hide")
    success.removeClass("hide")
})