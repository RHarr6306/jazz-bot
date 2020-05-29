const field = require('../utils/field')

test('adds title field', () => {
    expect(field.addTitle({
        title: 'description'
    })).toBe('**title** - description')
})

test('adds description field', () => {
    expect(field.addDescription({
        description: 'description'
    })).toBe('description')
})

test('adds command field', () => {
    expect(field.addCommand({
        name: '- description'
    })).toBe('`$name` - description')
})
