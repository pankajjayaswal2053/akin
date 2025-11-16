import { describe, expect, it } from 'vitest';
import cn from '@/utils/cn';

describe('cn utility', () => {
  it('merges string, array, and object inputs while removing falsy values', () => {
    const result = cn('base', ['active', null], { hidden: false, visible: true }, 0, undefined);
    expect(result).toBe('base active visible');
  });

  it('handles nested arrays recursively', () => {
    const result = cn(['level-one', ['level-two', ['level-three']]]);
    expect(result).toBe('level-one level-two level-three');
  });
});
