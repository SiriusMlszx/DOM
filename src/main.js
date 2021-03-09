// dom.style(test, { color: 'red', border: '1px solid red' })
// fn = () => {
//     console.log('dian le')
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

// const textDiv = dom.find('#test')[0]
// console.log(textDiv)
// console.log(dom.find('.red', textDiv))

// console.log(dom.prev(e2))
// dom.each(dom.children(travel), (n) => dom.style(n, 'color', 'red'))
// console.log(dom.index(t2))

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素