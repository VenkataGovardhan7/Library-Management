let searchInputEl = document.getElementById("searchInput");
let messageTextEl = document.getElementById("messageText")
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
let headingEl = document.createElement("h1")

function createAppend(search_results) {
    searchResultsEl.textContent = ""
    if (search_results.length < 1) {
        messageTextEl.textContent = "No Results Found";
        searchResultsEl.textContent = "";
        headingEl.textContent = ""
    } else {

        messageTextEl.textContent = "";
        headingEl.textContent = "Popular Books"
        searchResultsEl.appendChild(headingEl)
        for (let eachItem of search_results) {
            let title = eachItem.title;
            let img = eachItem.imageLink;
            let author = eachItem.author;
            let imgEl = document.createElement("img");
            let textEl = document.createElement("p")
            imgEl.setAttribute("src", img);
            textEl.texContent = author;
            searchResultsEl.appendChild(imgEl)
            searchResultsEl.appendChild(textEl)
            console.log(eachItem)

        }
    }

}


searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none")
        let serchVal = searchInputEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + serchVal;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(responce) {
                return responce.json();
            })
            .then(function(jsonData) {
                console.log(jsonData)
                spinnerEl.classList.add("d-none")
                let {
                    search_results
                } = jsonData;
                createAppend(search_results);

            })
    }
})