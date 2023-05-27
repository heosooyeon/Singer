import React from "react";
import "../style/style.css";
function Table() {
  return (
    <div>
      <table border="1" className="Search_table">
        <tr>
          <td>No.</td>
          <td>노래 제목</td>
          <td>가사</td>
          <td>노래방 번호</td>
        </tr>
      </table>
    </div>
  );
}
export default Table;
