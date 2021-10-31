$("#profButton").click(function () {
  let profile = {
    profName: $("#profName").val(),
    profLast: $("#profLast").val(),
    profEmail: $("#profEmail").val(),
    profAge: $("#profAge").val(),
    profPhone: $("#profPhone").val(),
  };
  localStorage.setItem("profile", JSON.stringify(profile)); // Convierte mi objeto en un JSON string

  alert("Cambios guardados exitosamente!");
});

let profileObject = JSON.parse(localStorage.getItem("profile")); // Convierte mi JSON string en objeto de JS

let firstN = profileObject.profName;
let lastN = profileObject.profLast;
let email = profileObject.profEmail;
let age = profileObject.profAge;
let phone = profileObject.profPhone;

$("#profName").val(firstN);
$("#profLast").val(lastN);
$("#profEmail").val(email);
$("#profAge").val(age);
$("#profPhone").val(phone);

console.log(firstN);
