const GoogleSpreadsheet = require('google-spreadsheet');
const {promisify} = require('util');
require('dotenv').config();

const doc = new GoogleSpreadsheet('1dPAVzaMeYQJWw166GW88Z41HJtbRnMObIvFYoLckJRY');

const creds = {
    client_email: process.env.SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
};

function printInfo(state) {
    console.log(`state name: ${state.name}`);
    console.log(`travel: ${state.travel}`);
    console.log(`gather: ${state.gathering}`);
    console.log(`quarantine: ${state.quarantine}`);
    console.log(`--------------------------------------`)
}

async function accessData() {
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();

    console.log(info.title);

}

accessData();