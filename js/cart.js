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
    <div class="card-body">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
      Forma de Pago
    </button>
    </div>
  </div>

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
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
