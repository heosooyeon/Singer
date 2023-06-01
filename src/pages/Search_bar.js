import React, { useState, useEffect } from "react";
import axios from "axios";

function Input() {
  const [music, setMusic] = useState("");
  const onChangeSearch = (e) => {
    setMusic(e.target.value);
    console.log(e.target.value);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://m.search.naver.com/p/csearch/content/qapirender.nhn?where=nexearch&key=LyricsSearchResult&q=가사검색 너를"
      );
      console.log(res.data);
      return res.data;
    };

    fetchData().then((res) => setData(res));
  }, []);

  return (
    <div>
      <input
        type="text"
        id="search"
        value={music}
        onClick={onChangeSearch}
      ></input>
      <div id="result"></div>
    </div>
  );
}

export default Input;
