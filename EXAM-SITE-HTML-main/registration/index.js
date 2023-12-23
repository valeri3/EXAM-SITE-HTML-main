//валидация
function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (username === "") {
        alert("Будь ласка, введіть ім'я користувача");
        return false;
    }
    if (email === "") {
        alert("Будь ласка, введіть email");
        return false;
    }
    if (password.value === "") {
        alert("Будь ласка, введіть пароль");
        return false;
    }
    if (confirmPassword.value === "") {
        alert("Будь ласка, підтвердіть пароль");
        return false;
    }
    if (password.value !== confirmPassword.value) {
        alert("Паролі не співпадають! Введіть ще раз");
        password.value = "";
        confirmPassword.value = "";
        return false;
    }
    return true;
}

function redirectToMain() {
    if (validateForm()) {
        window.location.href = "main.html";
    }
}

//анимация снежинки
document.addEventListener("DOMContentLoaded", function () {
    const snowfallContainer = document.getElementById("snowfall");
  
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      const size = Math.random() * 10 + 5 + "px";
      snowflake.style.width = size;
      snowflake.style.height = size;
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.top = Math.random() * window.innerHeight + "px";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.opacity = Math.random();
      snowflake.style.animationTimingFunction = "ease-in-out";
  
      snowflake.innerHTML = "❄";
  
      snowfallContainer.appendChild(snowflake);
  
      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    }
  
    function createSnowfall() {
      setInterval(createSnowflake, 300);
    }
  
    createSnowfall();
  });