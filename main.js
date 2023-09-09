var nick;

function main() {
    console.log("GUMBALLOFF LOADER v3");
    console.log("coded by finderfail on js");
    create_folder()
    download_jar()
}

// readline method (so simple)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function jvmstarter() {
    const { exec } = require("child_process");
    readline.question('Введите свой ник:', nick => {
            console.log(`Добро пожаловать ${nick}!`);
            //readline.close();
            exec(`java -Xmx4096M -Djava.library.path=C:\\gumballoffloader\\Client\\game\\natives -cp C:\\gumballoffloader\\Client\\game\\libraries\\*;C:\\ProgramData\\Client.jar net.minecraft.client.main.Main --username ${nick} --width 854 --height 480 --version 1.16.5 --gameDir C:\\gumballoffloader\\Client\\game --assetsDir C:\\gumballoffloader\\Client\\game\\assets --assetIndex 1.16 --uuid N\\A --accessToken aeef7bc935f9420eb6314dea7ad7e1e5 --userType mojang`)
            console.log("После закрытия игры, закройте лоадер сами!");
        }); 
    }


function download_jar() {
    const https = require('https');
    const fs = require('fs');

    const file = fs.createWriteStream("C:\\ProgramData\\Client.jar");
    const request = https.get("https://kriloud.space/cdn/free/Client.jar", function(response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Скачивание Jar Успешен!");
            console.log("Старт скачивания файла UnZip!");
            download_unzip()
        });
    });
}

function cmd() {
    const { exec } = require("child_process");
    exec("start C:\\gumballoffloader\\UnZip.bat")
}

function download_unzip() {
    const https = require('https');
    const fs = require('fs');

    const file = fs.createWriteStream("C:\\gumballoffloader\\UnZip.bat");
    const request = https.get("https://kriloud.space/cdn/free/UnZip.bat", function(response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Скачивание UnZip скрипта!");
            console.log("Старт скачивания файла Content!");
            ask_skip()
        });
    });
}

function create_folder() {
    const fs = require('fs');
    const folderName = 'C:\\gumballoffloader';

    try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
    } catch (err) {
    console.error(err);
    }
}

function ask_skip() {
    let ask;
    readline.question('Вы хотите пропустить скачивание Content? (0 = skip, 1 = download):', ask => {
        if (ask == 0) {
            skip_download()
        } else {
            download_content()
        }
  });
    
}

function skip_download() {
    console.log("Перед вводом ника дождитесь разархивации!");
    console.log("Старт!");
            cmd() //unzip
            jvmstarter() //start minecraft
}

function download_content() {
    const https = require('https');
    const fs = require('fs');

    const file = fs.createWriteStream("C:\\gumballoffloader\\content.zip");
    const request = https.get("https://kriloud.space/cdn/free/content.zip", function(response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Скачивание Content завершенно!");
            console.log("Перед вводом ника дождитесь разархивации!");
            console.log("Старт!");
            cmd() // unzip
            jvmstarter() //start minecraft
            });
    });
}

// start point
main();
