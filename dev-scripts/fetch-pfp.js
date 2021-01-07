require('dotenv').config({path: __dirname + '/.env'})

const Discord = require('discord.js');
const https = require('https');
const fs = require('fs');
var avatarList = [];


const client = new Discord.Client();
const ids = [
    "127054119620837376", //Corro
    "108566726907547648", //Donttu
    "142663984355475456", //PiiNi
    "95900985074925568", //Noora
    "95885616889204736", //Peku
    "95899753136537600", //Retro
    "102817486545641472", //Zippa
    "103145499355279360", //Fabian
    "95886487882567680", //J3
    "107863790116163584", //Jipsu
    "99874548991672320", //Juizzi
    "123833370453999618", //Jusqu
    "156813228200951808", //Emmi
    "95869431216881664", //J0P
    "277030763956928513", //Joona
    "95899798749605888", //Nipde
    "66160710886891520" //Worreh
];


// avatar dimensions
const ImageSize = 256;

// avatar savelocation;
const SaveLocation = '/../src/images/avatars/';


//#-------------------------------------------

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    fetchProfilePictures();
});

async function fetchProfilePictures() {
    for (const id of ids) {

        //Create a blank user with an ID
        let currentUser = new Discord.User(client, { id: id });

        // Fetch the rest of user's data
        currentUser = await currentUser.fetch().catch(console.error);

        // Push user id and avatarURL into an array
        avatarList.push({ url: currentUser.avatarURL({ size: ImageSize, format: "webp" }), id: id, type: "webp" });
        avatarList.push({ url: currentUser.avatarURL({ size: ImageSize, format: "jpg" }), id: id, type: "jpg" });
    }
    console.log(avatarList);
    //Log out of Discord and start downloading the avatar images;
    client.destroy();
    downloadAvatars();
}

function downloadAvatars() {

    for (const avatar of avatarList) {

        const file = fs.createWriteStream(__dirname + SaveLocation + avatar.id + '.' + avatar.type);
        https.get(avatar.url, function (response) {
            response.pipe(file);
        });
    }

    console.info('Downloading complete!');
}

client.login(process.env.IMG_TOKEN);