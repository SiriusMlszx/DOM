window.dom = {
    class:{}
} // 命名空间风格

dom.create = function (tagName) {
    // 创建节点
    const container = document.createElement("template")
    container.innerHTML = tagName.trim()
    return container.content.firstChild
}

dom.after = function (node, node2) {
    // 在后面加节点
    node.parentNode.insertBefore(node2, node.nextSibling)
}

dom.before = function (node, node2) {
    // 在前面加节点
    node.parentNode.insertBefore(node2, node)
}

dom.append = function (parent, child) {
    // 新增孩子
    parent.appendChild(child)
}

dom.wrap = function (child, parent) {
    // 新增父代
    dom.before(child, parent)
    dom.append(parent, child)
}

dom.remove = function (node) {
    // 删除节点
    node.parentNode.removeChild(node)
    return node
}

dom.empty = function (parent) {
    // 删除后代
    const { childNodes } = parent // const childNodes = parent.childNodes
    const array = []
    let i = 0
    while (i<childNodes.length){
        array.push(dom.remove(childNodes[i]))
    }
    return array
}

dom.attr = function (node, name, value) { // 重载
    // 修改，查看属性
    if (arguments.length === 3) {
        node.setAttribute(name, value)
    } else if (arguments.length === 2) {
        return node.getAttribute(name)
    }
}

dom.text = function (node, string) { // 适配
    // 修改，查看文本内容
    if (arguments.length === 2) {
        if ('innerText' in node) {
            node.innerText = string
        } else {
            node.textContent = string
        }
    } else if (arguments.length === 1) {
        if ('innerText' in node) {
            return node.innerText
        } else {
            return node.textContent
        }
    }
}

dom.html = function (node, string) {
    // 修改，查看html内容
    if (arguments.length === 2) {
        node.innerHTML = string
    } else if (arguments.length === 1) {
        return node.innerHTML
    }
}

dom.style = function (node, name, value) {
    // 修改样式 
    if (arguments.length === 3) {
        // dom.style(div, 'color', 'red')
        node.style[name] = value
    } else if (arguments.length === 2) {
        if (typeof name === 'string') {
            // dom.style(div, 'color')
            return node.style[name]
        }else if (name instanceof Object) {
            // dom.style(div, {color: 'red'}) 
            const object = name
            for (let key in object) {
                node.style[key] = object[key]
            }
        } 
    }
}

dom.class.add = function (node, className) {
    // 添加类
    node.classList.add(className)
}

dom.class.remove = function (node, className) {
    // 删除类
    node.classList.remove(className)
}

dom.class.contains = function (node, className) {
    // 查看是否包含该类
    return node.classList.contains(className)
}

dom.on = function (node, eventName, fn) {
    // 为node添加点击事件
    node.addEventListener(eventName, fn)
}

dom.off = function (node, eventName, fn) {
    // 删除node的点击事件
    node.removeEventListener(eventName, fn)
}

dom.find = function (selector, scope) {
    // 获取标签或者标签们
    return (scope || document).querySelectorAll(selector)
}  

dom.parent = function (node) {
    // 获取节点的爸爸
    return node.parentNode
}

dom.children = function (node) {
    // 获取节点的子元素
    return node.children
}

dom.siblings = function (node) {
    // 获取兄弟姐妹元素
    return Array.from(node.parentNode.children).filter(n=>n!==node)
}

dom.next = function (node) {
    // 获取这个节点的下一个弟弟节点
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
        x = x.nextSibling
    }
    return x
}

dom.prev = function (node) {
    // 获取这个节点的上一个弟弟节点
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
        x = x.previousSibling
    }
    return x
}

dom.each = function (nodeList, fn) {
    // 用于遍历所有节点
    for (let i = 0; i < nodeList.length; i++){
        fn.call(null, nodeList[i])
    }
}

dom.index = function (node) {
    // 用于获取排行老几
    const list = dom.children(node.parentNode)
    let i
    for (i = 0; i < list.length; i++) {
        if (list[i] === node) {
            break
        }
    }
    return i
    
}