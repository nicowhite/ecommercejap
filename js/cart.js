fetch(CART_INFO_URL)
  .then((info) => info.json())
  .then((data) => {
    let articles = data.articles[0];
    let name = articles.name;
    let qt = articles.count;
    let currency = articles.currency;
    let unitCost = articles.unitCost;
    let artImg = articles.src;
    let subtotal = unitCost * qt;

    $("#cart").html(`<div class="card" style="width: 30rem" id="shoppingCart">
    <img src="..." class="card-img-top" alt="..." id="artImg">
    <div class="card-body">
      <h5 class="card-title" id="artName">Card title</h5>
      <input type="number" min="0" id="qt" style="width:40px;font-size:12pt;" value="2">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="unitCost">An item</li>
      <li class="list-group-item"> <button type="button" class="btn btn-primary" id="premium">Premium (15%)</button>
        <button type="button" class="btn btn-dark" id="express">Express (7%)</button>
        <button type="button" class="btn btn-warning" id="standard">Standard (5%)</button></li>
      <li class="list-group-item" id="subtotal">A third item</li>
      <li class="list-group-item" id="shippingCost">Costo de Envío: </li>
      <li class="list-group-item" id="costoTotal">Total: </li>
    </ul>
    


    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="addMethod">
      Forma de Pago
    </button>
   
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Forma de Pago</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">






          

          <form id="formP">
          <div class="form-group row">
            <label for="card" class="col-sm-2 col-form-label">Tarjeta</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="card" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="code" class="col-sm-2 col-form-label">CVV</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="code" required>
            </div>
          </div>
          <div class="form-group row">
          <label for="city" class="col-sm-2 col-form-label">Ciudad</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="city" required>
          </div>
        </div>
          <fieldset class="form-group row">
            <legend class="col-form-label col-sm-2 float-sm-left pt-0">Tipo de Pago</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  id="cashOption">
                <label class="form-check-label" for="gridRadios1">
                Efectivo
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="cardOption" checked value="option2">
                <label class="form-check-label" for="gridRadios2">
                  Tarjeta
                </label>
              </div>
              
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
             
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary" id="payment">Aceptar Medio de Pago</button>
            </div>
          </div>
        </form>














            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>
    














  



`);

    $("#artName").html(name);
    $("#unitCost").html("Precio: " + currency + unitCost);
    $("#qt").html(qt);
    $("#subtotal").html("Subtotal: " + subtotal);
    $("#artImg").attr("src", artImg);

    let shipping = 0.15; // Premium

    function updateShipping() {
      shippingCost = Math.round(subtotal * shipping);
      $("#shippingCost").html("Costo de Envío: " + shippingCost);
      let costoTotal = subtotal + shippingCost;
      $("#costoTotal").html("Total: " + costoTotal);
    }
    function updateTotalCosts() {
      subtotal = unitCost * qt;
      $("#subtotal").html("Subtotal: " + subtotal);
    }
    $("#premium").click(function () {
      shipping = 0.15;
      updateShipping();
    });

    $("#express").click(function () {
      shipping = 0.07;
      updateShipping();
    });

    $("#standard").click(function () {
      shipping = 0.05;
      updateShipping();
    });

    $("#qt").change(function () {
      qt = this.value;
      updateTotalCosts();
      updateShipping();
    });
  });

////// Entrega 7 ////////

$("cashOption").click(() => {
  $("card").attr("disabled", true);
  $("code").attr("disabled", true);
  $("city").attr("disabled", true);
});



$("#buy").click(() => {
  let quantity = $("#qt").val();
  if (quantity > 0) {
    alert("Su compra ha sido Realizada con Exito");
  }
});
