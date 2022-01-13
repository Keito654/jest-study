const { TestWatcher } = require("jest");

const fetchData = (category = 'fruit') =>
  category === 'fruit'
    ? Promise.resolve('lemon')
    : Promise.reject(new Error('not exist'));

it('rejects with fish', () => {
  return expect(fetchData('fish')).rejects.toThrow('not exist');
  expect("nnn").toBe(())

});