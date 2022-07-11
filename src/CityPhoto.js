import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CityPhoto(props) {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState({});

  function showResponse(response) {
    setImage({
      url: response.data.urls.thumb,
      id: response.data.id,
      description: response.data.description
    });
    setReady(true);
  }

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  if (ready) {
    return (
      <div className="CityPhoto">
        <img src={image.url} key={image.id} alt={image.description} className="rounded float-end" />
      </div>
    );
  } else {
    let apiUrlUnsplash = `https://api.unsplash.com/photos/random?client_id=xCxd2Wl6IORTInF2bnqI4Y0xexyKziO4BejWkM2TLIw&query=town ${props.city}`;
    axios.get(apiUrlUnsplash).then(showResponse);

    return (
        <div className="CityPhoto">
          <img src="https://img.freepik.com/free-vector/urban-street-landscape-with-cafe-beauty-salon_107791-1892.jpg" alt="cartoon city" className="rounded float-end img-fluid" />
        </div>
      );
  }
}
