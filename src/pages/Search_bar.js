import React, { useState, useEffect } from "react";
import axios from "axios";

function Input() {
  return (
    <div>
      <input
        type="text"
        id="search"
        onClick={() => {
          axios
            .get(
              "https://m.search.naver.com/p/csearch/content/qapirender.nhn?where=nexearch&key" +
                "=LyricsSearchResult&"
            )
            .then((result) => {
              console.log(result.data);
            });
        }}
      ></input>
      <div id="result"></div>
    </div>
  );
}

export default Input;
