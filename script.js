imageGen = document.getElementById("generator");
image = document.getElementById("random-image");
quote = document.getElementById("words");
author = document.getElementById("author");

imageGen.addEventListener("click", function(){
    this.classList.remove("rotate");
    void this.offsetWidth;
    this.classList.add("rotate");
    fetchImage();
});

async function fetchImage(){
    try{
        const response = await fetch("https://picsum.photos/220");
        if(!response.ok){
            throw new Error("Network response failed.");
        }
        image.src = response.url;
    }catch(error){
        console.error(error);
    }

    try{
        const response = await fetch("https://dummyjson.com/quotes/random");
        if(!response.ok){
            throw new Error("Network response failed.");
        }
        const data = await response.json();
        quote.textContent = '"' + data.quote + '"';
        author.textContent =  '- ' + data.author;
    }catch(error){
        console.error(error);
    }
}