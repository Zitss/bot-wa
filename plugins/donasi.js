let handler = async m => m.reply(`
「 Donasi • Pulsa 」
• Axis 083823742094
• Tsel 081226770537

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
