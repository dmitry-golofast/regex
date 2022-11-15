const { Validator } = require('../index');

test.each([
    ['STEPA', true],
    ['Zhora40', false],
    ['-MissAnna', false],
    ['_OXOTNIK', false],
    ['Lol_', false],
    ['Silver-', false],
    ['Kr5dddddddd555ug', false],
    ['Kr259kr', true],
    ['Mn_-LP', true],
    ['Mn___P', false],
    ['15men', false],
    ['map12Ron', true],
    ['Mn--!-P', false],
    ['sdsdDFg#@gpodsds', false],
])(('Проверка validateUsername'), (obj, exp) => {
    expect(Validator.validateUsername(obj)).toBe(exp);
});