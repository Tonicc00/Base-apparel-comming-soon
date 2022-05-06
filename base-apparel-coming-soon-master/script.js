const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".errorMsg");
const errorIcon = document.querySelector(".error");

const inputElement = document.querySelector(".inputField");

const emailValid = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
}, 2000);

sendBtn.addEventListener("click", function () {
    if (inputElement.value.length === 0 || !inputElement.value.match(emailValid)) {
        errorMsg.style.display = "inline";
        errorIcon.style.display = "inline";
        errorMsg.textContent = "Please provide valid e-mail address";
        return timeoutFunc;
    } else {
        errorMsg.style.display = "inline";
        errorMsg.style.color = "green";
        errorMsg.textContent = "Thank You for subscribing to our newsletter";
        return timeoutFunc;
    }
});