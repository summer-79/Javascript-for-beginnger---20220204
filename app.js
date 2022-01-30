const login = document.querySelector("#login-form");
const loginInput = login.querySelector("input");
const loginButton = login.querySelector("button");

function onLoginBtnClick(){
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
