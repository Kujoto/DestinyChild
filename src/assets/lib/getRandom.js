/*
 * @description 获得随机数
 * @param min {int} 最小值
 * @param min {int} 最大值
 * @return {int} 随机数
 */
var Rxports = function (min = 0, max = 99) {
    return parseInt(Math.random() * (max - min + 1) + min) 
}
	
module.exports = Rxports



































