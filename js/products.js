
fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let i = 0;
        while(i < data.length){
            let product = data[i];
            let nombre = product.name;
            let cost = product.cost;
            let currency = product.currency;
            let image = product.imgSrc;
            let description = product.description;


            document.getElementById("productsContainer").innerHTML += `
            <div class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-3">
                  <img src="` + image + `" alt="` + description + `" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">`+ nombre + `</h4>
                      <small class="text-muted">` + currency + ' ' + cost + `</small>
                  </div>
              
                  <div class="text-muted"> <h5>` + description + `</h5></div>
              </div>
              
            </div>
            </div>
            `
            i++;
    }      
});

  







































///////////////////////////////////////////////////////////////////////////////////////////////////



// document.addEventListener("DOMContentLoaded", function (e) {
// //   let url = PRODUCTS_URL;

//   fetch(PRODUCTS_URL)
//       .then(response => response.json())
//       .then(result => {
//               console.log(result);
//           for (let i = 0; i < result.length; i++) {
//               let product = result[i]
//               let name = product.name
//               let description = product.description
//               let cost = product.cost
//               let currency = product.currency
//               let imgs = product.imgSrc
              

         

//               document.getElementById("productsContainer").innerHTML += `
// <div class="list-group-item list-group-item-action">
// <div class="row">
//   <div class="col-3">
//       <img src="` + imgs + `" alt="` + description + `" class="img-thumbnail">
//   </div>
//   <div class="col">
//       <div class="d-flex w-100 justify-content-between">
//           <h4 class="mb-1">`+ name + `</h4>
//           <small class="text-muted">` + currency + ' ' + cost + `</small>
//       </div>
  
//       <div class="text-muted"> <h5>` + description + `</h5></div>
//   </div>
  
// </div>
// </div>
// `

//           }

//       })

// });