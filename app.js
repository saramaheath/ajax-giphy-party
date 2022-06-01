"use strict";

console.log("Let's get this party started!");
const $container = $(".gif-storage");
const $button = $("#goButton");

let $keyword = $(".search-term");
let $delete = $("#deleteAll");

/** Gets a gif from giphy using key word from form, calls addGif func  */
async function getGif(keyword) {
  let gif = await axios.get(`http://api.giphy.com/v1/gifs/search?`, {
    params: { q: `${keyword}`, api_key: "Nlgp4981igjH8Q1KLPDfqo0EyHEurTaI" },
  });
  console.log(gif.data.data);
  let rawGif = gif.data.data[(Math.floor(Math.random() * gif.data.data.length))].images.original.url;
  addGif(rawGif);
}
/** adds gif to our gif storage in html */
function addGif(gif) {
  $container.append(`<image src = "${gif}">`);
}
/** On button click, we get a gif from giphy, calls getGif func */
$button.on("click", function (e) {
  e.preventDefault();
  let keyword = $keyword.eq(0).val();
  getGif(keyword);
});
/** On button click, remove all current gifs from container */
$delete.on("click", function (e) {
  $container.empty();
})

