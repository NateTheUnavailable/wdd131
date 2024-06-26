function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/1280x800/mexico-city-temple-exterior-1522387-wallpaper.jpg"
    },
    {
      templeName: "Brasília Brazil",
      location: "Brasília Brazil",
      dedicated: "2023, September, 17",
      area: 116642,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/320%2C/0/default"
    },
    {
      templeName: "Albuquerque New Mexico",
      location: "Albuquerque New Mexico",
      dedicated: "2000, March, 5",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/1280x800/albuquerque-temple-lds-137883-wallpaper.jpg"
    },
    {
      templeName: "Gilbert Arizona",
      location: "Gilbert Arizona",
      dedicated: "2014, March, 2",
      area: 116642,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/33e19ea3cba5f4aa250fab5e170af503d7bf667f/full/320%2C/0/default" 
    }
  ];

createTempleCard(temples);

const old = document.querySelector("#old")
const newt = document.querySelector("#new")
const small = document.querySelector("#small")
const large = document.querySelector("#large")

old.addEventListener("click", () =>{
  const filteredTemples = temples
  .filter(temple => new Date(temple.dedicated).getFullYear() < 2000)
  .sort((a, b) => new Date(a.dedicated) - new Date(b.dedicated));
  createTempleCard(filteredTemples);
})
newt.addEventListener("click", () =>{
  const filteredTemples = temples
  .filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
  .sort((a, b) => new Date(b.dedicated) - new Date(a.dedicated));
  createTempleCard(filteredTemples);
})
small.addEventListener("click", () =>{
  const filteredTemples = temples
  .filter(temple => new Date(temple.area).getFullYear() < 10000 )
  .sort((a, b) => new Date(a.area) - new Date(b.area));
  createTempleCard(filteredTemples);
})
large.addEventListener("click", () =>{
  const filteredTemples = temples
  .filter(temple => new Date(temple.area).getFullYear() > 90000 )
  .sort((a, b) => new Date(b.area) - new Date(a.area));
  createTempleCard(filteredTemples);
})
  function createTempleCard(filteredTemples) {
    document.querySelector(".images").innerHTML = ""
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
  
      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");
  
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);
  
      document.querySelector(".images").appendChild(card);
    });
    }