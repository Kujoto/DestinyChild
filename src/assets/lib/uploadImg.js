/*
 * @description 图片上传
 * @param input {string} 上传图片input的id
 * @param result {string} 预览图片div的id
 * @param callback {function} 回调函数，该函数会获得参数formData; ajax 需要type: post,processData: false,contentType: false,dataType: "text",
 * @return void
 */
var Rxports = function (setting){
    var input = document.getElementById(setting.input),
        result = document.getElementById(setting.result),
        callback = setting.callback
    input.onchange = function (){
            var files = this.files,
                formData = new FormData()
            if (files) {
                result.innerHTML = "";
                if (typeof FileReader === 'undefined') {
                    result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
                }
            //上传多个图片
            for (var i = 0; i < files.length; i++) {
                var file = files[i];//每个选中的文件
                //判断是否是图片格式
                if (/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG|BMP)$/.test(file.name) && /image\/\w+/.test(file.type)) {
                    formData.append("FileBase", file)
                    var reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = function (e) {
                        result.innerHTML += '<img src="' + this.result + '" alt=""/>'
                    }
                }else {
                    alert("请确保文件为图像类型")
                    return false
                }
            }
            callback(formData)
        }
    }
}

module.exports = Rxports