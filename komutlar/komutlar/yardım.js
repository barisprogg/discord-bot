const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `!banned = Dene ve Gör! \n!avatarım = Avatarınınızı Gösterir. \n!herkesebendençay = Herkese Çay Alırsınız. \n!koş = Koşarsınız.\n!çayiç = Çay İçersiniz. \n!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n!çayaşekerat = Çaya Şeker Atarsınız. \n!yumruh-at = Yumruk Atarsınız. \n!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n!sunucuresmi = BOT Sunucunun Resmini Atar. \n!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n!unban = İstediğiniz Kişinin Yasağını Açar. \n!kayitol = Kayıt Olursunuz. \n!oylama = Oylama Açar. \n!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "!yardım = BOT Komutlarını Atar. \n!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n!döviz = Döviz Kurlarını Gösterir. \n!kullanıcıbilgim = Kullanıcı Bilgini Gösterir. \n!çekiliş = Çekiliş Yapar. \n!espiriyap = Espiri Yapar. \n!zekam = Zekanı Gösterir. \n!sunucuresmi = Sunucu Resmini Gösterir. \n!böl = Bölme İşlemi Yapar Örn.!böl 1 1 \n!çarp = Çarpma İşlemi Yapar Örn.!çarp 1 1 \n!çıkar = Çıkarma İşlemi Yapar Örn.!çıkar 1 1 \n!topla = Toplama İşlemi Yapar Örn.!topla 1 1 \n!ping = BOT Gecikme Süresini Söyler. \n!davet = BOT Davet Linkini Atar. \n!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Kennys/14/Barış** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardim [komut]'
};
