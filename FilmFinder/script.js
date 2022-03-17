let APIKey = undefined;

const movie = async (searched) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${APIKey}&s=${searched}`
  );
  const movieResponse = await response.json();
  return movieResponse;
};

const searchDescription = async (searched) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${APIKey}&t=${searched}&plot=short`
  );
  const descriptionResponse = await response.json();
  let description = await descriptionResponse.Plot;
  if (description === "N/A") {
    description = "";
  }
  return description;
};

const noSubmitProblem = async (event) => {
  event.preventDefault();
  handleSearch();
};

const deleteCard = (nameClass) => {
  const movieCards = document.querySelector(`#${nameClass}`);
  movieCards.innerHTML = "";
};

const createCard = (movie) => {
  document.getElementById("searching").innerText = "Recherche en cours...";
  movie.Search.forEach(async (movieFound) => {
    let poster = movieFound.Poster;
    const description = await searchDescription(movieFound.Title);
    if (movieFound.Poster === "N/A") {
      poster = `./assets/noPoster.jpg`;
    }

    deleteCard("searching");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${poster}" alt="moviePoster">
              <div class="info">
                  <h1>${movieFound.Title}</h1>
                  <h2>${movieFound.Year}</h2>
                  <p"no-bold">${description}</p>
                  <div class="read-more">
                      <input type="submit" value="Read More">
              </div>
              </div>`;
    // I know this is a bad using of JS, but sorry it took me 2 minutes to do that way instead of the createElement one. //
    document.getElementById("movie-found").appendChild(card);
  });
};

const isResponseTrue = (movie) => {
  if (movie.Response === "True") {
    return true;
  } else {
    return false;
  }
};

const sayNoMovieFound = (movie) => {
  const searchingDiv = document.querySelector("#searching");

  if (movie.Error === "Movie not found!") {
    searchingDiv.innerText =
      "No movie fill your research, please try something else";
  } else if (movie.Error === "Invalid API key!") {
    searchingDiv.innerText =
      'Invalid API Key! Please enter a valid one with the button "API Key"';
  }
};

const handleSearch = async (event) => {
  event.preventDefault();
  deleteCard("movie-found");
  let searchedThing = document
    .querySelector("#search-input")
    .value.toLowerCase();
  let movieChoosen = await movie(searchedThing);
  const response = isResponseTrue(movieChoosen);
  if (response === true) {
    createCard(movieChoosen);
  } else {
    sayNoMovieFound(movieChoosen);
  }
};

const validAPIKey = async () => {
  APIKey = prompt("Please enter your API Key from OMDb");
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${APIKey}&t=The Imitation Game`
  );
  const movieResponse = await response.json();
  if (movieResponse.Response === "False") {
    alert("Wrong API key");
    APIKey = undefined;
  } else if (movieResponse.Response === "True") {
    alert("Valid API Key, you can use search engine now");
  }
};

const main = () => {
  console.log(
    "Hey ! Do you understand the concept of this website ? I used the API from https://www.omdbapi.com/ to create a FilmFinder. To use it, you need an API Key from them. Go to https://www.omdbapi.com/apikey.aspx for a free API Key and you'll be able to use this website !"
  );
  const APIKeyValidator = document.querySelector(".ApiKey");
  APIKeyValidator.addEventListener("click", validAPIKey);

  const form = document.querySelector("#filmfinder-form");
  const searchIcon = document.querySelector("#search svg");
  const submit = document.querySelector(".submit");
  searchIcon.addEventListener("click", handleSearch);
  form.addEventListener("submit", handleSearch);
  submit.addEventListener("click", handleSearch);
};

main();
