//перенаправление на страницу "log.html".
document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function () {
      window.location.href = "log.html";
    });
  });

//Когда "discountButton" нажимается, модальное окно с идентификатором "discountModal" 
//становится видимым (display: block). Когда "closeDiscountButton" 
//нажимается, модальное окно скрывается (display: none).

    var discountButton = document.getElementById("discountButton");
    discountButton.addEventListener("click", function () {
      var discountModal = document.getElementById("discountModal");
      discountModal.style.display = "block";
    });

    var closeDiscountButton = document.getElementById("closeDiscountButton");
    closeDiscountButton.addEventListener("click", function () {
      var discountModal = document.getElementById("discountModal");
      discountModal.style.display = "none";
    });

    //снежинки
    document.addEventListener("DOMContentLoaded", function () {
        const snowfallContainer = document.getElementById("snowfall");
      
        function createSnowflake() {
          const snowflake = document.createElement("div");
          snowflake.className = "snowflake";
          const size = Math.random() * 10 + 5 + "px"; // Увеличьте размер снежинок
          snowflake.style.width = size;
          snowflake.style.height = size;
          snowflake.style.left = Math.random() * window.innerWidth + "px";
          snowflake.style.top = Math.random() * window.innerHeight + "px"; // Изменено значение top
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
      
//модальное окно 2
function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  function hideModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  