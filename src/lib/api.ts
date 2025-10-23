/**
 * API 服务层 - 封装对 api.keykey.cc 的调用
 */

import type { MemoryCardResponse, MemoryCardData } from '@/types/memory-card'

const API_BASE_URL = 'https://api.keykey.cc'

/**
 * 查询单词记忆卡片
 * @param word 单词
 * @param lang 语言代码，默认 'en'
 * @returns 记忆卡片数据或错误信息
 */
export async function getMemoryCard(
  word: string,
  lang: string = 'en'
): Promise<MemoryCardResponse> {
  try {
    const url = `${API_BASE_URL}/api/public/memory-card?word=${encodeURIComponent(word)}&lang=${lang}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // 启用浏览器缓存
      cache: 'default',
    })

    const data: MemoryCardResponse = await response.json()

    // 记录 Rate Limit 信息
    if (data.rateLimit) {
      console.log(
        `[API] Rate Limit: ${data.rateLimit.remaining}/${data.rateLimit.limit} remaining`
      )
    }

    return data
  } catch (error) {
    console.error('[API] 请求失败:', error)
    return {
      success: false,
      error: '网络请求失败，请检查网络连接',
      code: 'NETWORK_ERROR',
    }
  }
}

/**
 * 从 localStorage 获取缓存的记忆卡片
 */
export function getCachedMemoryCard(
  word: string,
  lang: string = 'en'
): MemoryCardData | null {
  if (typeof window === 'undefined') return null

  try {
    const cacheKey = `memory-card-${word.toLowerCase()}-${lang}`
    const cached = localStorage.getItem(cacheKey)

    if (!cached) return null

    const { data, timestamp } = JSON.parse(cached)
    const now = Date.now()
    const cacheAge = now - timestamp

    // 缓存 24 小时
    if (cacheAge < 86400000) {
      console.log(`[Cache] 使用缓存数据: ${word}`)
      return data
    }

    // 缓存过期，删除
    localStorage.removeItem(cacheKey)
    return null
  } catch (error) {
    console.error('[Cache] 读取缓存失败:', error)
    return null
  }
}

/**
 * 将记忆卡片保存到 localStorage
 */
export function setCachedMemoryCard(
  word: string,
  lang: string,
  data: MemoryCardData
): void {
  if (typeof window === 'undefined') return

  try {
    const cacheKey = `memory-card-${word.toLowerCase()}-${lang}`
    const cacheData = {
      data,
      timestamp: Date.now(),
    }
    localStorage.setItem(cacheKey, JSON.stringify(cacheData))
    console.log(`[Cache] 已缓存: ${word}`)
  } catch (error) {
    console.error('[Cache] 保存缓存失败:', error)
  }
}

/**
 * 带缓存的查询函数
 */
export async function getMemoryCardWithCache(
  word: string,
  lang: string = 'en'
): Promise<MemoryCardResponse> {
  // 先尝试从缓存获取
  const cached = getCachedMemoryCard(word, lang)
  if (cached) {
    return {
      success: true,
      data: cached,
    }
  }

  // 缓存未命中，请求 API
  const response = await getMemoryCard(word, lang)

  // 如果成功，保存到缓存
  if (response.success && response.data) {
    setCachedMemoryCard(word, lang, response.data)
  }

  return response
}

