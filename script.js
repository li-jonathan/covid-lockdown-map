var requirejs = require('require.js');
requirejs.config({nodeRequire: require});



const GoogleSpreadsheet = require('google-spreadsheet');
const {promisify} = require('util');
require('dotenv').config();

var statename_id = document.getElementById("statename");
var travel_id = document.getElementById("travel");
var gather_id = document.getElementById("gather");
var quarantine_id = document.getElementById("quarantine");
var duration_id = document.getElementById("duration");

const doc = new GoogleSpreadsheet('1dPAVzaMeYQJWw166GW88Z41HJtbRnMObIvFYoLckJRY');

const creds = {
    client_email: process.env.SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
};

function quarantineCheck(check) {
    if (check == "NA") {
        return "No explicit statewide order. Please consult the CDC page on " + "Social Distancing, Quarantine, and Isolation.".link("https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html");
    } else {
        return check;
    }
}

function updateInfo(state) {
    statename_id.innerHTML = state.name;
    travel_id.innerHTML = "Traveling: ".bold() + state.travel;
    gather_id.innerHTML = "Gatherings: ".bold() + state.gathering;
    quarantine_id.innerHTML = "Quarantine: ".bold() + quarantineCheck(state.quarantine);
    duration_id.innerHTML = "Duration: ".bold() + state.duration;
}

async function accessData(state_name) {
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];

    const row = await promisify(sheet.getRows)({
        query: 'name =' + state_name
    });

    row.forEach(state => {
        updateInfo(state);
    })
}

$("path").click(function(e) {
    console.log(`click`);
    var data = $(this).data('name');
    accessData(data);
});
