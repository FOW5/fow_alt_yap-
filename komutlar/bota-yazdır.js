
module.exports = {
    kod: "bot-yaz",
    async run (client, message, args) {
        let fow = args.join(" ")
        if(!fow) return message.channel.send(":x: Botun Yazacağı Kelimeyi Belirtin.!")
        message.delete();
        message.channel.send(fow)
    }
}