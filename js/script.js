
// Consejo: para una mejor lectura alt+Z en windows

// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {

  //Adjunto encontrarás una página web que recorre un array y muestra sus elementos en pantalla, el problema es que se nos han colado algunos elementos de tipos (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof) extraños, los cuales debemos filtrar(https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), para luego mostrar sólo los elementos de tipo String ordenados (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) alfabéticamente. Buscar: funciones flechas js.
  
  // Escribe tu solución aquí

  const newStringArray = strangeArray.filter(element => typeof element === "string").sort((a,b) => {
    return a.localeCompare(b)
  });

  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(newStringArray);
});