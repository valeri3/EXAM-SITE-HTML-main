//валидация
function validateLoginForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Будь ласка, введіть ім'я або email");
        return false;
    }

    if (password === "") {
        alert("Будь ласка, введіть пароль");
        return false;
    }

    return true;
}

function redirectToMain() {
    if (validateLoginForm()) {
        window.location.href = "main.html";
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    redirectToMain();
});


//снежинки
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