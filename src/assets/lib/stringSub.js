/*
 * @description 截断超过规定长度的文字
 * @param txt {string} 需要截断的文本
 * @param max {int} 规定最大长度
 * @return string 截断好的文本
 */
var Rxports = function (txt, max) {
        text = txt.trim();
        if (text.replace(/[^\x00-\xff]/g, "00").length > max) {
            var txt = '', count = 0, reg = /[^\x00-\xff]/;
            for (var i = 0; count < max; i++) {
                if (reg.test(text[i])) { count += 2; txt += text[i]; }
                else { count++; txt += text[i]; }
            }
            txt += '...';
        }
        return txt;
}
	
module.exports = Rxports