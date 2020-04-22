const GoogleSpreadsheet = require('google-spreadsheet');
const util = require('util');
require('util.promisify').shim();
require('dotenv').config();

var statename_id = document.getElementById("statename");
var travel_id = document.getElementById("travel");
var gather_id = document.getElementById("gather");
var quarantine_id = document.getElementById("quarantine");
var duration_id = document.getElementById("duration");

const creds1 = {
    client_email: process.env.SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.PRIVATE_KEY
};

const creds = require('./client_secret.json');

function quarantineCheck(check) {
    if (check == "NA") {
        return "No explicit statewide order. Please consult the CDC page on " 
        + "Social Distancing, Quarantine, and Isolation.".link("https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html");
    } else {
        return check;
    }
}

function updateInfo(state) {
    console.log(`update info`)
    statename_id.innerHTML = state.name;
    travel_id.innerHTML = "Traveling: ".bold() + state.travel;
    gather_id.innerHTML = "Gatherings: ".bold() + state.gathering;
    quarantine_id.innerHTML = "Quarantine: ".bold() + quarantineCheck(state.quarantine);
    duration_id.innerHTML = "Duration: ".bold() + state.duration;
}

async function accessData(state_name) {
    console.log(`access data`)
    console.log(`doc`);
    const doc = new GoogleSpreadsheet('1dPAVzaMeYQJWw166GW88Z41HJtbRnMObIvFYoLckJRY');
    console.log(`creds`);
    await util.promisify(doc.useServiceAccountAuth)(creds);
    console.log(`get info`);
    const info = await util.promisify(doc.getInfo)();
    const sheet = info.worksheets[0];

    const row = await util.promisify(sheet.getRows)({
        query: 'name =' + state_name
    });

    console.log(`call update info`)
    row.forEach(state => {
        updateInfo(state);
    })
}

$("path").click(function(e) {
    var name = $(this).data('name');
    console.log(name);
    accessData(name);
});
