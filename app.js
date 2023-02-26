// Get the buttons and tables
const table1Button = document.getElementById("table1-button");
const table2Button = document.getElementById("table2-button");
const table3Button = document.getElementById("table3-button");

const table1Rows = document.querySelectorAll("#table1 tr");
const table2Rows = document.querySelectorAll("#table2 tr");
const table3Rows = document.querySelectorAll("#table3 tr");

// Add event listeners to buttons
table1Button.addEventListener("click", function () {
  removeColorClass(table1Rows);
});

table2Button.addEventListener("click", function () {
  removeColorClass(table2Rows);
});

table3Button.addEventListener("click", function () {
  removeColorClass(table3Rows);
});

// Remove background color from row
function removeColorClass(rows) {
  rows.forEach(function (row) {
    row.classList.remove("unknown", "semi-known", "well-known");
  });
}
