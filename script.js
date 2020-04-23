const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1dPAVzaMeYQJWw166GW88Z41HJtbRnMObIvFYoLckJRY');
const $ = require('jquery');

var statename_id = document.getElementById("statename");
var travel_id = document.getElementById("travel");
var gather_id = document.getElementById("gather");
var quarantine_id = document.getElementById("quarantine");
var duration_id = document.getElementById("duration");

/**
 * @author: Jonathan Li
 */

/**
 * 
 * @param {*} check 
 */
function quarantineCheck(check) {
    if (check == "NA") {
        return "No explicit statewide order. Please consult the CDC page on " 
        + "Social Distancing, Quarantine, and Isolation.".link("https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html");
    } else {
        return check;
    }
}

/**
 * 
 * @param {*} state 
 */
function updateData(state) {
    statename_id.innerHTML = state.name
    travel_id.innerHTML = "Traveling: ".bold() + state.travel;
    gather_id.innerHTML = "Gatherings: ".bold() + state.gathering;
    quarantine_id.innerHTML = "Quarantine: ".bold() + quarantineCheck(state.quarantine);
    duration_id.innerHTML = "Duration: ".bold() + state.duration;
}

/**
 * 
 * @param {*} id 
 */
async function accessData(id) {
    await doc.useServiceAccountAuth(require('./client_secret.json'));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; 
    const rows = await sheet.getRows({limit: 51});
    updateData(rows[id]);
}

/**
 * 
 */
$("path").click(function(e) {
    var state_id= $(this).data('id');
    accessData(state_id);
});