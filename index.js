const Discord = require("discord.js"); //𝔽𝕆𝕎#9642
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const fow = require("./fow.json");
const { readdirSync } = require('fs'); //𝔽𝕆𝕎#9642
const { join } = require('path');

var prefix = fow.prefix

client.commands= new Discord.Collection(); 


const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); 

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`)); //𝔽𝕆𝕎#9642
    client.commands.set(command.kod, command); 
}

client.on('ready', () => {
    client.user.setActivity('𝔽𝕆𝕎#9642 Tarafından Kodlandı!') //𝔽𝕆𝕎#9642
    console.log("FOW Tarafından Yapılan Bot Aktif edildi")
})

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
        const fow = new MessageEmbed() //𝔽𝕆𝕎#9642
        .setTitle("HATA")
        .setDescription(`Komutlar Dosyamda **${command}** Adlı Komut bulunamadı!`)
        .setFooter("𝔽𝕆𝕎#9642 Tarafından Kodlandı")
        .setColor("RANDOM")
        if(!client.commands.has(command)) return message.channel.send(fow);


        try {
            client.commands.get(command).run(client, message, args);

        } catch {
            console.error(e);
        }
    }
})


client.login(fow.token)


// BU ALT YAPI 𝔽𝕆𝕎#9642 TARAFINDAN KODLANDI!
// DİSCORD SUNUCUMUZ. https://discord.gg/WszrTq4MVK
// İYİ KODLAMALAR DİLLERİM...
// BOT BAŞLATMA KOMUTU ** node index ** ' DİR.

// NOT: BU ALT YAPI FARKI PLATFORM ÜZERİNDE BAŞKA İSİMLE GÖZÜKÜRSE, TELİF HAKKI SEBEBİYLE ALT YAPI SİLİNİR + GİTHUB'TAN ENGELLENİRSİNİZ.