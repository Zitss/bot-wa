
let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`
[  🎰 | SLOTS ]
-----------------\n🍋 : 🍌 : 🍍
${pickRandom(global.sotoy)} 
-----------------\n🍋 : 🍌 : 🍍
[  🎰 | SLOTS ]

Keterangan : Jika anda Mendapatkan 3Buah anda Menang..
Contoh : 🍌 : 🍌 : 🍌<=====
  `, m)
}
handler.help = ['slot']
handler.tags = ['fun']
handler.command = /^(slot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}



global.sotoy = [
		'🍊 : 🍒 : 🍐   => You Lose', 
		'🍒 : 🔔 : 🍊   => You Lose',
		'🍇 : 🍒 : 🖕   => You Lose',
		'🍊 : 🍋 : 🔔   => You Lose',//by Fadhlur Owner of NotBot
		'🔔 : 🍒 : 🍐   => You Lose',
		'🔔 : 🍒 : 🍊   => You Lose',
    '🍊 : 🍋 : 🔔   => You Lose',		
		'🍐 : 🍒 : 🍋   => You Lose',
		'🍐 : 🍐 : 🍐   => You Win',
		'🍊 : 🍒 : 🍒   => You Lose',
		'🔔 : 🔔 : 🍇   => You Lose',
		'🍌 : 🍒 : 🔔   => You Lose',
		'🍐 : 🔔 : 🔔   => You Lose',
		'🍊 : 🍋 : 🍒   => You Lose',
		'🍋 : 🍋 : 🍌   => You Lose',
		'🔔 : 🔔 : 🍇   => You Lose',
		'🔔 : 🍐 : 🍇   => You Lose',
		'🔔 : 🔔 : 🔔   => You Win',
		'🍒 : 🍒 : 🍒   => You Win',
		'🍌 : 🍌 : 🍌   => You Win'
		]
