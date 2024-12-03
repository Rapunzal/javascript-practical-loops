let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let tempString = "";
let cell1 = "",
  cell2 = "",
  cell3 = "",
  cell4 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== "\n") {
    tempString += str[i];
  } else {
    tempString += ",";
    let cellString = "";
    for (let j = 0, k = 0; j < tempString.length; j++) {
      if (tempString[j] !== ",") {
        cellString += tempString[j];
      } else if (tempString[j] === ",") {
        k++;
        if (k === 1) {
          cell1 = cellString;
        } else if (k === 2) {
          cell2 = cellString;
        } else if (k === 3) {
          cell3 = cellString;
        } else if (k === 4) {
          cell4 = cellString;
        }
        cellString = "";
      }
    }
    tempString = "";
    console.log(
      "Cell String ======> " + cell1 + " " + cell2 + " " + cell3 + " " + cell4
    );
  }
}
