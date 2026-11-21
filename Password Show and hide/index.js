"use strict";
let InputPassword = document.querySelector("#password");
let Show = document.querySelector("#togglePassword");
Show.addEventListener("click", function () {
    if (InputPassword.type === "password") {
        InputPassword.type = "text";
        Show.textContent = "Hide";
    }
    else {
        InputPassword.type = "password";
        Show.textContent = "Show";
    }
});
