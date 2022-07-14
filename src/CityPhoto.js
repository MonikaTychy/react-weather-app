import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CityPhoto(props) {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState({});

  function showResponse(response) {
    setImage({
      url: response.data.results[0].urls.thumb,
      id: response.data.results[0].id,
      description: response.data.results[0].description
    });
    setReady(true);
  }

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  if (ready) {
    return (
      <div className="CityPhoto">
        <img src={image.url} key={image.id} alt={image.description} />
      </div>
    );
  } else {
    const apiKey = `xCxd2Wl6IORTInF2bnqI4Y0xexyKziO4BejWkM2TLIw`;
    let apiUrlUnsplash = `https://api.unsplash.com/search/photos?page=1&query=${props.city}&client_id=${apiKey}`;
    axios.get(apiUrlUnsplash).then(showResponse);

    return null;
  }
}
