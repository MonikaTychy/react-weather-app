import React from 'react';

export default function FormattedTime (props) {
  
    function addZero (i) {
    if (i < 10) {i = "0" + i}
    return i
  }

  const now = new Date (props.timestamp * 1000);
  let hours = addZero(now.getHours());
  let minutes = addZero(now.getMinutes());
  let day = addZero(now.getDate());
  let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

    return (
        <p>Last update: {day} {month} {year}, {hours}:{minutes}</p>
    );
}