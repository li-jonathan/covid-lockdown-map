
var statename_id = document.getElementById("statename");
var travel_id = document.getElementById("travel");
var gather_id = document.getElementById("gather");
var business_id = document.getElementById("business");
var quarantine_id = document.getElementById("quarantine");
var duration_id = document.getElementById("duration");

function reset() {
    statename_id.innerHTML = "STATE NAME";
    travel_id.innerHTML = "Traveling: ".bold();
    gather_id.innerHTML = "Gatherings: ".bold();
    business_id.innerHTML = "Businesses: ".bold();
    quarantine_id.innerHTML = "Quarantine: ".bold();
    duration_id.innerHTML = "Duration: ".bold();
}

$("path").hover(function(e) {
    statename_id.innerHTML = $(this).data('name');
    travel_id.innerHTML = "Traveling: ".bold() + $(this).data('t-info');
    gather_id.innerHTML = "Gatherings: ".bold() + $(this).data('g-info');
    business_id.innerHTML = "Businesses: ".bold() + $(this).data('b-info');
    quarantine_id.innerHTML = "Quarantine: ".bold() + $(this).data('q-info');
    duration_id.innerHTML = "Duration: ".bold() + $(this).data('d-info');
});

$("path").mouseleave(function(e) {
    reset();
});
  