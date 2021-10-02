fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(data => {
        
        let htmlContentToAppend = "";
        let i = 0;
        while(i < data.length){
            let product = data[i];
            let nombre = product.name;
            let currency = product.currency;
            let cost = product.cost;
            let image = product.imgSrc;
            let description = product.description;
            let sold = product.soldCount;

            htmlContentToAppend +=
            `
            <a href="product-info.html" style="text-decoration: none;">
             <div class="list-group-item list-group-item-action">
              <div class="row">
              <div class="col-3">
                  <img src="` + image + `" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">`+ nombre + `</h4>
                      <small class="text-muted">` + currency + ' ' + cost + `</small><br>
                      <small class="text-muted">` + sold + ` vendidos</small>
                    

                  </div>
              
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
              
            </div>
            </div>
            
            `
            i++;
    }      
    document.getElementById("productsContainer").innerHTML += htmlContentToAppend;
});
  
/////////////////////////////////// Filtro - MAX y MIN/////////////////////////////////// 


    function maxAndMin(){
let min = document.getElementById("rangeFilterCountMin").value;
let max = document.getElementById("rangeFilterCountMax").value;
fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(data => {
            let productsFiltrados = "";
            let i = 0;
            while(i < data.length){
            let producto = data[i];
            
            if(((min == '') || (min != '' && producto.cost >= min)) &&
            ((max == '') || (max != '' && producto.cost <= max))){
                
                productsFiltrados += 
                `
                <a href="product-info.html" style="text-decoration: none;">
             <div class="list-group-item list-group-item-action">
              <div class="row">
              <div class="col-3">
                  <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">`+ producto.name + `</h4>
                      <small class="text-muted">` + producto.currency + ' ' + producto.cost + `</small><br>
                      <small class="text-muted">` + producto.soldCount + ` vendidos</small>
                    

                  </div>
              
                  <div class="text-muted"> <h5>` + producto.description + `</h5></div>
              </div>
              
            </div>
            </div>
            `
            }
            i++
            document.getElementById("productsContainer").innerHTML = productsFiltrados;
        }
    })
    };
    document.getElementById('rangeFilterCount').onclick = function() {
        maxAndMin();
    }
    



///////////////////////////////// Boton de Limpiar///////////////////////////////////

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    ;})

 

/////////////////////////////////// Relevancia ///////////////////////////////////


function relevance() {
    fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(data => {
            data.sort(function(a, b) {
                return b.soldCount - a.soldCount;
            });
            let listaRelev = "";
            let i = 0;
            while(i < data.length) {
                let producto = data[i];
                console.log(producto);
                htmlContentToAppend +=  `
                <a href="product-info.html" style="text-decoration: none;">
                <div class="list-group-item list-group-item-action">
                 <div class="row">
                 <div class="col-3">
                     <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                 </div>
                 <div class="col">
                     <div class="d-flex w-100 justify-content-between">
                         <h4 class="mb-1">`+ producto.name + `</h4>
                         <small class="text-muted">` + producto.currency + ' ' + producto.cost + `</small><br>
                         <small class="text-muted">` + producto.soldCount + ` vendidos</small>
                       
   
                     </div>
                 
                     <div class="text-muted"> <h5>` + producto.description + `</h5></div>
                 </div>
                 
               </div>
               </div>
               `
               i++;
                document.getElementById("productsContainer").innerHTML = htmlContentToAppend;
            }
        });
}
document.getElementById("sortByCount").onclick = function () {
    relevance();
};

////////// Orden Precio ascendente //////////


    function lowerPrice() {
        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(data => {
                data.sort(function(a, b) {
                    return a.cost - b.cost;
                });
                let listaRelev = "";
                let i = 0;
                while(i < data.length) {
                    let product = data[i];
                    console.log(product);
                    htmlContentToAppend +=  `
                    <a href="product-info.html" style="text-decoration: none;">
                    <div class="list-group-item list-group-item-action">
                     <div class="row">
                     <div class="col-3">
                         <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                     </div>
                     <div class="col">
                         <div class="d-flex w-100 justify-content-between">
                             <h4 class="mb-1">`+ product.name + `</h4>
                             <small class="text-muted">` + product.currency + ' ' + product.cost + `</small><br>
                             <small class="text-muted">` + product.soldCount + ` vendidos</small>
                           
       
                         </div>
                     
                         <div class="text-muted"> <h5>` + product.description + `</h5></div>
                     </div>
                     
                   </div>
                   </div>
                   `
                   i++;
                    document.getElementById("productsContainer").innerHTML = htmlContentToAppend;
                }
            });
    }
    document.getElementById("sortAsc").onclick = function () {
        lowerPrice();
    };


////////// Orden Precio descendente //////////

function higherPrice() {
    fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(data => {
            data.sort(function(a, b) {
                return b.cost - a.cost;
            });
            let listaRelev = "";
            let i = 0;
            while(i < data.length) {
                let product = data[i];
                console.log(product);
                htmlContentToAppend +=  `
                <a href="product-info.html" style="text-decoration: none;">
                <div class="list-group-item list-group-item-action">
                 <div class="row">
                 <div class="col-3">
                     <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                 </div>
                 <div class="col">
                     <div class="d-flex w-100 justify-content-between">
                         <h4 class="mb-1">`+ product.name + `</h4>
                         <small class="text-muted">` + product.currency + ' ' + product.cost + `</small><br>
                         <small class="text-muted">` + product.soldCount + ` vendidos</small>
                       
   
                     </div>
                 
                     <div class="text-muted"> <h5>` + product.description + `</h5></div>
                 </div>
                 
               </div>
               </div>
               `
               i++;
                document.getElementById("productsContainer").innerHTML = htmlContentToAppend;
            }
        });
}
document.getElementById("sortDesc").onclick = function () {
    higherPrice();
};


