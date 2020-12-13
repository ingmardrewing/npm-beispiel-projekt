const sum = require('./index');

test('add 7 and 3, should return 10', () => {
  expect(sum(7,3)).toBe(10)
})
