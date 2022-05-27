///random https://web-series-quotes-api.deta.dev/quote/
// series https://web-series-quotes-api.deta.dev/quote/?series=dark

let myform = document.querySelector(".form");
let excuseDiv = document.querySelector(".excuseText");

/**
 * adding click event to each category of excuse
 */

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  let radios = document.querySelectorAll(".radio");
  let checkedFlag = false;
  for (var radio of radios) {
    if (radio.checked) {
      // if checked then fetching data
      fetchData(radio.value);
      checkedFlag = true;
    }
  }

  if (!checkedFlag) {
    alert("Please select category of quote");
  }
});

/**
 *
 * @param {string}type of category
 * to fetch excuse data from server using API
 */
function fetchData(category) {
  let url = "https://web-series-quotes-api.deta.dev/quote/?series=";
  if (category == "Random") {
    url = "https://web-series-quotes-api.deta.dev/quote/";
    category = "";
  }
  const responseObj = fetch(url + category);

  responseObj
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      excuseDiv.innerText = "";
      console.log(error);
      alert("Error while fetching data!. Please try later", error);
    });
}
/**
 *
 * @param {String} excuse text in string format
 * used to display quote text in respective div
 */
function displayData(data) {
  excuseDiv.innerHTML = data[0].quote;
}
