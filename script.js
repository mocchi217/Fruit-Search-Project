const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
let activeSuggestion = 0;

const fruit = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Starfruit",
  "Rambuton",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Tomato",
  "Ugli fruit",
"Voavanga",
"Watermelons",
"Xigua melon",
"Yuzu",
"Zucchini",
];

function search(str) {
  let results = [];
  if (str.length === 0) {
    return results;
  }
  //Use filter method check if input contains any matching characters in fruit array and return matching fruits from input
  results = fruit.filter(function (item) {
    return item.toLowerCase().includes(str.toLowerCase());
  });
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  activeSuggestion = 0;
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  if (inputVal.length === 0) {
    suggestions.innerHTML = "";
    return;
  }
  //Use RegExp to highlight matching search results based on user inputVal
  const regex = new RegExp(inputVal, "gi");
  const dropdownItems = results
    .map(function (result, index) {
      const highlightedResult = result.replace(regex, "<strong>$&</strong>");
      if (index === activeSuggestion) {
        return `<li class="active" tabindex="0">${highlightedResult}</li>`;
      } else {
        return `<li tabindex="0">${highlightedResult}</li>`;
      }
    })
    .join("");

  suggestions.innerHTML = dropdownItems;

  // Add click event listener to the suggestions
  const items = suggestions.querySelectorAll("li");
  items.forEach(function (item) {
    item.addEventListener("click", useSuggestion);
  });
}

function useSuggestion(e) {
  input.value = e.target.textContent;
  suggestions.innerHTML = "";
}

input.addEventListener("input", searchHandler);
