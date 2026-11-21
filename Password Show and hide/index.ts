
let InputPassword = document.querySelector("#password") as HTMLInputElement;
let Show = document.querySelector("#togglePassword") as HTMLButtonElement;

Show.addEventListener("click", function () {
    if (InputPassword.type === "password") {
        InputPassword.type = "text";
        Show.textContent = "Hide";
    } else {
        InputPassword.type = "password";
        Show.textContent = "Show";
    }
});
