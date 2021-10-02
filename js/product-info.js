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

/////// Mostrar la Galería ///////

function showGallery() {
  fetch(PRODUCT_INFO_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.images);
      images = data.images;
      
      
      let htmlContentToAppend = "";
      for (let i = 0; i < images.length; i++) {
        let image = images[i];
        htmlContentToAppend +=
          ` <div class="col-lg-3 col-md-4 col-6">
  <div class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="` +
          image +
          `" alt="">
  </div>
</div>
`;
        document.getElementById("gallery").innerHTML = htmlContentToAppend;
      }
    });
}

showGallery();

///// Comments /////
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


//// Related Products /////

function showRelated(){
fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(data => {
      let fiat = data[1].imgSrc;
      let renault = data[3].imgSrc;
      let htmlContentToAppend = "";

      
   
      htmlContentToAppend +=
      `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" ;">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <h6>${data[1].name}</h6>
          <img src="${fiat}"  alt="fiat"; class="img-fluid img-thumbnail" style="height: 200px;">
        </div>
        <div class="carousel-item">
        <h6>${data[3].name}</h6>
          <img src="${renault}" alt="renault" class="img-fluid img-thumbnail" style="height: 200px;">
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
      `;;
    
document.getElementById("related").innerHTML = htmlContentToAppend;
    }
    );
  }

showRelated();
        
