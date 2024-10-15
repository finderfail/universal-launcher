var nick;
const DiscordRPC = require("discord-rpc");
const clientId = '1008334222060179556';
const scopes = ['rpc', 'rpc.api', 'messages.read'];
const debug_mode = false;

DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
  rpc.setActivity({
    details: `Играет с лучшим VISUALS`,
    state: 'loader coded by finderfail',
    startTimestamp,
    largeImageKey: 'snek_large',
    largeImageText: 'tea is delicious',
    smallImageKey: 'snek_small',
    smallImageText: 'i am my own pillows',
    instance: false,
  });
}

rpc.on('ready', () => {
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);

function main() {
    console.log("Abstract 5");
    console.log("coded by finderfail");
    create_folder() //creating folder for system
    download_jar() //downloading jar method
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

        // execude java arguments in child process
            exec(`java -Xmx4096M -Djava.library.path=C:\\abstract_five\\Client\\game\\natives -cp C:\\abstract_five\\Client\\game\\libraries\\*;C:\\ProgramData\\PACE.jar Start --username ${nick} --width 854 --height 480 --version 1.16.5 --gameDir C:\\abstract_five\\Client\\game --assetsDir C:\\abstract_five\\Client\\game\\assets --assetIndex 1.16 --uuid N\\A --accessToken aeef7bc935f9420eb6314dea7ad7e1e5 --userType mojang`)
            console.log("После закрытия игры, закройте лоадер сами!");
        }); 
    }


function download_jar() {
    const http = require('http');
    const fs = require('fs');
    console.log("Скачивание JAR файла игрового клиента")
    const file = fs.createWriteStream("C:\\ProgramData\\PACE.jar");
    const request = http.get("http://142.93.34.245/cdn/abs5/Client.jar", function(response) {
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
    exec("start C:\\abstract_five\\UnZip.bat"); // execute unzip command 
}

function del_old_content() {
    const { exec } = require("child_process");
    exec("rmdir /s /q C:\\abstract_five\\Client\\");
    cmd()
}

function download_unzip() {
    const http = require('http');
    const fs = require('fs');

    const file = fs.createWriteStream("C:\\abstract_five\\UnZip.bat");
    const request = http.get("http://142.93.34.245/cdn/abs5/UnZip.bat", function(response) {
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
    const folderName = 'C:\\abstract_five';
    console.log("Создание корневой папкиы")
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
            //cmd() //unzip
            jvmstarter() //start minecraft
}

function download_content() {
    const http = require('http');
    const fs = require('fs');

    const file = fs.createWriteStream("C:\\abstract_five\\content.zip");
    const request = http.get("http://142.93.34.245/cdn/abs5/content.zi1p", function(response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Скачивание Content завершенно!");
            console.log("Перед вводом ника дождитесь разархивации!");
            console.log("Старт!");
            del_old_content() // unzip
            jvmstarter() //start minecraft
            });
    });
}

// start point
main();
