// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let date = d3.select("#datetime").property("value");

    // 4b. Save the value that was changed as a variable.
    var cities = d3.select("#city").property("value");
    var states = d3.select("#state").property("value");
    var countries = d3.select("#country").property("value");
    var shapes = d3.select("#shape").property("value");
    // 4c. Save the id of the filter that was changed as a variable.
   
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };
  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  
    // 8. Set the filtered data to the tableData.
  let filteredData = data;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, val]) => {
      if (key==="datetime") {
        filteredData = data.filter(row => row.datetime === val);
      }
        if (key==="city") {
        filteredData = data.filter(row => row.city === val);
      }
    
      if (key==="state") {
        filteredData = data.filter(row => row.state === val);
      }
    
      if (key==="country") {
        filteredData = data.filter(row => row.country === val);
      }
    
      if (key==="shape") {
        filteredData = data.filter(row => row.shape === val);
      };
  
    });
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);


  // 2. Attach an event to listen for changes to each filter
var inputField = d3.select("#input-field");

inputField.on("change",function(){
  console.log(d3.event.target.value);

});




  
  // Build the table when the page loads
  buildTable(data);
};