// ===================================
// RANDOM BACKGROUND
// ===================================

const backgrounds = [
    "../images/backgrounds/wisdom1.png",
    "../images/backgrounds/wisdom2.png",
    "../images/backgrounds/wisdom3.png"
];

backgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
});

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.setProperty(
    "background",
    `
    linear-gradient(rgba(20,20,20,.45), rgba(20,20,20,.45)),
    url('${randomBg}') center/cover fixed no-repeat
    `,
    "important"
);

// ===================================
// REMOVE DUPLICATE QUOTES
// ===================================

function normalizeQuoteText(text){
    return text
        .toLowerCase()
        .replace(/[“”"'.!,;:—–-]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function removeDuplicateQuotes(){
    const seen = new Set();
    const uniqueQuotes = [];

    politicalQuotes.forEach(q => {
        const key = normalizeQuoteText(q.quote) + "|" + q.author.toLowerCase();

        if(!seen.has(key)){
            seen.add(key);
            uniqueQuotes.push(q);
        }
    });

    politicalQuotes.length = 0;
    politicalQuotes.push(...uniqueQuotes);
}

removeDuplicateQuotes();

// ===================================
// ELEMENTS
// ===================================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const category = document.getElementById("category");
const favoriteBtn = document.getElementById("favoriteBtn");
const authorImage = document.getElementById("authorImage");

let currentQuote = null;
let currentIndex = -1;
let activeCategory = null;
let selectedCategory = null;
let activeQuotePool = politicalQuotes;

// Preload only the first few author images first
politicalQuotes.slice(0, 30).forEach(q => {
    if(q.image){
        const img = new Image();
        img.src = q.image;
    }
});

// Preload the rest later after the page is already loaded
window.addEventListener("load", () => {
    setTimeout(() => {
        politicalQuotes.slice(30).forEach(q => {
            if(q.image){
                const img = new Image();
                img.src = q.image;
            }
        });
    }, 2500);
});

// ===================================
// SEARCH QUOTES
// ===================================

searchBtn.addEventListener("click", searchQuotes);

searchInput.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        searchQuotes();
    }
});

function searchQuotes(){

    const keyword = searchInput.value.toLowerCase().trim();

    let results = politicalQuotes.filter(q =>
        q.category.toLowerCase() === keyword
    );

    if(results.length === 0){
        results = politicalQuotes.filter(q =>
            q.quote.toLowerCase().includes(keyword) ||
            q.author.toLowerCase().includes(keyword) ||
            q.category.toLowerCase().includes(keyword)
        );

        activeCategory = null;
    }else{
        activeCategory = results[0].category;
    }

    if(results.length > 0){
        activeQuotePool = results;
    const exactCategory = politicalQuotes.find(q =>
        q.category.toLowerCase() === keyword
    );

    if(exactCategory){
        window.selectedQuoteCategory = exactCategory.category;
    }else{
        window.selectedQuoteCategory = null;
    }

    const randomResult = results[Math.floor(Math.random() * results.length)];

        quote.innerText = randomResult.quote;
        author.innerText = randomResult.author;
        category.innerText = randomResult.category;

        authorImage.src = randomResult.image;
        authorImage.alt = randomResult.author;
        authorImage.style.display = "block";

        currentQuote = randomResult;
        updateFavoriteButton();
        currentIndex = -1;

        document.getElementById("quotes").scrollIntoView({
        behavior: "smooth"
});
    }else{
        quote.innerText = "No quote found.";
        author.innerText = "";
        category.innerText = "";

        currentQuote = null;
        activeCategory = null;
        currentIndex = -1;
    }
}

// ===================================
// CATEGORY FILTER
// ===================================

const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const selectedCategory = this.textContent;
        window.selectedQuoteCategory = selectedCategory;

        if (selectedCategory === "All") {
            window.selectedQuoteCategory = null;
            activeQuotePool = politicalQuotes;

            const randomQuote = politicalQuotes[Math.floor(Math.random() * politicalQuotes.length)];

            quote.innerText = randomQuote.quote;
            author.innerText = randomQuote.author;
            category.innerText = randomQuote.category;

            authorImage.src = randomQuote.image;
            authorImage.alt = randomQuote.author;
            authorImage.style.display = "block";

            currentQuote = randomQuote;
            updateFavoriteButton();

            document.getElementById("quotes").scrollIntoView({
                behavior: "smooth"
            });

            return;
        }

        window.selectedQuoteCategory = selectedCategory;
        const filteredQuotes = politicalQuotes.filter(q => q.category === selectedCategory);
        activeQuotePool = filteredQuotes;

        if(filteredQuotes.length > 0){

            const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

            quote.innerText = randomQuote.quote;
            author.innerText = randomQuote.author;
            category.innerText = randomQuote.category;

            authorImage.src = randomQuote.image;
            authorImage.alt = randomQuote.author;
            authorImage.style.display = "block";

            currentQuote = randomQuote;
            updateFavoriteButton();

            document.getElementById("quotes").scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ===================================
// START EXPLORING
// ===================================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    const randomQuote = politicalQuotes[Math.floor(Math.random() * politicalQuotes.length)];

    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
    category.innerText = randomQuote.category;

    authorImage.src = randomQuote.image;
    authorImage.alt = randomQuote.author;
    authorImage.style.display = "block";

    currentQuote = randomQuote;
    updateFavoriteButton();

    document.getElementById("quotes").scrollIntoView({
        behavior:"smooth"
    });

});


// ===================================
// NEXT QUOTE
// ===================================

const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {

        let quotePool = activeQuotePool;

    if (window.selectedQuoteCategory) {
        quotePool = politicalQuotes.filter(q => q.category === window.selectedQuoteCategory);
    }

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotePool.length);
    } while (randomIndex === currentIndex && quotePool.length > 1);

    currentIndex = randomIndex;

    const randomQuote = quotePool[randomIndex];

    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
    category.innerText = randomQuote.category;

    authorImage.src = randomQuote.image;
    authorImage.alt = randomQuote.author;
    authorImage.style.display = "block";

    currentQuote = randomQuote;
    updateFavoriteButton();

});

// ===================================
// SAVE FAVORITES
// ===================================

function updateFavoriteButton() {
    if (!currentQuote) {
        favoriteBtn.innerText = "❤️ Save";
        favoriteBtn.classList.remove("saved");
        favoriteBtn.disabled = false;
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

    const exists = favorites.some(q => q.quote === currentQuote.quote);

    if (exists) {
        favoriteBtn.innerText = "✅ Saved";
        favoriteBtn.classList.add("saved");
        favoriteBtn.disabled = true;
    } else {
        favoriteBtn.innerText = "❤️ Save";
        favoriteBtn.classList.remove("saved");
        favoriteBtn.disabled = false;
    }
}

favoriteBtn.addEventListener("click", () => {

    if(!currentQuote){
        alert("No quote selected yet!");
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

    const exists = favorites.some(q => q.quote === currentQuote.quote);

    if(!exists){

        favorites.push(currentQuote);

        localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));

        favoriteBtn.innerText = "✅ Saved";
        favoriteBtn.classList.add("saved");
        favoriteBtn.disabled = true;

    }else{
        alert("This quote is already in your collection.");
    }

});

