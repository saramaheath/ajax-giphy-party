"use strict";
console.log("Let's get this party started!");
const $container = $(".gif-storage");
const $button = $("#goButton");

let $keyword = $(".search-term");
let $delete = $("#deleteAll");

/** Gets a gif from giphy */
async function getGif(keyword) {
  let gif = await axios.get(`http://api.giphy.com/v1/gifs/search?`, {
    params: { q: `${keyword}`, api_key: "Nlgp4981igjH8Q1KLPDfqo0EyHEurTaI" },
  });
  let rawGif = gif.data.data[0].embed_url;
  console.log("getGif=", gif.data.data[0].embed_url);

  addGif(rawGif);
}
/** adds gif to our gif storage in html */
function addGif(gif) {
  $container.append(`<iframe src = "${gif}">`);
}
/** On button click, we get a gif from giphy */
$button.on("click", function (e) {
    e.preventDefault();
    let keyword = $keyword.eq(0).val();
    console.log(keyword, 'keyword');
  getGif(keyword);
});

$delete.on("click", function (e) {
    $container.empty();
})

