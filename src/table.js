import React from "react";

export default function Table({ change, bill, given, status }) {
  if (bill !== "" && given !== "" && status === true) {
    return (
      <div>
        <table className="change-table">
          <caption> Return Change </caption>
          <tbody>
            <tr className="shaded">
              <th>Note Denomination</th>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <th> No of Notes </th>
              <td className="no-of-notes">{change["2000"]}</td>
              <td className="no-of-notes">{change["500"]}</td>
              <td className="no-of-notes">{change["100"]}</td>
              <td className="no-of-notes">{change["20"]}</td>
              <td className="no-of-notes">{change["10"]}</td>
              <td className="no-of-notes">{change["5"]}</td>
              <td className="no-of-notes">{change["1"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}
