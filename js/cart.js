function showRCart() {
  fetch(CART_INFO_URL)
    .then((response) => response.json())
    .then((data) => {

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
        document.getElementById("artName").innerHTML = htmlContentToAppend;
      });
  }

showRCart();