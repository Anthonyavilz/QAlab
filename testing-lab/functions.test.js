const {
    returnTwo,
    greeting,
    add
} = require('./functions')

test('returnTwo function', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting function', () => {
    expect(greeting('James')).toBe('Hello, James')
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('add function', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})