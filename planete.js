const tbody = document.querySelector(".tbody");

const cardbody = document.querySelector(".card-body");
/*function qui permet de recuper l'url et boucler sur les element du tableau*/

async function getPlanets(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

function showPlanets(planets) {
  console.log(planets);
  planets.forEach((element) => {
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");

    th1.textContent = element.name;
    th2.textContent = element.terrain;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tbody.appendChild(tr);
  });
}
let planets;
/*function qui permet de charger tout les liens des api*/
async function onInit() {
  planets = await getPlanets("https://swapi.dev/api/planets/");
  showPlanets(planets);
  const trs = tbody.querySelectorAll("tr");

  trs.forEach((tr) => {
    tr.addEventListener("click", showDetail);
    console.log(tr);
  });

  console.log(trs);
}

onInit();

function showDetail(event) {
  const planet = planets.find(
    (planet) => planet.name === event.target.textContent
  );

  let p1 = document.querySelector(".p1");
  p1.textContent = planet.population;
  cardbody.appendChild(p1);
  let p2 = document.querySelector(".p2");
  let p3 = document.querySelector(".p3");
  let p4 = document.querySelector(".p4");
  let p5 = document.querySelector(".p5");
  let p6 = document.querySelector(".p6");

  p2.textContent = planet.diameter;
  p3.textContent = planet.gravity;
  p4.textContent = planet.climate;
  p6.textContent = planet.name;

  cardbody.appendChild(p2);
  cardbody.appendChild(p3);
  cardbody.appendChild(p4);
  cardbody.appendChild(p5);
  cardbody.appendChild(p6);
}

let select = document.querySelector("#population-select");
select.addEventListener("change", choix);
function choix(event) {
  if (event.target.value === "0 à 100.000") {
    const results = planets.filter((planet) => planet.population < 100000);
    console.log(results);
  }
}
