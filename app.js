
var statename_id = document.getElementById("statename");
var travel_id = document.getElementById("travel");
var gather_id = document.getElementById("gather");
var quarantine_id = document.getElementById("quarantine");
var duration_id = document.getElementById("duration");

function quarantineCheck(check) {
    if (check == "NA") {
        return "No explicit statewide order. Please consult the CDC page on " + "Social Distancing, Quarantine, and Isolation.".link("https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html");
    } else {
        return check;
    }
}

$("path").click( function(e) {
    statename_id.innerHTML = $(this).data('name');
    travel_id.innerHTML = "Traveling: ".bold() + $(this).data('t-info');
    gather_id.innerHTML = "Gatherings: ".bold() + $(this).data('g-info');
    quarantine_id.innerHTML = "Quarantine: ".bold() + quarantineCheck($(this).data('q-info'));
    duration_id.innerHTML = "Duration: ".bold() + $(this).data('d-info');
});
