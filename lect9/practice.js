
const form = document.getElementById("search-form");

form.addEventListener("submit",async (e)=>{
  e.preventDefault(); //stops page reload
  let search = e.target.children[0].value;
  let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=2e334a85`);
  console.log(res.data.Search);
  createCard(res.data.Search)
})

const container = document.getElementById("container")
function createCard(movies){

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className="card";
    const img = document.createElement("img");
    img.src = movie.Poster;
    img.class = "movie-banner";
    div.innerHTML =`<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
    div.prepend(img);
    container.append(div);
  });
}