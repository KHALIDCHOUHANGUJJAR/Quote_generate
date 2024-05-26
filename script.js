

const quotee = document.getElementById("quote");
const authore = document.getElementById("author");
const api_url = "https://api.quotable.io/random"


async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quotee.innerHTML = data.content;
    authore.innerHTML = data.author;
}
getquote(api_url)
function tweet() {
    window.open("https://twitter.com/indent/tweet?text=" + quotee.innerHTML + "---- by" +
        authore.innerHTML,
        "Tweet Window", "width=600, hieght=300")
}
