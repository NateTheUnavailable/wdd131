const products = [
    { name: "TechMaster Pro", id: 101, rating: 4.5 },
    { name: "GlowBuds", id: 102, rating: 3.8 },
    { name: "SmartChef 3000", id: 103, rating: 4.2 },
    { name: "SpeedRunner X", id: 104, rating: 4.0 },
    { name: "EcoClean Plus", id: 105, rating: 4.7 },
    { name: "FitFlex Watch", id: 106, rating: 4.3 },
    { name: "PowerUp Blender", id: 107, rating: 4.6 },
    { name: "HomeGuard Security", id: 108, rating: 4.1 },
    { name: "LumoSound Speaker", id: 109, rating: 4.4 },
    { name: "AquaFresh Purifier", id: 110, rating: 4.8 }
  ];  
const select = document.getElementById("name");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.text = product.name;
  select.appendChild(option);
});
