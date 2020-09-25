const Discord = require('discord.js');

const bot = new Discord.Client ();

const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

const ping = require('minecraft-server-util')

const request = require('request');

const ytdl = require("ytdl-core");

const token = 'NjkyNDYxMTQ3Mzc0NDg1NTg2.Xnu2sg.v39yFVBxPwkPpYTGuN8niPVwpbg';

const PREFIX = '$';

var servers = {};



bot.on('ready',() =>{
   console.log('This bot is online!');
   bot.user.setActivity('SkyWars', {type: "PLAYING"});

})


bot.on('messageDelete', message => {
    if(!message.partial) {
        const channel = bot.channels.cache.get('631550712211308574');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle(`Message Deleted in ${message.channel.name}`)
                .setColor('#FF0000')
                .setThumbnail(message.author.displayAvatarURL())
                .setAuthor('MG Chat Logger', 'https://cdn.discordapp.com/attachments/697945726499422358/699401959165395004/447435.png')
                .addField('**Content:**', (message.content))
                .setFooter(`Author: ${message.author.tag} | User ID: ${message.author.id}`)
                .setTimestamp();
                
                    
                        

                channel.send(embed);
        }
    }


})



bot.on('message', message=>{


    if(message.content === "help"){
        message.channel.send('Please create a ticket at <#672802540991021069>')

    }

    let args= message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;



    switch(args[0]){
        case 'winstreak':
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🎖️**| BedWars WinStreak Leaderboard**')
            .setDescription('A list of the highest 10 BedWars winstreaks')
            .setThumbnail('https://cdn.discordapp.com/attachments/697939276759040041/698179816121171968/logo.png')
            .addFields(
                { name: '**1st» Salti**', value: '``250 Winstreak``' },
		        { name: '**2nd» PolarBear2003**', value: '``115 Winstreak``' },
                { name: '**3rd» LordKacem**', value: '``108 Winstreak``'},
                { name: '**4th» Squeezy56**', value: '``85 Winstreak``' },
                { name: '**5th» chocz700**', value: '``77 Winstreak``' },
                { name: '**6th» Optimascraft**', value: '``71 Winstreak``'},
                { name: '**7th» SpookyMan06**', value: '``68 Winstreak``' },
                { name: '**8th» Synecki**', value: '``60 Winstreak``' },
                { name: '**9th» Fireblqde**', value: '``53 Winstreak``'},
            )
            
            .setTimestamp()
            .setFooter('MGBot', 'https://cdn.discordapp.com/attachments/631550712211308574/751839501197901884/Minigames_Community_Logo.png');
            
            message.channel.send(embed);
        break;

        }

        switch(args[0]){
            case 'invite':
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Minigames Community Discord')
            .setThumbnail('https://cdn.discordapp.com/attachments/631550712211308574/751839501197901884/Minigames_Community_Logo.png')
            .addField('**<:MG_Discord:751850447962243122> Invite Link»**', 'https://discord.gg/dqaGNZs')
            .setTimestamp()
            .setFooter('MGBot', 'https://cdn.discordapp.com/attachments/631550712211308574/751839501197901884/Minigames_Community_Logo.png');
            
            message.channel.send(embed);
        break;
        }

        switch(args[0]){
            case 'status':

                
                ping('play.jartexnetwork.com', 25565, (error, response) =>{
                    if(error) throw error
                    const embed = new Discord.MessageEmbed()
                    .setColor('FFBD00')
                    .setTitle('<:Jartex:711036324131373076> JartexNetwork Status')
                    .setThumbnail('https://cdn.discordapp.com/attachments/697939276759040041/698179816121171968/logo.png')
                    .addField('**Server IP »**', response.host)
                    .addField('**Server Version »**', response.version)
                    .addField('**Online Players »**', response.onlinePlayers)
                    .addField('**Max Players »**', response.maxPlayers)
                    .setTimestamp()
                    .setFooter('MGBot', 'https://cdn.discordapp.com/attachments/631550712211308574/751839501197901884/Minigames_Community_Logo.png');

                    message.channel.send(embed)

                    
                })
            break

        }

        switch(args[0]){
            case 'help':
            const embed = new Discord.MessageEmbed()
            .setColor('#3AFF00')
            .setTitle('<:MG_Help:751851093289336944> A list of all the available commands')
            .setDescription('The prefix for the MGBot is ``$``')
            .setThumbnail('https://cdn.discordapp.com/attachments/631550712211308574/751839501197901884/Minigames_Community_Logo.png')
            .addField('**<:MG_Bed:751851985967251537> $winstreak »**', "Showcases the top 10 highest bedwars winstreaks")
            .addField('**<:MG_Discord:751850447962243122> $invite »**', "Provides you with a discord invite link", true)
            .addField('**<:MG_Jartex:719233006325465099> $status »**', "Displays information about JartexNetwork")
            .setTimestamp()
            .setFooter('MGBot', 'https://cdn.discordapp.com/attachments/631550712211308574/751839501197901884/Minigames_Community_Logo.png');
            
            message.channel.send(embed)
        break;
        
        }


        const attachment = new MessageAttachment(message.author.displayAvatarURL());
        
        switch(args[0]){
            case 'pfp':
               message.channel.send('Your profile picture is:') 
                message.reply(message.author.displayAvatarURL())
            
        break;
        
        }




     
        
       

    })
bot.login(token);