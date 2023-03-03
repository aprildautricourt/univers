/* function qui permet de prendre les url d'api et de recuperer les element de mes api et les mettre dans mon html*/
function getCount(url, classCard) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let cardText = document.querySelector(classCard);
      cardText.innerHTML = response.count;
    });
}
/*function qui permet d'appeler toutes mes api*/
function onInit() {
  getCount(" https://swapi.dev/api/vehicles/", ".card-text5");
  getCount(" https://swapi.dev/api/people/", ".card-text4");
  getCount(" https://swapi.dev/api/planets/", ".card-text3");
}
onInit();
