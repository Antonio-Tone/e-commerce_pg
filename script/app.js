let Product = [
  {
    image: "/img/Bellville.png",
    Price: "sellling Price: R 1.5m",
    Address: "1 Pacadi Str, Kuils River.",
    Discribtion: "3 bedroom property for sale in Kuils River:",
    icon1: '/icons/icon_bathroom_blue.svg',
    icon2: '/icons/icon_bed_blue.svg',
    icon3: '/icons/icon_secure_parking_blue.svg',
    paragraph:
      "  A Lovely 3 Bedroom property for sale In the heart of Kuils River. This property has lots of potential when making some changes and/or deciding to make house your home. Or even starting a family. This is a good purchase to invest in or come into the market. Consists of 3 perfect sized bedrooms, kitchen, living room space, family bathroom and space for parking.Situated close to all major routes.Contact me for further details and appointments.",

  },
  {
    image: "/img/Lans downe.png",
    Price: "sellling Price: R 1.9m",
    Address: "35 Arthur Str , Kuils River.",
    Discribtion: "3 bedroom property for sale in Kuils River:",
    icon1: '/icons/icon_bathroom_blue.svg',
    icon2: '/icons/icon_bed_blue.svg',
    icon3: '/icons/icon_secure_parking_blue.svg',
    paragraph:
      "  A Lovely 3 Bedroom property for sale In the heart of Kuils River. This property has lots of potential when making some changes and/or deciding to make house your home. Or even starting a family. This is a good purchase to invest in or come into the market. Consists of 3 perfect sized bedrooms, kitchen, living room space, family bathroom and space for parking.Situated close to all major routes.Contact me for further details and appointments.",
    
  },
  {
    image: "/img/istockphoto-1026205392-612x612.jpg",
    Price: "sellling Price: R 2m",
    Address: "2 Wattle Str",
    Discribtion: "3 bedroom property for sale in Kuils River:",
    icon1: '/icons/icon_bathroom_blue.svg',
    icon2: '/icons/icon_bed_blue.svg',
    icon3: '/icons/icon_secure_parking_blue.svg',
    paragraph:
      "  A Lovely 3 Bedroom property for sale In the heart of Kuils River. This property has lots of potential when making some changes and/or deciding to make house your home. Or even starting a family. This is a good purchase to invest in or come into the market. Consists of 3 perfect sized bedrooms, kitchen, living room space, family bathroom and space for parking.Situated close to all major routes.Contact me for further details and appointments.",
  }
  
];

let dispProducts = document.querySelector('#Product');
Product.forEach((data) => {
    dispProducts.innerHTML += `<div
    id="cara"
    class="carousel-item active"
    data-bs-interval="100000"
  >
    <img
      id="fadeIn"
      src="${data.image}" 
      class="img-fluid d-block w-50 mx-auto"
      alt="Avaliable House"
      loading="lazy"
    />
    <p class="lead text-center font-italic text-muted selling">${data.Price}</p>
    <h5
      id="name"
      class="display-5 text-dark text-center mx-auto my-0 pt-1"
    >
      1 Pacadi Str, Kuils River.
    </h5>
    <p class="lead text-center text-dark w-75 mx-auto px-0 px-md-5">
     <ol class=" d-flex justify-content-center justify-content-around">
    <li ><img src="${data.icon1}" >  Bedroom: 3</li>
        <li><img src="${data.icon2}">   Bathroom: 2</li>
        <li><img src="${data.icon3}" alt="Parking ">  Parking: 1</li>
     </ol>
    </p>
    <br>
    <p class="text-center para"> <strong>${data.Discribtion}</strong>
        <br>
        ${data.paragraph}.</p>
  </div>` ;
});

