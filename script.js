// set current date
document.getElementById("date-placed").valueAsDate = new Date();

var form = document.getElementById("form");
var betType = document.getElementById("bet-type");
var outcome = document.getElementById("outcome");
var date = document.getElementById("date-placed");
var wagerAmt = document.getElementById("wager-amt");
var wagerOutcome = document.getElementById("wager-outcome");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    wagerAmt.value = "";
    wagerOutcome.value = "";

    addFormEntry();
});

function addFormEntry() {
    // retrieve current localStorage data
    // parse JSON data back to JS object
    var currentDataEntries = JSON.parse(localStorage.getItem("formDataEntries"));
    if(currentDataEntries == null) {
        currentDataEntries = [];    // set to empty array if it doesn't exist
    }

    var formDataEntry = {
        bet_type: betType.value,
        outcome: outcome.value,
        date: date.value,
        wagerAmt: wagerAmt.value,
        wagerOutcome: wagerOutcome.value
    }
    // set object with key "formData"
    // use stringify to convert object into JSON string
    localStorage.setItem("formDataEntry", JSON.stringify(formDataEntry));
    
    currentDataEntries.push(formDataEntry);
    localStorage.setItem("formDataEntries", JSON.stringify(currentDataEntries));


}

//localStorage