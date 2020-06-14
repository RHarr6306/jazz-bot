import { addTitle, addDescription, addCommand } from '../utils/field'

test('adds title field', () => {
    expect(addTitle({
        title: 'description'
    })).toBe('**title** - description')
})

test('adds description field', () => {
    expect(addDescription({
        description: 'description'
    })).toBe('description')
})

test('adds command field', () => {
    expect(addCommand({
        name: '- description'
    })).toBe('`$name` - description')
})
