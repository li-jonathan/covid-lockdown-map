
var statename_id = document.getElementById("statename");
var travel_id = document.getElementById("travel");
var gather_id = document.getElementById("gather");
var quarantine_id = document.getElementById("quarantine");
var duration_id = document.getElementById("duration");
var testing_id = document.getElementById("testing");

function reset() {
    statename_id.innerHTML = "STATE NAME";
    travel_id.innerHTML = "Traveling: ".bold();
    gather_id.innerHTML = "Gatherings: ".bold();
    quarantine_id.innerHTML = "Quarantine: ".bold();
    duration_id.innerHTML = "Duration: ".bold();
    testing_id.innerHTML = "";
}

function quarantineCheck(check) {
    if (check == "NA") {
        return "Quarantine: ".bold() +  "No statewide directive. Please consult the CDC page on " + "Social Distancing, Quarantine, and Isolation.".link("https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html");
    } else {
        return "Quarantine: ".bold() + check;
    }
}

$("path").click(function(e) {
    var source = "[" + "source".link($(this).data('source'), '_blank') + "]";
    statename_id.innerHTML = $(this).data('name') + source.sup();
    travel_id.innerHTML = "Traveling: ".bold() + $(this).data('t-info');
    gather_id.innerHTML = "Gatherings: ".bold() + $(this).data('g-info');
    quarantine_id.innerHTML = quarantineCheck($(this).data('q-info'));
    duration_id.innerHTML = "Duration: ".bold() + $(this).data('d-info');
    testing_id.innerHTML = "If you think you have COVID-19, click " + "here.".link($(this).data('t-link'));
});

/*
$("path").mouseleave(function(e) {
    reset();
});
*/