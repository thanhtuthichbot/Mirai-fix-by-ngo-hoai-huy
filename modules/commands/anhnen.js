﻿module.exports.config = {
	name: "wallpaper",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Gợi ý cho bạn ảnh nền",
	commandCategory: "random-img",
	usages: "wallpaper",
	cooldowns: 6
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.nekos.dev/api/v3/images/sfw/img/wallpaper/').then(res => {
	let ext = res.data.data.response.url.substring(res.data.data.response.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh nền anime siu cute~~~`,
						attachment: fs.createReadStream(__dirname + `/cache/wall.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wall.${ext}`), event.messageID);
				};
				request(res.data.data.response.url).pipe(fs.createWriteStream(__dirname + `/cache/wall.${ext}`)).on("close", callback);
			})
}