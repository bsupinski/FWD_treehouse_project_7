let searchable = [
    "Batman",
    "Robin",
    "Joker",
    "Catwoman",
    "Bane",
    "Red Hood"
];


const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".result-wrapper");
const resultWrapper = document.querySelector(".results");

searchInput.addEventListener("keyup", (e)=>{
    let input = searchInput.value;
    let results = [];
    if (input.length) {
        results = searchable.filter((item) =>{
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }
    renderResults(results);
})

function renderResults(results){
    if(!results.length){  
        return searchWrapper.classList.remove('show');
    }
    const content = results.map((item)=>{
        return `<li>${item}</item>`
    }).join('')
    searchWrapper.classList.add('show')
    resultWrapper.innerHTML= `<ul>${content}</ul>`
}

