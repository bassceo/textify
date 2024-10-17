import { expect, test } from 'vitest';
import { computeResult } from './compute';

test('test +', () => {
    const result = computeResult(10,10,'+');
    expect(result).toBe(20);
});

test('test -', () => {
    const result = computeResult(10,10,'-');
    expect(result).toBe(0);
});

test('test *', () => {
    const result = computeResult(10,10,'*');
    expect(result).toBe(100);
});
