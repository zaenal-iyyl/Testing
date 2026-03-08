/* udin
  Script ini tidak untuk diperjual-belikan atau gratis.
  Script masih dalam tahap pengembangan mungkin akan ada bug, error dan lain sebagainya.
*/

import chalk from "chalk";
import { watchFile, unwatchFile } from "fs";
import { fileURLToPath } from "url";
import moment from "moment-timezone";

// ===== CONFIG =====
global.owner = ["6281283516246", "6285751561624"];

global.info = {
    nomorbot: "0",
    namabot: "k-MD",
    nomorowner: "6288221019426",
    namaowner: "zaenaalll"
}

// ===== THUMBNAIL =====
global.thum = "https://qu.ax/NhajaP.jpg";

// ===== OPTIONS =====
global.autoRead = true; // OPSIONAL
global.stage = {
    wait: "*Memproses permintaan!!*",
    error: "*Gagal Memproses permintaan*"
}

// ===== LINK ====
global.lgh = "https://github.com/zaenal-iyyl/bot-wea"; // Github
global.lwa = "https://wa.me/6288221019426"; // Whatsapp
global.lig = ""; // Instagram
global.lgc = ""; // Group Chat Whatsapp
global.lch = ""; // Channels Whatsapp 
let file = fileURLToPath(import.meta.url);
watchFile(file, async () => {
    unwatchFile(file);
    console.log(`${chalk.white.bold(" [SISTEM]")} ${chalk.green.bold(`FILE DIUPDATE "settings.js"`)}`);
    import(`${file}?update=${Date.now()}`);
});
);
});
