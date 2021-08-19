
document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("logUser").addEventListener("click", function (e) {
    let yourUser = document.getElementById("logU");
    let yourPassword = document.getElementById("passU");
    if (yourPassword.value != 0 && yourUser.value != 0) {
      window.location.href = "./index.html";
    }
  });
});

