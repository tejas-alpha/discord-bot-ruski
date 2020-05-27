const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzE0NzcxNjkwNTcxNDMxOTY2.XszkLA.Z4styXTOzsjOERheOFx68IKW-HM';
const prefix = '!';
bot.on('ready', () =>{
	console.log('Bot Online!');
})
bot.on('guildMemberAdd', member=>{
	const channel = member.guild.channels.cache.find(channel => channel.name === "general");
	if(!channel) return;
	channel.send(`Welcome to the discord server of 2EZ4-TooEasyFor, ${member}. For the help menu send !help in the channel.`)
});
function getAge(dateString) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
	}
	return age;
}
bot.on('message', message=>{
	let args = message.content.substring(prefix.length).split(" ");
	if (!message.content.startsWith(prefix)) return;
	if (message.content.startsWith(prefix)){
		switch(args[0]){
			case 'help':
				const help_menu = new Discord.MessageEmbed()
				.setTitle('Commands')
				.addField('-help', 'Display help menu.')
				.addField('-website', 'Link to our website!.')
				.addField('-youtube', 'Link to our YouTube channel.')
				.addField('-instagram', 'Link to our Instagram account.')
				/*.addField('-username', 'Get information of player.\nReplace "username" by the username of the player.')*/
				.addField('-proteams', 'List of pro CS:GO teams.')
				.setFooter('Reply with proper commands. Commands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(help_menu);
				break;
			case 'website':
				message.channel.send('We are still working on our website.');
				break;
			case 'youtube':
				message.channel.send('We are still working on our YouTube Channel');
				break;
			case 'instagram':
				message.channel.send('We are not on Instagram yet.');
				break;
			case 'proteams':
				const pro_teams = new Discord.MessageEmbed()
				.setTitle('List of pro CS:GO teams:')
				.addField('-ast', 'Astralis')
				.addField('-ence', 'Ence')
				.addField('-faze', 'Faze Clan')
				.addField('-fnc', 'fnatic')
				.addField('-g2', 'G2 Esports')
				.addField('-msp', 'Mousesports')
				.addField('-navi', 'Natus Vincere')
				.addField('-nip', 'Ninjas In Pyjamas')
				.addField('-liqd', 'Team Liquid')
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(pro_teams);
				break;
			case 'ast':
				const astralis = new Discord.MessageEmbed()
				.setTitle('Team Astralis')
				.addField('-dupreeh', 'dupreeh')
				.addField('-dev1ce', 'dev1ce')
				.addField('-gla1ve', 'gla1ve')
				.addField('-xyp9x', 'Xyp9x')
				.addField('-magisk', 'Magisk')
				.addField('-jugi', 'JUGi')
				.attachFiles(['D:/discord bot/assets/astralis/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.addField("Official Website", "[Click here](https://astralis.gg)")
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(astralis);	
				break;
			case 'dupreeh':
				var dupreeh_dob = '1993/03/26';
				const dupreeh = new Discord.MessageEmbed()
				.setTitle('dupreeh')
				.addField('Name', 'Peter Rothmann Rasmussen')
				.addField('Age', getAge(dupreeh_dob))
				.addField('Team', 'Astralis')
				.addField('Nationality', 'Denmark')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(dupreeh);
				break;
			case 'gla1ve':
				var gla1ve_dob = '1995/06/07';
				const gla1ve = new Discord.MessageEmbed()
				.setTitle('gla1ve')
				.addField('Name', 'Lukas Egholm Rossander')
				.addField('Age', getAge(gla1ve_dob))
				.addField('Team', 'Astralis')
				.addField('Nationality', 'Denmark')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(gla1ve);
				break;
			case 'jugi':
				var jugi_dob = '1997/04/01';
				const jugi = new Discord.MessageEmbed()
				.setTitle('JUGi')
				.addField('Name', 'Jakob Rask Hansen')
				.addField('Age', getAge(jugi_dob))
				.addField('Team', 'Astralis')
				.addField('Nationality', 'Denmark')
				.addField('Role', 'AWPer')
				.setColor(0xF1C40F);
				message.channel.send(jugi);
				break;
			case 'magisk':
				var magisk_dob = '1998/03/05';
				const magisk = new Discord.MessageEmbed()
				.setTitle('Magisk')
				.addField('Name', 'Emil Hoffmann Reif')
				.addField('Age', getAge(magisk_dob))
				.addField('Team', 'Astralis')
				.addField('Nationality', 'Denmark')
				.addField('Role', 'Rifler(lurker)\nIn-game Leader')
				.setColor(0xF1C40F);
				message.channel.send(magisk);
				break;
			case 'xyp9x':
				var xyp9x_dob = '1995/09/11';
				const xyp9x = new Discord.MessageEmbed()
				.setTitle('Xyp9x')
				.addField('Name', 'Andreas Højsleth')
				.addField('Age', getAge(xyp9x_dob))
				.addField('Team', 'Astralis')
				.addField('Nationality', 'Denmark')
				.addField('Role', 'Rifler(support)')
				.addField('Nicknames', 'Clutch Minister')
				.setColor(0xF1C40F);
				message.channel.send(xyp9x);
				break;
			case 'dev1ce':
				var dev1ce_dob = '1995/09/08';
				const dev1ce = new Discord.MessageEmbed()
				.setTitle('dev1ce')
				.addField('Name', 'Nicolai Hvilshøj Reedtz')
				.addField('Age', getAge(dev1ce_dob))
				.addField('Team', 'Astralis')
				.addField('Nationality', 'Denmark')
				.addField('Role', 'AWPer')
				.setColor(0xF1C40F);
				message.channel.send(dev1ce);
				break;
			case 'ence':
				const ence = new Discord.MessageEmbed()
				.setTitle('Team Ence')
				.addField('-sunny', 'suNny')
				.addField('-aerial', 'Aerial')
				.addField('-allu', 'allu')
				.addField('-sergej', 'sergej')
				.addField('-xseven', 'xseveN')
				.addField('-jamppi', 'Jamppi')
				.addField("Official Website", "[Click here](https://www.ence.gg/)")
				.attachFiles(['D:/discord bot/assets/ence/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(ence);
				break;
			case 'jamppi':
				var dupreeh_dob = '2001/07/22';
				const jamppi = new Discord.MessageEmbed()
				.setTitle('Jamppi')
				.addField('Name', 'Elias Olkkonen')
				.addField('Age', getAge(jamppi_dob))
				.addField('Team', 'Ence')
				.addField('Nationality', 'Finland')
				.addField('Role', 'AWPer')
				.setColor(0xF1C40F);
				message.channel.send(jamppi);
				break;
			case 'sunny':
				var sunny_dob = '1994/08/24';
				const sunny = new Discord.MessageEmbed()
				.setTitle('suNny')
				.addField('Name', 'Miikka Kemppi')
				.addField('Age', getAge(sunny_dob))
				.addField('Team', 'Ence')
				.addField('Nationality', 'Finland')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(sunny);
				break;
			case 'xseven':
				var xseven_dob = '1994/08/14';
				const xseven = new Discord.MessageEmbed()
				.setTitle('xseveN')
				.addField('Name', 'Sami Laasanen')
				.addField('Age', getAge(xseven_dob))
				.addField('Team', 'Ence')
				.addField('Nationality', 'Finland')
				.addField('Role', 'Rifler(support')
				.setColor(0xF1C40F);
				message.channel.send(xseven);
				break;
			case 'aerial':
				var aerial_dob = '1993/06/11';
				const aerial = new Discord.MessageEmbed()
				.setTitle('Aerial')
				.addField('Name', 'Jani Jussila')
				.addField('Age', getAge(aerial_dob))
				.addField('Team', 'Ence')
				.addField('Nationality', 'Finland')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(aerial);
				break;
			case 'sergej':
				var sergej_dob = '2002/03/01';
				const sergej = new Discord.MessageEmbed()
				.setTitle('sergej')
				.addField('Name', 'Jere Salo')
				.addField('Age', getAge(sergej_dob))
				.addField('Team', 'Ence')
				.addField('Nationality', 'Finland')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(sergej);
				break;
			case 'allu':
				var allu_dob = '1992/05/20';
				const allu = new Discord.MessageEmbed()
				.setTitle('allu')
				.addField('Name', 'Aleksi Jalli')
				.addField('Age', getAge(allu_dob))
				.addField('Team', 'Ence')
				.addField('Nationality', 'Finland')
				.addField('Role', 'AWPer')
				.setColor(0xF1C40F);
				message.channel.send(allu);
				break;
			case 'faze':
				const faze = new Discord.MessageEmbed()
				.setTitle('Team Faze Clan')
				.addField('-rain', 'rain')
				.addField('-niko', 'NiKo')
				.addField('-coldzera', 'coldzera')
				.addField('-broky', 'broky')
				.addField('-olof', 'olofmeister')
				.addField("Official Website", "[Click here](https://fazeclan.com/)")
				.attachFiles(['D:/discord bot/assets/fazeclan/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(faze);	
				break;
				case 'olof':
					var olof_dob = '1992/01/31';
					const olof = new Discord.MessageEmbed()
					.setTitle('olofmeister')
					.addField('Name', 'Olof Kajbjer Gustafsson')
					.addField('Age', getAge(olof_dob))
					.addField('Team', 'Faze Clan')
					.addField('Nationality', 'Sweden')
					.addField('Role', 'Rifler(lurker)')
					.addField('Nickname', 'boostmeister')
					.setColor(0xF1C40F);
					message.channel.send(olof);
					break;
				case 'broky':
					var broky_dob = '2001/02/14';
					const broky = new Discord.MessageEmbed()
					.setTitle('broky')
					.addField('Name', 'Helvijs Saukants')
					.addField('Age', getAge(broky_dob))
					.addField('Team', 'Faze Clan')
					.addField('Nationality', 'Latvia')
					.addField('Role', 'Rifler\nAWPer')
					.setColor(0xF1C40F);
					message.channel.send(broky);
					break;
				case 'coldzera':
					var coldzera_dob = '1994/10/31';
					const coldzera = new Discord.MessageEmbed()
					.setTitle('coldzera')
					.addField('Name', 'Marcelo Augusto David')
					.addField('Age', getAge(coldzera_dob))
					.addField('Team', 'Faze Clan')
					.addField('Nationality', 'Brazil')
					.addField('Role', 'Rifler\nIn-game Leader')
					.setColor(0xF1C40F);
					message.channel.send(coldzera);
					break;
				case 'niko':
					var niko_dob = '1997/02/16';
					const niko = new Discord.MessageEmbed()
					.setTitle('NiKo')
					.addField('Name', 'Nikola Kovač')
					.addField('Age', getAge(niko_dob))
					.addField('Team', 'Faze Clan')
					.addField('Nationality', 'Bosnia and Herzegovina')
					.addField('Role', 'In-game Leader\nRifler')
					.setColor(0xF1C40F);
					message.channel.send(niko);
					break;
				case 'rain':
					var rain_dob = '1994/08/27';
					const rain = new Discord.MessageEmbed()
					.setTitle('rain')
					.addField('Name', 'Håvard Nygaard')
					.addField('Age', getAge(rain_dob))
					.addField('Team', 'Faze Clan')
					.addField('Nationality', 'Norway')
					.addField('Role', 'Rifler')
					.setColor(0xF1C40F);
					message.channel.send(rain);
					break;
			case 'fnc':
				const fnatic = new Discord.MessageEmbed()
				.setTitle('Team fnatic')
				.addField('-krimz', 'KRIMZ')
				.addField('-jw', 'JW')
				.addField('-brollan', 'Brollan')
				.addField('-flusha', 'flusha')
				.addField('-golden', 'Golden')
				.addField("Official Website", "[Click here](https://www.fnatic.com/)")
				.attachFiles(['D:/discord bot/assets/fnatic/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(fnatic);	
				break;
			case 'golden':
				var golden_dob = '1994/02/02';
				const golden = new Discord.MessageEmbed()
				.setTitle('Golden')
				.addField('Name', 'Maikil Kunda Selim')
				.addField('Age', getAge(golden_dob))
				.addField('Team', 'fnatic')
				.addField('Nationality', 'Sweden\nIraq')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(golden);
				break;
			case 'flusha':
				var flusha_dob = '1993/08/12';
				const flusha = new Discord.MessageEmbed()
				.setTitle('flusha')
				.addField('Name', 'Robin Rönnquist')
				.addField('Age', getAge(flusha_dob))
				.addField('Team', 'fnatic')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(flusha);
				break;
			case 'brollan':
				var brollan_dob = '2002/06/17';
				const brollan = new Discord.MessageEmbed()
				.setTitle('Brollan')
				.addField('Name', 'Ludvig Brolin')
				.addField('Age', getAge(brollan_dob))
				.addField('Team', 'fnatic')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(brollan);
				break;
			case 'jw':
				var jw_dob = '1995/02/23';
				const jw = new Discord.MessageEmbed()
				.setTitle('JW')
				.addField('Name', 'Jesper Wecksell')
				.addField('Age', getAge(jw_dob))
				.addField('Team', 'fnatic')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'Rifler\nAWPer')
				.setColor(0xF1C40F);
				message.channel.send(jw);
				break;
			case 'krimz':
				var krimz_dob = '1994/04/25';
				const krimz = new Discord.MessageEmbed()
				.setTitle('KRIMZ')
				.addField('Name', 'Lars Freddy Johansson')
				.addField('Age', getAge(krimz_dob))
				.addField('Team', 'fnatic')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'Rifler(support)')
				.setColor(0xF1C40F);
				message.channel.send(krimz);
				break;
			case 'g2':
				const g2esports = new Discord.MessageEmbed()
				.setTitle('Team G2 Esports')
				.addField('-kennys', 'kennyS')
				.addField('-jackz', 'JaCkz')
				.addField('-amanek', 'AmaNEk')
				.addField('-nexa', 'nexa')
				.addField('-hunter', 'huNter-')
				.addField("Official Website", "[Click here](https://g2esports.com/)")
				.attachFiles(['D:/discord bot/assets/g2/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(g2esports);	
				break;
			case 'hunter':
				var hunter_dob = '1996/01/03';
				const hunter = new Discord.MessageEmbed()
				.setTitle('huNter')
				.addField('Name', 'Nemanja Kovač')
				.addField('Age', getAge(hunter_dob))
				.addField('Team', 'G2 Esports')
				.addField('Nationality', 'Bosnia and Herzegovina\nSerbia')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(hunter);
				break;
			case 'nexa':
				var nexa_dob = '1997/04/25';
				const nexa = new Discord.MessageEmbed()
				.setTitle('nexa')
				.addField('Name', 'Nemanja Isaković')
				.addField('Age', getAge(nexa_dob))
				.addField('Team', 'G2 Esports')
				.addField('Nationality', 'Serbia')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(nexa);
				break;
			case 'amanek':
				var amanek_dob = '1993/08/24';
				const amanek = new Discord.MessageEmbed()
				.setTitle('AmaNEk')
				.addField('Name', 'François Delaunay')
				.addField('Age', getAge(amanek_dob))
				.addField('Team', 'G2 Esports')
				.addField('Nationality', 'France')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(amanek);
				break;
			case 'jackz':
				var jackz_dob = '1992/07/07';
				const jackz = new Discord.MessageEmbed()
				.setTitle('JaCkz')
				.addField('Name', 'Audric Jug')
				.addField('Age', getAge(jackz_dob))
				.addField('Team', 'G2 Esports')
				.addField('Nationality', 'France')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(jackz);
				break;
			case 'kennys':
				var kennys_dob = '1995/05/19';
				const kennys = new Discord.MessageEmbed()
				.setTitle('kennyS')
				.addField('Name', 'Kenny Schrub')
				.addField('Age', getAge(kennys_dob))
				.addField('Team', 'G2 Esports')
				.addField('Nationality', 'France')
				.addField('Role', 'AWPer')
				.setColor(0xF1C40F);
				message.channel.send(kennys);
				break;
			case 'msp':
				const mouse = new Discord.MessageEmbed()
				.setTitle('Team Mousesports')
				.addField('-chrisj', 'chrisJ')
				.addField('-ropz', 'ropz')
				.addField('-karrigan', 'karrigan')
				.addField('-woxic', 'woxic')
				.addField('-frozen', 'frozen')
				.addField("Official Website", "[Click here](http://www.mousesports.com/)")
				.attachFiles(['D:/discord bot/assets/mousesports/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(mouse);	
				break;
			case 'frozen':
				var frozen_dob = '2002/07/18';
				const frozen = new Discord.MessageEmbed()
				.setTitle('frozen')
				.addField('Name', 'David Čerňanský')
				.addField('Age', getAge(frozen_dob))
				.addField('Team', 'mousesports')
				.addField('Nationality', 'Slovakia')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(frozen);
				break;
			case 'woxic':
				var woxic_dob = '1998/09/02';
				const woxic = new Discord.MessageEmbed()
				.setTitle('woxic')
				.addField('Name', 'Özgür Eker')
				.addField('Age', getAge(woxic_dob))
				.addField('Team', 'mousesports')
				.addField('Nationality', 'Turkey')
				.addField('Role', 'AWPer\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(woxic);
				break;
			case 'karrigan':
				var karrigan_dob = '1990/04/14';
				const karrigan = new Discord.MessageEmbed()
				.setTitle('karrigan')
				.addField('Name', 'Finn Andersen')
				.addField('Age', getAge(karrigan_dob))
				.addField('Team', 'mousesports')
				.addField('Nationality', 'Denmark\nFrance')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(karrigan);
				break;
			case 'ropz':
				var ropz_dob = '1999/12/02';
				const ropz = new Discord.MessageEmbed()
				.setTitle('ropz')
				.addField('Name', 'Robin Kool')
				.addField('Age', getAge(ropz_dob))
				.addField('Team', 'mousesports')
				.addField('Nationality', 'Estonia')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(ropz);
				break;
			case 'chrisj':
				var chrisj_dob = '1990/05/25';
				const chrisj = new Discord.MessageEmbed()
				.setTitle('chrisJ')
				.addField('Name', 'Christiaan Willem George de Jong')
				.addField('Age', getAge(chrisj_dob))
				.addField('Team', 'mousesports')
				.addField('Nationality', 'Netherlands')
				.addField('Role', 'Rifler\nAWPer')
				.setColor(0xF1C40F);
				message.channel.send(chrisj);
				break;
			case 'navi':
				const navi = new Discord.MessageEmbed()
				.setTitle('Team Natus Vincere')
				.addField('-flamie', 'flamie')
				.addField('-s1mple', 's1mple')
				.addField('-electronic', 'electronic')
				.addField('-boombl4', 'Boombl4')
				.addField('-perfecto', 'Perfecto')
				.attachFiles(['D:/discord bot/assets/navi/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.addField("Official Website", "[Click here](https://navi.gg/en/)")
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(navi);	
				break;
			case 'perfecto':
				var perfecto_dob = '199/11/24';
				const perfecto = new Discord.MessageEmbed()
				.setTitle('Perfecto')
				.addField('Name', 'Ilya Zalutskiy')
				.addField('Age', getAge(perfecto_dob))
				.addField('Team', 'Natus Vincere')
				.addField('Nationality', 'Russia\nUkraine')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(perfecto);
				break;
			case 'boombl4':
				var boombl4_dob = '1998/12/20';
				const boombl4 = new Discord.MessageEmbed()
				.setTitle('Boombl4')
				.addField('Name', 'Kirill Mikhailov')
				.addField('Age', getAge(boombl4_dob))
				.addField('Team', 'Natus Vincere')
				.addField('Nationality', 'Russia')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(boombl4);
				break;
			case 'electronic':
				var electronic_dob = '1998/09/02';
				const electronic = new Discord.MessageEmbed()
				.setTitle('electronic')
				.addField('Name', 'Denis Sharipov')
				.addField('Age', getAge(electronic_dob))
				.addField('Team', 'Natus Vincere')
				.addField('Nationality', 'Russia')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(electronic);
				break;
			case 's1mple':
				var s1mple_dob = '1997/10/02';
				const s1mple = new Discord.MessageEmbed()
				.setTitle('s1mple')
				.addField('Name', 'Oleksandr Olehovych Kostyliev')
				.addField('Age', getAge(s1mple_dob))
				.addField('Team', 'Natus Vincere')
				.addField('Nationality', 'Ukraine')
				.addField('Role', 'AWPer\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(s1mple);
				break;
			case 'flamie':
				var flamie_dob = '1997/04/05';
				const flamie = new Discord.MessageEmbed()
				.setTitle('flamie')
				.addField('Name', 'Egor Vasilev')
				.addField('Age', getAge(flamie_dob))
				.addField('Team', 'Natus Vincere')
				.addField('Nationality', 'Russia')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(flamie);
				break;
			case 'nip':
				const nip = new Discord.MessageEmbed()
				.setTitle('Team Ninjas In Pyjamas')
				.addField('-rez', 'REZ')
				.addField('-plopski', 'Plopski')
				.addField('-twist', 'twist')
				.addField('-nawwk', 'nawwk')
				.addField('-hampus', 'hampus')
				.addField('-lekr0', 'Lekr0')
				.attachFiles(['D:/discord bot/assets/nip/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.addField("Official Website", "[Click here](https://nip.gl/)")
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(nip);	
				break;
			case 'lekr0':
				var lekr0_dob = '1993/07/02';
				const lekr0 = new Discord.MessageEmbed()
				.setTitle('Lekr0')
				.addField('Name', 'Jonas Olofsson')
				.addField('Age', getAge(lekr0_dob))
				.addField('Team', 'Ninjas In Pyjamas')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(lekr0);
				break;
			case 'hampus':
				var hunter_dob = '1998/11/26';
				const hampus = new Discord.MessageEmbed()
				.setTitle('hampus')
				.addField('Name', 'Hampus Poser')
				.addField('Age', getAge(hampus_dob))
				.addField('Team', 'Ninjas In Pyjamas')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(hampus);
				break;
			case 'nawwk':
				var nawwk_dob = '1997/10/30';
				const nawwk = new Discord.MessageEmbed()
				.setTitle('nawwk')
				.addField('Name', 'Tim Jonasson')
				.addField('Age', getAge(nawwk_dob))
				.addField('Team', 'Ninjas In Pyjamas')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'AWPer\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(nawwk);
				break;
			case 'twist':
				var twist_dob = '1994/12/12';
				const twist = new Discord.MessageEmbed()
				.setTitle('twist')
				.addField('Name', 'Simon Eliasson')
				.addField('Age', getAge(twist_dob))
				.addField('Team', 'Ninjas In Pyjamas')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'AWPer\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(twist);
				break;
			case 'plopski':
				var plopski_dob = '2002/05/14';
				const plopski = new Discord.MessageEmbed()
				.setTitle('Plopski')
				.addField('Name', 'Nicolas Gonzalez Zamora')
				.addField('Age', getAge(plopski_dob))
				.addField('Team', 'Ninjas In Pyjamas')
				.addField('Nationality', 'Sweden\nSpain')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(plopski);
				break;
			case 'rez':
				var rez_dob = '1998/01/11';
				const rez = new Discord.MessageEmbed()
				.setTitle('REZ')
				.addField('Name', 'Fredrick Sterner')
				.addField('Age', getAge(rez_dob))
				.addField('Team', 'Ninjas In Pyjamas')
				.addField('Nationality', 'Sweden')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(rez);
				break;
			case 'liqd':
				const liquid = new Discord.MessageEmbed()
				.setTitle('Team Liquid')
				.addField('-nitr0', 'nitr0')
				.addField('-elige', 'EliGE')
				.addField('-twistzz', 'Twistzz')
				.addField('-naf', 'NAF')
				.addField('-stewie2k', 'Stewie2K')
				.attachFiles(['D:/discord bot/assets/liquid/logo/logo.png'])
				.setThumbnail('attachment://logo.png')
				.addField("Official Website", "[Click here](https://www.teamliquid.com/)")
				.setFooter('Reply with an exclamation mark(!) prefixing every command.\nCommands are case sensitive.')
				.setColor(0xF1C40F);
				message.channel.send(liquid);	
				break;
			case 'stewie2k':
				var stewie2k_dob = '1998/01/07';
				const stewie2k = new Discord.MessageEmbed()
				.setTitle('Stewie2K')
				.addField('Name', 'Jacky Yip')
				.addField('Age', getAge(stewie2k_dob))
				.addField('Team', 'Team Liquid')
				.addField('Nationality', 'United States')
				.addField('Role', 'In-game Leader\nRifler')
				.setColor(0xF1C40F);
				message.channel.send(stewie2k);
				break;
			case 'naf':
				var naf_dob = '1997/11/24';
				const naf = new Discord.MessageEmbed()
				.setTitle('NAF')
				.addField('Name', 'Keith Marković')
				.addField('Age', getAge(naf_dob))
				.addField('Team', 'Team Liquid')
				.addField('Nationality', 'Canada')
				.addField('Role', 'Rifler\nAWPer')
				.setColor(0xF1C40F);
				message.channel.send(naf);
				break;
			case 'twistzz':
				var twistzz_dob = '1999/11/14';
				const twistzz = new Discord.MessageEmbed()
				.setTitle('Twistzz')
				.addField('Name', 'Russel David Van Dulken')
				.addField('Age', getAge(twistzz_dob))
				.addField('Team', 'Team Liquid')
				.addField('Nationality', 'Canada')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(twistzz);
				break;
			case 'elige':
				var elige_dob = '1997/07/16';
				const elige = new Discord.MessageEmbed()
				.setTitle('EliGE')
				.addField('Name', 'Jonathan Jablonowski')
				.addField('Age', getAge(elige_dob))
				.addField('Team', 'Team Liquid')
				.addField('Nationality', 'United States')
				.addField('Role', 'Rifler')
				.setColor(0xF1C40F);
				message.channel.send(elige);
				break;
			case 'nitr0':
				var nitr0_dob = '1995/08/16';
				const nitr0 = new Discord.MessageEmbed()
				.setTitle('nitr0')
				.addField('Name', 'Nicholas Cannella')
				.addField('Age', getAge(nitr0_dob))
				.addField('Team', 'Team Liquid')
				.addField('Nationality', 'United States')
				.addField('Role', 'Rifler\nAWPer')
				.setColor(0xF1C40F);
				message.channel.send(kennys);
				break;
		}
	}
});
bot.login(token);