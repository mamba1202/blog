function $(v) {
    if (typeof v === 'function') {
        window.onload = v
    } else if (typeof v === 'string') {
        return document.getElementById(v)
    } else if (typeof v === 'object') {
        return v
    }
}

//获取DOM样式
function getStyle(obj, attr) {
    //     if (obj.currentStyle) {
    //         return obj.currentStyle[attr]
    //     } else {
    //         return getComputedStyle(obj)[attr]
    //     }
    // }

    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]

}
alert(getStyle($('div1'), 'height'))
alert(getStyle($('div1'), 'width'))
alert(getStyle($('div1'), 'backgroundColor'))
