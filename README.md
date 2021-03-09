# 自己封装的DOM库

## 使用方法

```html
<script src="dom.js"></script>
```

## API介绍

### 创建节点

```js
window.dom.create(tagName)
```

### 在node1节点后面添加node2节点

```js
window.dom.after(node1, node2)
```

### 在node1节点前面添加node2节点

```js
window.dom.before(node1, node2)
```

### 新增孩子

```js
window.dom.append(parent, child)
```

### 新增父代

```js
window.dom.wrap(child, parent)
```

### 删除节点

```js
window.dom.remove(node)
```

### 删除后代

```js
window.dom.empty(parent)
```

### 修改属性（传value），查看属性（不传value）

```js
window.dom.attr(node, name, value)
```

### 修改文本（传string），查看文本（不传string）

```js
window.dom.text(node, string)
```

### 修改html（传string），查看html（不传string）

```js
window.dom.html(node, string)
```

### 修改样式 

```js
window.dom.style(node, name, value)
```

### 添加类 

```js
window.dom.add(node, className)
```

### 删除类

```js
window.dom.remove(node, className)
```

### 查看是否包含该类 

```js
window.dom.contains(node, className)
```

### 为node添加事件 

```js
window.dom.on(node, eventName, fn)
```

### 删除node的事件

```js
window.dom.off(node, name, value)
```

### 获取标签或者标签们

```js
window.dom.find(selector, scope)
```

### 获取节点的爸爸 

```js
window.dom.parent(node)
```

### 获取节点的子元素

```js
window.dom.children(node)
```

### 获取兄弟姐妹元素 

```js
window.dom.siblings(node)
```

### 获取这个节点的下一个弟弟节点

```js
window.dom.next(node)
```

### 获取这个节点的上一个弟弟节点

```js
window.dom.prev(node)
```

### 用于遍历所有节点，并做fn操作

```js
window.dom.each(nodeList, fn)
```

### 用于获取node排行老几 

```js
window.dom.index(node)
```