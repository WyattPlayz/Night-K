const Discord = require("Discord.js") //This makes sure I am useing discord.js
const client = new Discord.Client //this allows me to use the client below.
const fs = require("fs") //This allows me to read and write data to files on my pc

// VAR

var Website = "https://www.NightK.enjin.com"
var Owner = "WyattPlayz"

// VAR

client.on('ready', () => { //Without this, the bot can't do ANYTHING!
	console.log('Bootup complete.')
});

client.on('message', msg => {
	if (msg.author.bot) return; //Prevents bots from executing other bot commands
	client.user.setPresence({ game: { name: 'On NightK.enjin.com' }})
	if (msg.content == '-ban') {
		if (msg.author.hasPermissions(BAN_MEMBERS)) {
			let player = msg.author.id
			let target = msg.mentions.members.first();
			console.log(`Banning ${target}`);
			target.ban(`${player}`);
			msg.reply(`Has Banned ${target}`)
		}
	}
	if (msg.content == '-kick') {
		if (msg.author.hasPermission(KICK_MEMBERS)) {
			let player = msg.author.id
			let target = msg.mentions.members.first();
			console.log(`Kicking ${target}`);
			target.kick(`${player}`);
			msg.reply(`Has Kicked ${target}`)
		}
	}
	if (msg.content == '-mute') {
		console.log(`DEBUG MODE ON`);
		if (!msg.author.hasPermission('MUTE_MEMBERS')) return;
		console.log(`ABLE to mute player`)
		let player = msg.author.id
		console.log(`Set Player to ${player}`)
		console.log(`Set Target to ${target}`)
		console.log(`Muting ${target}`);
		msg.author.addRole('412376672734543872', `${player}`);
		msg.author.removeRole('412376438059302914', `${player}`)
		console.log(`Added Roles!`)
		msg.reply(`Has Muted ${target}`)
	}
	if (msg.content == 'Hey Night K! Come say hello!') {
		msg.delete();
		msg.channel.send('Oh well erm, Hi.')
	}
	if (msg.content == 'Hi Night K') {
		msg.reply('Hi!');
	}
	if (msg.content == 'LoqicalPvP') {
		msg.delete();
		msg.channel.send('Oh! I am coming for you LoqicalPvP!')
	}
	if (msg.content == 'Night K') {
		let player = msg.author
		msg.channel.send(`Well Hello ${player}! I'm a Special bot for Night K! Programmed by WyattPlayz`)
	}
	if (msg.content == '!avatar') {
		let player = msg.mention.members.first();
		let avatar = player.avatar();
		msg.channel.send(`Ok, I have compiled the avatar of ${player}. Here it is. ${avatar}`)
	}
	if (msg.content == 'hi Night K') {
		msg.reply('Hi!');
	}
	if (msg.content == 'Night k') {
	let player = msg.author
	msg.channel.send(`Well Hello ${player}! I'm a Special bot for Night K! Programming by WyattPlayz`)
	}
	if (msg.content == 'hi night K') {
		msg.reply('Hi!');
	}
	if (msg.content == 'Hi night K') {
		msg.reply('Hi!');
	}
	if (msg.content == 'hi night k') {
		msg.reply('Hi!');
	}
	if (msg.content == 'hi Night k') {
		msg.reply('Hi!');
	}
	if (msg.content == '-stop') {
		if (msg.author.hasPermission(MANAGE_SERVER)) {
			msg.channel.send('Goodbye everyone. I am rebooting.');
			client.destroy();
		}
		else {
			msg.reply('No permissions!')
		}
	}
	if (msg.content == '!player') {
		let player = msg.author
		msg.delete();
		msg.channel.send(`Well, Its nice to meet you ${player}`)
	}
	if (msg.content == 'no escape') {
		msg.delete();
		msg.channel.send('Hiding is pointless, there is no escape!')
	}
	if (msg.content == 'I JUST CANT GET THE STINKIN BOT TO WRITE THE FILES!') {
		msg.channel.send('But I hate doing what you say!')
	}
	if (msg.content == 'GRRRRRR') {
		msg.channel.send('Well GRRRRRRRRRRRRRR To you two.')
	}
	if (msg.content == '!help') {
		let Sender = msg.author
		msg.channel.send(`Ahh! hello ${Sender}! I am a very special bot you know! I was made JUST for Night K! I was made by @! WyattPlayz#5387 ! and Im sure you will enjoy it here. type !commands for commands you can do, or type -commands for the admin commands!`)
	}
	if (msg.content == 'Computer- REBOOT') {
		if (msg.author.hasPermission(MANAGE_SERVER)) {
			msg.reply("Time to goto bed!");
			client.destroy()
		}
	}
	if (msg.content == 'Dr. Slime') {
		msg.delete()
		msg.reply("is totally right! Dr.Slime is WAY TO SLIMEY to be a doctor!")
	}
	if (msg.content == 'WyattPlayz') {
		msg.delete();
		msg.channel.send('WyattPlayz is the COOLEST person I have EVER MET!');
	}
	if (msg.content == 'Website') {
		msg.delete()
		msg.reply(Website);
	}
	if (msg.content == 'no') {
		let Player = msg.author
		msg.channel.send(`I think ${Player} Ment to say Yes`)
	}
});

client.on('guildMemberAdd', member => {
	member.addRole('412376438059302914')
});

client.login('NDEyMzY5MDk2NTA0NjM5NDg4.DWJddg.Lf7tohspg3ckUpEZZZaLoWsUU2s')