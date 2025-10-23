/**
 * 记忆卡片相关类型定义
 */

export interface Example {
  sentence: string
  translation: string
  usage?: string
}

export interface Phrase {
  phrase: string
  translation: string
  usage?: string
}

export interface Synonym {
  word: string
  difference: string
}

export interface MemoryCardData {
  word: string
  languageCategory: string
  phonetic?: string
  examples: Example[]
  phrases?: Phrase[]
  mnemonics?: string
  etymology?: string
  synonyms?: Synonym[]
  usageScenes?: string[]
  cached: boolean
}

export interface RateLimitInfo {
  remaining: number
  limit: number
  reset: string
}

export interface MemoryCardResponse {
  success: boolean
  data?: MemoryCardData
  rateLimit?: RateLimitInfo
  error?: string
  code?: string
  message?: string
}

export interface ApiError {
  success: false
  error: string
  code: string
  message?: string
  rateLimit?: RateLimitInfo
}

