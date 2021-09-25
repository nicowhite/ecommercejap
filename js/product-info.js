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
