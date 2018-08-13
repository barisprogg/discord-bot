const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.members, message.author.avatarURL)
    .setDescription('Özel Mesajlarına Bilgi Mesajımı Attım! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.members, message.author.avatarURL)
    .setDescription('**2.08.2018 Tarihinde Kennys/14/Barış#7012 Tarafından Yapılmıştır. Diğer Bütün Bilgiler İçin !yardım**');
    return message.author.guilds.member(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['özel mesaj', 'özelmesajgönder'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
