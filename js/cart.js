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
      <input type="number" min="0" id="qt" style="width: 40px;" value="2">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="unitCost">An item</li>
      <li class="list-group-item"> <button type="button" class="btn btn-primary" id="premium">Premium (15%)</button>
        <button type="button" class="btn btn-dark" id="express">Express (7%)</button>
        <button type="button" class="btn btn-warning" id="standard">Standard (5%)</button></li>
      <li class="list-group-item" id="subtotal">A third item</li>
      <li class="list-group-item" id="shippingCost">Costo de Envío: </li>
      <li class="list-group-item" id="costoTotal">Total: </li>
      <li class="list-group-item"><button type="button" class="btn btn-danger" id="clean">Limpiar</button> </li>
    </ul>
    <div class="card-body">
      <button type="button" class="btn btn-secondary btn-lg" style="width: 27rem">CheckOut</button>
    </div>
  </div>
`);

    $("#artName").html(name);
    $("#unitCost").html("Precio: " + currency + unitCost);
    $("#qt").html(qt);
    $("#subtotal").html("Subtotal: " + subtotal);
    $("#artImg").attr("src", artImg);

    let shipping = 0.15; // Premium por defecto

    function updateShipping() {
      shippingCost = Math.round(subtotal * shipping);
      $("#shippingCost").html("Costo de Envío: " + shippingCost);
      let costoTotal = subtotal + shippingCost;
      $("#costoTotal").html("Total: " + costoTotal);
    }
    function updateTotalCosts() {
      subtotal = unitCost * qt;
      $("#qt").val(qt);
      $("#qt").html(qt);
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


