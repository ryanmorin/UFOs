// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function for the table
function buildTable(data) {
    //clears the html table by sending it an empty string
    //this way any existing filters will be cleared
    tbody.html("");
    data.forEach((dataRow) => {
        //It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
        let row = tbody.append("tr");

        //By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. 
        //By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. 
        //We've added forEach((val) to specify that we want one object per row.   
        Object.values(dataRow).forEach((val) => {
        
            //Let's first create a variable to append data to a table
            let cell = row.append("td");
        
            //adding the values
            cell.text(val);
            }
        );    

    });

}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }

  // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);