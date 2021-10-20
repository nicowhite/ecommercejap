$("#profButton").click(function () {
  localStorage.setItem("profname", $("#profName").val());
  localStorage.setItem("proflast", $("#profLast").val());
  localStorage.setItem("profemail", $("#profEmail").val());
  localStorage.setItem("profage", $("#profAge").val());
  localStorage.setItem("profphone", $("#profPhone").val());
});

$("#profName").val(localStorage.getItem("profname"));
$("#profLast").val(localStorage.getItem("proflast"));
$("#profEmail").val(localStorage.getItem("profemail"));
$("#profAge").val(localStorage.getItem("profage"));
$("#profPhone").val(localStorage.getItem("profphone"));
