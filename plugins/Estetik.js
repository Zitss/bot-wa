let fetch = require('node-fetch')
let fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
let handler = async function (m, { conn, isPrems, isOwner }) {
let anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=ZTEAM`)
  conn.sendFile(m.chat, anu.result, `meme indo.jpg`, `......`, m)
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^darkjokes/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 1

module.exports = handler