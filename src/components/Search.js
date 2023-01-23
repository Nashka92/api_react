import { render } from "@testing-library/react";
import axios from "axios";
import Card from "react-bootstrap/Card";

let tab = [];

async function Search(event) {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie/",
      {
        params: {
          api_key: "bb4a991cec6e98b9e241964f10d4758b",
          language: "fr-FR",
          query: event,
          adult : true
        },
      }
    );

    tab = response.data.results;

    console.log(tab);

    tab.forEach((element) => {
      render(
        <div className="d-flex flex-wrap">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" +
                element.poster_path
              }
            />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>{new Date(element.release_date).toLocaleDateString()}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  } catch (error) {
    console.log(error);
  }
}
export default Search;
