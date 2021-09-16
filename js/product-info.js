///////////// Mostrar la Galería /////////////

function showGallery() {
  fetch(PRODUCT_INFO_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.images);
      images = data.images;
      let htmlContentToAppend = "";
      for (let i = 0; i < images.length; i++) {
        let image = images[i];

        htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img id="imagenes" style="cursor: zoom-in" height=800 width=400 class="img-fluid img-thumbnail" src="${image}" alt="">
                </div>
            </div>
            `;

        document.getElementById("gallery").innerHTML = htmlContentToAppend;
      }
    });
}
showGallery();

///// Car Info /////

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

///// Comments /////
function comments() {
  fetch(PRODUCT_INFO_COMMENTS_URL)
    .then((result) => result.json())
    .then((data) => {
      let htmlContentToAppend = "";
      let i = 0;
      while (i < data.length) {
        let comments = data[i];
        let stars = "";
        for (var f = 0; f < comments.score; f++)
          stars += '<i class="fas fa-star"></i>';     // fontawesome

        htmlContentToAppend +=
          `
              <div class="list-group-item list-group-item-action">
                      <div class="col">
                          <div class="d-flex w-100 justify-content-between">
                              <p class="mb-1">` +
          comments.user +
          " " +
          stars +
          `</p>
                              
                              <small class="text-muted">` +
          comments.dateTime +
          `</small>
                          </div>

                          <div>
                              <small class="text-muted">` +
          comments.description +
          `</small>
                              <br>
                          </div>
                      </div>
              </div>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

              `;
        i++;
      }

      document.getElementById("comments").innerHTML = htmlContentToAppend;
    });
}

comments();
