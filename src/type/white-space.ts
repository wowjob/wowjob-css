import type { TGlobalKeyword } from './global-keyword'

export type TWhiteSpace =
  | TGlobalKeyword
  | 'normal'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'wrap'
  | 'collapse'
  | 'nowrap'
  | `${'preserve'} ${'nowrap' | 'wrap'}`
