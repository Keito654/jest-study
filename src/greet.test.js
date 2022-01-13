import greeter, { greet } from './greet';

describe('#capitalize', () => {
  const capitalize = greeter.__get__('capitalize');

  it('return string which the first char is capitalized', () => {
    expect(capitalize('maru')).toBe('Maru');
  });
});

describe('#testing greet function with babel-plugin-rewire', () => {
  beforeAll(() => {
    greeter.__set__({
      capitalize: jest.fn().mockImplementation(() => 'REWIRE'),
    });
  });

  afterAll(() => {
    greeter.__ResetDependency__('capitalize');
  });

  it("return 'Hello REWIRE'", () => {
    expect(greet('rewire')).toBe('Hello REWIRE!');
  });
});
