/**
 * 单词详情页面 - 动态路由
 */

import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMemoryCard } from '@/lib/api'
import { MemoryCard } from '@/components/MemoryCard'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { Tag } from '@/components/Tag'

interface PageProps {
  params: Promise<{
    word: string
  }>
  searchParams: Promise<{
    lang?: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decodedWord = decodeURIComponent(word)
  
  return {
    title: `${decodedWord} - 单词记忆卡片`,
    description: `查看 ${decodedWord} 的详细记忆卡片，包括例句、词组、助记技巧等。`,
  }
}

export default async function WordPage({ params, searchParams }: PageProps) {
  const { word } = await params
  const { lang = 'en' } = await searchParams
  
  const decodedWord = decodeURIComponent(word)

  // 调用 API 获取数据
  const response = await getMemoryCard(decodedWord, lang)

  // 处理错误情况
  if (!response.success) {
    if (response.code === 'NOT_FOUND') {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              未找到记忆卡片
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              单词 &ldquo;<span className="font-semibold">{decodedWord}</span>&rdquo; 尚未生成记忆卡片
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
              {response.message}
            </p>
            <div className="mt-8">
              <Button href="/" arrow="left">
                返回首页
              </Button>
            </div>
          </div>
        </div>
      )
    }

    if (response.code === 'RATE_LIMIT_EXCEEDED') {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              请求次数已达上限
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              {response.error}
            </p>
            {response.rateLimit && (
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                将在 {new Date(response.rateLimit.reset).toLocaleString('zh-CN')} 重置
              </p>
            )}
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/" variant="outline">
                返回首页
              </Button>
              <Button href="/rate-limits">
                查看限速说明
              </Button>
            </div>
          </div>
        </div>
      )
    }

    // 其他错误
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            加载失败
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {response.error || '发生未知错误'}
          </p>
          <div className="mt-8">
            <Button href="/" arrow="left">
              返回首页
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!response.data) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Rate Limit 信息 */}
      {response.rateLimit && (
        <div className="mb-6 rounded-lg border border-zinc-900/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                今日剩余请求次数：
              </span>
              <Tag color={response.rateLimit.remaining < 50 ? 'rose' : 'emerald'}>
                {`${response.rateLimit.remaining} / ${response.rateLimit.limit}`}
              </Tag>
            </div>
            <Link
              href="/rate-limits"
              className="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              查看说明
            </Link>
          </div>
        </div>
      )}

      {/* 记忆卡片内容 */}
      <MemoryCard data={response.data} />

      {/* 返回首页按钮 */}
      <div className="mt-12 border-t border-zinc-900/5 pt-8 dark:border-white/5">
        <Button href="/" arrow="left" variant="outline">
          返回首页查询更多单词
        </Button>
      </div>
    </div>
  )
}

