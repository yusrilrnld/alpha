const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeks.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeks.xyz': 'apivinz',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "IRENE-BOT" //namabot kalian
global.ownername= "ᴹᴿ᭄Yusril×፝֟͜u×" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/tanboykun" //bebas asal jan hapus
global.github = "https://github.com/yusrilrnld" //bebas
global.email = "defrijudika@gmail.com" //bebas
global.region = "singapore" //bebas
global.ownernomer = "6282252875751" // nomor wa kalian
global.ownernomerr = "+6282252875751" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6282252875751","6281288502273","6282252875751"] //ganti agar fitur owner bisa di gunakan
global.packname = '©IRENE-BOT' //sticker wm ubah
global.author = 'Di Buat Oleh Yusril' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Berhasil Sayang💕~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
