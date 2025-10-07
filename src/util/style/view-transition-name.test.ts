import { describe, expect, test } from 'bun:test'
import { normalizeViewTransitionName } from './view-transition-name'

describe('viewTransitionName', () => {
  test('should return emtpy string or name of the transition', () => {
    expect(normalizeViewTransitionName(null as any)).toBe('')
    expect(normalizeViewTransitionName('test')).toBe('test')
  })
})
