import axios from "axios";

async function Search(event) {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie/", {
      params: {
        api_key: "bb4a991cec6e98b9e241964f10d4758b",
        language: "fr-FR",
        query: event.target.value
      }
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default Search;
