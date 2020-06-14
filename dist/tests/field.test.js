var field = require('../utils/field');
test('adds title field', function () {
    expect(field.addTitle({
        title: 'description'
    })).toBe('**title** - description');
});
test('adds description field', function () {
    expect(field.addDescription({
        description: 'description'
    })).toBe('description');
});
test('adds command field', function () {
    expect(field.addCommand({
        name: '- description'
    })).toBe('`$name` - description');
});
