import { describe, expect, expectTypeOf, it } from 'vitest';
import type { toLower as toLowerLodash } from 'lodash';
import { toLower } from './toLower';

describe('toLower', () => {
  it('should convert whole string to lower case', () => {
    expect(toLower('--Foo-Bar--')).toEqual('--foo-bar--');
    expect(toLower('fooBar')).toEqual('foobar');
    expect(toLower('__FOO_BAR__')).toEqual('__foo_bar__');
  });

  const strings = ['foo bar', 'Foo bar', 'foo Bar', 'Foo Bar', 'FOO BAR', 'fooBar', '--foo-bar--', '__foo_bar__'];

  it('should convert string to upper case while preserving special characters', () => {
    const actual = strings.map(string => toLower(string));
    const expected = ['foo bar', 'foo bar', 'foo bar', 'foo bar', 'foo bar', 'foobar', '--foo-bar--', '__foo_bar__'];
    expect(actual).toEqual(expected);
  });

  it('should handle double-converting strings', () => {
    const actual = strings.map(string => toLower(toLower(string)));
    const expected = strings.map(string => toLower(string));
    expect(actual).toEqual(expected);
  });

  it('should preserve spaces and special characters', () => {
    expect(toLower('HELLO   WORLD')).toBe('hello   world');
    expect(toLower('!@#$HELLO%^&*')).toBe('!@#$hello%^&*');
    expect(toLower('TABS\tAND\nNEWLINES')).toBe('tabs\tand\nnewlines');
  });

  it('should handle unicode characters', () => {
    expect(toLower('CAFÉ')).toBe('café');
    expect(toLower('ÜBER')).toBe('über');
    expect(toLower('SEÑOR')).toBe('señor');
  });

  it('should preserve Latin mathematical operators', () => {
    expect(toLower('\xd7')).toBe('\xd7');
    expect(toLower('\xf7')).toBe('\xf7');
  });

  it('should handle null and undefined', () => {
    expect((toLower as any)(null)).toBe('');
    expect(toLower(undefined)).toBe('');
  });

  it('should handle numbers including special cases', () => {
    expect((toLower as any)(123)).toBe('123');
    expect((toLower as any)(-0)).toBe('-0');
    expect((toLower as any)(0)).toBe('0');
    expect((toLower as any)(Infinity)).toBe('infinity');
    expect((toLower as any)(NaN)).toBe('nan');
  });

  it('should handle arrays', () => {
    expect((toLower as any)([1, 2, 3])).toBe('1,2,3');
    expect((toLower as any)(['a', 'b', 'c'])).toBe('a,b,c');
    expect((toLower as any)([1, 'b', -0])).toBe('1,b,-0');
    expect((toLower as any)([])).toBe('');
  });

  it('should handle nested arrays', () => {
    expect((toLower as any)([1, [2, 3], 4])).toBe('1,2,3,4');
    expect((toLower as any)([[['a']]])).toBe('a');
  });

  it('should handle symbols', () => {
    const sym1 = Symbol('test');
    const sym2 = Symbol('');
    expect((toLower as any)(sym1)).toBe('symbol(test)');
    expect((toLower as any)(sym2)).toBe('symbol()');
    expect((toLower as any)([Symbol('a'), Symbol('b')])).toBe('symbol(a),symbol(b)');
  });

  it('should handle objects', () => {
    const obj = { toString: () => 'custom' };
    expect((toLower as any)(obj)).toBe('custom');
    expect((toLower as any)({})).toBe('[object object]');
  });

  it('should handle mixed types in arrays', () => {
    const sym = Symbol('test');
    expect((toLower as any)([1, 'b', sym, null, undefined])).toBe('1,b,symbol(test),,');
  });

  it('should maintain proper TypeScript types', () => {
    const result1: string = toLower('test');
    const result2: string = (toLower as any)(123);
    const result3: string = (toLower as any)(null);
    const result4: string = toLower(undefined);

    expect(typeof result1).toBe('string');
    expect(typeof result2).toBe('string');
    expect(typeof result3).toBe('string');
    expect(typeof result4).toBe('string');
  });

  it('should handle empty strings', () => {
    expect(toLower('')).toBe('');
  });

  it('should handle whitespace strings', () => {
    expect(toLower(' ')).toBe(' ');
    expect(toLower('\t')).toBe('\t');
    expect(toLower('\n')).toBe('\n');
  });

  it('should match the type of lodash', () => {
    expectTypeOf(toLower).toEqualTypeOf<typeof toLowerLodash>();
  });
});
