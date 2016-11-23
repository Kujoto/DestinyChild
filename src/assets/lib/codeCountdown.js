/*
 * @description 获取手机验证码倒计时
 * @param input {string} 按钮；必须是<input>
 * @param seconds {int} 间隔
 * @return void
 */
var Rxports = function (input, seconds) {
        var _input = document.querySelector(input);
        _input.disabled = true
        var t = setInterval(function () {
            _input.value = seconds + "秒"
            seconds--
            if (seconds < 0) {
                _input.value = "重新获取"
                _input.disabled = false
                clearInterval(t)
            }
        }, 1000)
        return true
}
	
module.exports = Rxports



































