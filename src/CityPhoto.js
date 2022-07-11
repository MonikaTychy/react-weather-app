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
          <img src="https://img.freepik.com/free-vector/medieval-town-street-with-old-european-buildings_107791-2703.jpg?t=st=1657575542~exp=1657576142~hmac=fb73120579b827d4aae11dbcd3eddc76ffa9c633b5d82736170c05bdcf177bcf&w=826" alt="cartoon city image" className="rounded float-end img-fluid" />
        </div>
      );;
  }
}
