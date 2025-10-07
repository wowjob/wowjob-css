import type { TViewTransitionName } from '../../type'

export const normalizeViewTransitionName = (
  viewTransitionName: TViewTransitionName,
): string => {
  return viewTransitionName || ''
}
