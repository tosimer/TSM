// innerText和textContent的兼容性问题
//获取元素之间的内容
function getInnerText() {
    if (typeof element.innerText === 'string') {
        return element.innerText;
    } else { 
        return element.textContent;
    }
}

//设置元素之间的内容
function setInnerText(element, content) {
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content; 
    }  
}

// 根据id获取元素
function tsm$(id) {
    return document.getElementById(id);
}

// 处理firstElementChild的兼容性
function getFirstElementChild(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild
    }

var node, nodes = parent.childNodes, i = 0;
while (node = nodes[i++]) {
    if (node.nodeType === 1) {
        return node;
    }  
}
return null;
}

// 处理lastElementChild的兼容性
function getLastElementChild(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    }

    var node, nodes = parent.childNodes, i = nodes.length - 1;
    while (node = nodes[i--]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

//注册事件，处理兼容性问题
function addEventListener(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        // 事件处理函数中的this指向window --ie8
        element.attachEvent('on' + eventName, callback);
    } else {
        element['on' + eventName] = callback;
    }  
}
//移除事件，处理兼容性问题
function removeEventListener(element, eventName, callback) {
    if (element.removeEventListener) {
        element.removeEventListener(eventName, callback, false);
    } else if (element.dettachEvent) {
        // 事件处理函数中的this指向window --ie8
        element.dettachEvent('on' + eventName, callback);
    } else {
        element['on' + eventName] = null;
    }  
}

//页面滚动距离兼容性问题ie8 每有pageX和pageY;
function getScroll() {
    return {
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
    }   
}

//获取鼠标在页面上的坐标
function getPage(e) {
    return {
        pageX: e.clientX + getScroll().scrollLeft,
        pageY: e.clientY + getScroll().scrollTop
      }   
}