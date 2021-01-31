module.exports = {
  name: "ip",
  description: "geeft het ip van de server",
  execute(message, args, Discord, client, config, serverInfo){


    let embed = new Discord.MessageEmbed()
                  .setColor('#ffc603')
                  .setTitle('Server ip!')
                  .setDescription("Het ip van de server is: `" + serverInfo.ip + "`")
                  .setFooter("Voor meer informatie doe" + config.prefix + " !links.", "https://i.imgur.com/cYtNPbX.png");



        message.channel.send(embed);


  }
}
