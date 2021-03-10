import { colorToThemeColor } from '../src';

describe('General functions', () => {
  test('colorToThemeColor', () => {
    expect(colorToThemeColor('')).toEqual('');
    expect(colorToThemeColor('blue')).toEqual('primary');
    expect(colorToThemeColor('green')).toEqual('success');
    expect(colorToThemeColor('red')).toEqual('danger');
    expect(colorToThemeColor('yellow')).toEqual('warning');
    expect(colorToThemeColor('black')).toEqual('dark');
  });
});
