/////// Car Info ///////

function showInfo() {
  fetch(PRODUCT_INFO_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.description);
      document.getElementById("carName").innerHTML = data.name;
      document.getElementById("carDescription").innerHTML = data.description;
      document.getElementById("carPrice").innerHTML =
        data.currency + " " + data.cost;
      document.getElementById("carsSold").innerHTML = data.soldCount;
      document.getElementById("productCategory").innerHTML = data.category;
    });
}
showInfo();

/////// Mostrar la Galería - Carrusel agregado ///////

function showGallery() {
  fetch(PRODUCT_INFO_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.images);
      let htmlContentToAppend = "";
      htmlContentToAppend += `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" ;">
   <div class="carousel-inner">
     <div class="carousel-item active">
     <h6></h6>
       <img src="${data.images[0]}"  alt="fiat"; class="img-fluid img-thumbnail" style="height: 300px;">
    </div>
    <div class="carousel-item">
    <h6></h6>
       <img src="${data.images[1]}" alt="renault" class="img-fluid img-thumbnail" style="height: 300px;">
     </div>
     <div class="carousel-item">
    <h6></h6>
       <img src="${data.images[2]}" alt="renault" class="img-fluid img-thumbnail" style="height: 300px;">
     </div>
     <div class="carousel-item">
    <h6></h6>
       <img src="${data.images[3]}" alt="renault" class="img-fluid img-thumbnail" style="height: 300px;">
     </div>
     <div class="carousel-item">
    <h6></h6>
       <img src="${data.images[4]}" alt="renault" class="img-fluid img-thumbnail" style="height: 300px;">
     </div>
     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
   </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
   </a>
 </div>
   `;
      document.getElementById("gallery").innerHTML = htmlContentToAppend;
    });
}

showGallery();

/////// Comments ///////
function showComments() {
  fetch(PRODUCT_INFO_COMMENTS_URL)
    .then((result) => result.json())
    .then((data) => {
      let htmlContentToAppend = "";
      let i = 0;
      while (i < data.length) {
        let comments = data[i];
        let star = "";
        for (let f = 0; f < comments.score; f++)
          star += '<i class="fas fa-star"></i>'; // fontawesome

        htmlContentToAppend +=
          `
              <div class="list-group-item list-group-item-action">
                      <div class="col">
                          <div class="d-flex w-100 justify-content-between">
                              <p class="mb-1">` +
          comments.user +
          " " +
          star +
          `</p>
                              
          <p class="mb-1">` +
          comments.dateTime +
          `</p> 
                          </div>

                          <div>
                          <small class="text-muted">` +
          comments.description +
          `</small>
                              <br>
                          </div>
                      </div>
              </div>
               
              `;
        i++;
      }

      document.getElementById("comments").innerHTML = htmlContentToAppend;
    });
}

showComments();

/////// Productos Relacionados ///////

function showRelated() {
      fetch(PRODUCT_INFO_URL)
        .then((response) => response.json())
        .then((data) => {
      for (let i = 0; i < data.relatedProducts.length; i++) {
        let related = data.relatedProducts[i];  //// 1 y 3.
 

        fetch(PRODUCTS_URL)
          .then((response) => response.json())
          .then((data) => {
            let htmlContentToAppend = "";
            htmlContentToAppend += `<div class="card" style="width: 18rem;">
  <img src="${data[related].imgSrc}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-text">${data[related].name}</p>
  </div>
</div>
                `;

            document.getElementById("related").innerHTML += htmlContentToAppend;
          });
      }
    });
}

showRelated();
