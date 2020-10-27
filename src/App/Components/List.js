import React from 'react';

const List = () => <h1>list from back-end</h1>;

const urlList = 'http://localhost:8080/students';
fetch(urlList)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

export default List;
