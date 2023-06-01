let Product = [
  {
    image: "/img/41438-b580.jpg",
    Price: "selling Price: R 1.5m",
    Address: "1 Pacadi Str, Kuils River.",
    Description: "3 bedroom property for sale in Kuils River:",
    icon1: '/icons/icon_bathroom_blue.svg',
    icon2: '/icons/icon_bed_blue.svg',
    icon3: '/icons/icon_secure_parking_blue.svg',
    paragraph:
      "  A Lovely 3 Bedroom property for sale In the heart of Kuils River. This property has lots of potential and makes the perfect Home for you",

  },
  {
    image: "/img/Lans downe.png",
    Price: "selling Price: R 1.9m",
    Address: "35 Arthur Str , Kuils River.",
    Description: "3 bedroom property for sale in Kuils River:",
    icon1: '/icons/icon_bathroom_blue.svg',
    icon2: '/icons/icon_bed_blue.svg',
    icon3: '/icons/icon_secure_parking_blue.svg',
    paragraph:
      "  A Lovely 3 Bedroom property for sale In the heart of Kuils River. This property has lots of potential and makes the perfect Home for you",
    
  },
  {
    image: "/img/istockphoto-1026205392-612x612.jpg",
    Price: "selling Price: R 2m",
    Address: "2 Wattle Str, Kuils River",
    Description: "3 bedroom property for sale in Kuils River:",
    icon1: '/icons/icon_bathroom_blue.svg',
    icon2: '/icons/icon_bed_blue.svg',
    icon3: '/icons/icon_secure_parking_blue.svg',
    paragraph:
      "  A Lovely 3 Bedroom property for sale In the heart of Kuils River. This property has lots of potential and makes the perfect Home for you",
  }
  
];

let dispProducts = document.querySelector('.carousel-inner');
Product.forEach((data) => {
    dispProducts.innerHTML += `<div
    id="cara"
    class="carousel-item ${Product.indexOf(data) == 0 ? 'active': ''}"
    data-bs-interval="100000"
  >
    <img
      id="fadeIn"
      src="${data.image}" 
      class="img-fluid d-block w-50 mx-auto"
      alt="Available House"
      loading="lazy"
    />
    <p class="lead text-center font-italic text-muted selling">${data.Price}</p>
    <h5
      id="name"
      class="display-5 text-dark text-center mx-auto my-0 pt-1"
    >
      ${data.Address}
    </h5>
    <p class="lead text-center text-dark w-75 mx-auto px-0 px-md-5">
     <ol class=" d-flex justify-content-center justify-content-around">
    <li ><img src="${data.icon1}" >  Bedroom: 3</li>
        <li><img src="${data.icon2}">   Bathroom: 2</li>
        <li><img src="${data.icon3}" alt="Parking ">  Parking: 1</li>
     </ol>
    </p>
    <br>
    <p class="text-center para"> <strong>${data.Description}</strong>
        <br>
        ${data.paragraph}.</p>
  </div>` ;
});

