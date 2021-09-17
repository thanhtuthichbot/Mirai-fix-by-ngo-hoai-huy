module.exports.config = {
  name: "ghep",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "quên, fix by anh iu của chim",
  description: "Ghép đôi",
  commandCategory: "Giải trí", 
  usages: "ghép", 
  cooldowns: 10,
  dependencies: [] 
};
module.exports.run = async function({ api, event, Users, Currencies }) {
var _0x9adf=["\x61\x78\x69\x6F\x73","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x66\x73\x2D\x65\x78\x74\x72\x61","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61","\x6D\x6F\x6E\x65\x79","\u26A1\uFE0F\x4E\x67\x68\xE8\x6F\x20\x71\x75\xE1\x20\x6E\xEA\x6E\x20\x74\xF4\x69\x20\x6B\x68\xF4\x6E\x67\x20\x62\x69\u1EBF\x74\x20\x67\x68\xE9\x70\x20\x63\x68\x6F\x20\x61\x69\x20\x6E\x68\xE9\x21","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const axios=global[_0x9adf[1]][_0x9adf[0]];const fs=global[_0x9adf[1]][_0x9adf[2]];var data= await Currencies[_0x9adf[4]](event[_0x9adf[3]]);var money=data[_0x9adf[5]];if(money= 0,money> 0){api[_0x9adf[7]](_0x9adf[6])}
        else {
        var _0xee68=["\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72"];var tle=Math[_0xee68[1]](Math[_0xee68[0]]()* 101)

        var _0x8a59=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var namee=( await Users[_0x8a59[2]](event[_0x8a59[1]]))[_0x8a59[0]]

        var _0x2476=["\x74\x68\x72\x65\x61\x64\x49\x44","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F"];let loz= await api[_0x2476[1]](event[_0x2476[0]])
        var _0xe9fa=["\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73"];var emoji=loz[_0xe9fa[0]]
        var _0x9c0a=["\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72"];var id=emoji[Math[_0x9c0a[2]](Math[_0x9c0a[0]]()* emoji[_0x9c0a[1]])]
      
        
      var _0x28f1=["\x6E\x61\x6D\x65","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0x28f1[1]](id))[_0x28f1[0]]

        /*var sex = await data[id].gender;*/
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

var _0xb908=["\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x65\x33\x31\x2E\x67\x6C\x69\x74\x63\x68\x2E\x6D\x65\x2F\x61\x76\x74\x3F\x71\x3D","","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x2F\x63\x61\x63\x68\x65\x2F\x61\x76\x74\x2E\x70\x6E\x67","\x75\x74\x66\x2D\x38","\x66\x72\x6F\x6D","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x73\x65\x6E\x64\x65\x72\x49\x44","\x2F\x63\x61\x63\x68\x65\x2F\x61\x76\x74\x32\x2E\x70\x6E\x67","\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64\x53\x74\x72\x65\x61\x6D","\x70\x75\x73\x68"];let Avatar=( await axios[_0xb908[4]](`${_0xb908[1]}${id}${_0xb908[2]}`,{responseType:_0xb908[3]}))[_0xb908[0]];fs[_0xb908[8]](__dirname+ _0xb908[5],Buffer[_0xb908[7]](Avatar,_0xb908[6]));let Avatar2=( await axios[_0xb908[4]](`${_0xb908[1]}${event[_0xb908[9]]}${_0xb908[2]}`,{responseType:_0xb908[3]}))[_0xb908[0]];fs[_0xb908[8]](__dirname+ _0xb908[10],Buffer[_0xb908[7]](Avatar2,_0xb908[6]));var imglove=[];imglove[_0xb908[12]](fs[_0xb908[11]](__dirname+ _0xb908[5]));imglove[_0xb908[12]](fs[_0xb908[11]](__dirname+ _0xb908[10]))
        var msg = {body: `⚡️Ghép đôi thành công!\n⚡️Tỉ lệ hợp đôi: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
}