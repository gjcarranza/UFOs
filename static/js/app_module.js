// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody=d3.select("tbody")

function buildTable(data) {
    tbody.html("");

    //loop through each object in the data and append row and cells for each value in row
    data.forEach((dataRow)=> {
        let row=tbody.append("tr");

        //loop though each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell=row.appent("td")
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    let date=d3.select("#datetime").property("value");
    let filteredData=tableData;

    //check to see if a date was entered and flter the data using that date
    if (date) {
        //apply 'filter' to table data to only keep the rows where 'datetime' value matches filter value
        filteredData=filteredData.filter(row=>row.datetime===date);
    };

    //rebuild the table using filtered data
    //if no dateentered, filteredData will be the original tableData
    buildTable(filteredData);

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);
};

