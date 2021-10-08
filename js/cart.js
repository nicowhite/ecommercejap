fetch(CART_INFO_URL)
  .then((response) => response.json())
  .then((data) => {
    let articles = data.articles[0];
    let name = articles.name;
    let count = articles.count;
    let cost = articles.unitCost;
    let currency = articles.currency;
    let img = articles.src;
    let total = cost * count;
    let htmlContenttoAppend = "";

    htmlContenttoAppend += `  <div class="container">
      <div class="text-center p-4">
        <h2 style="color: crimson;">Carrito de compras</h2>
      </div>
  
      <div class="container">
          <div class="row">
            Nombre:<div id="artName"> ${name}</div>
          </div> 
          <div class="row">
          Precio:<div id="artPrice"> ${currency + cost}</div>
          </div>
          <div class="row">
            <label for="">Cantidad:</label>
            <input type="number"id="qt" style="width:50px;" min="0">
          </div>
          <div class="row">
            Imagen:<div><img src="${img}" alt="" id="artImg"></div>
          </div>
  
  <br><br>
          <div class="row">
            Total: <div id="artTotal"></div>
  
          </div>

          <div class="row">
          Envío: <div></div>

          <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Departamento</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>...</option>
    <option value="1">Montevideo</option>
    <option value="2">Canelones</option>
    <option value="3">Colonia</option>
  </select>
</div>

          <div class="input-group">
  <span class="input-group-text">Dirección:</span>
  <input type="text" aria-label="direccion" class="form-control">
  
</div>

<button type="button" class="btn btn-primary">Check Out</button>
        </div>

      </div>
  `;

    document.getElementById("cart").innerHTML = htmlContenttoAppend;

    document.getElementById("qt").value = count;
    document.getElementById("artTotal").innerHTML = total;

    document.getElementById("qt").onclick = function () {
      let qt = document.getElementById("qt").value;
      document.getElementById("artTotal").innerHTML = qt * cost;
    };
  });
