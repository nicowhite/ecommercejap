
document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("logUser").addEventListener("click", function (e) {
    let yourUser = document.getElementById("logU");
    let yourPassword = document.getElementById("passU");
    if (yourPassword.value != '' && yourUser.value != '') {
      window.location.href = "./home.html";
    }
  });
});

