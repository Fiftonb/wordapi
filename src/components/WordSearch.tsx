'use client'

/**
 * 单词搜索组件
 * 使用 Protocol 模板的设计风格
 */

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

interface WordSearchProps {
  className?: string
  placeholder?: string
  defaultValue?: string
}

export function WordSearch({
  className = '',
  placeholder = '输入单词，如 hello',
  defaultValue = '',
}: WordSearchProps) {
  const [word, setWord] = useState(defaultValue)
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmedWord = word.trim()
    
    if (!trimmedWord || isSearching) {
      return
    }

    // 设置搜索状态
    setIsSearching(true)

    // 立即跳转到单词详情页（Suspense 会显示骨架屏）
    router.push(`/word/${encodeURIComponent(trimmedWord.toLowerCase())}`)
    
    // 重置状态（页面跳转后会卸载组件，但为了安全起见还是重置）
    setTimeout(() => setIsSearching(false), 100)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder={placeholder}
            className="block w-full rounded-lg border border-zinc-900/10 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-emerald-400"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <Button 
          type="submit" 
          variant="filled"
          disabled={isSearching}
          className={`
            !px-6 !py-3 !rounded-lg !text-base
            transition-all duration-200 ease-in-out
            active:scale-95
            disabled:opacity-70 disabled:cursor-not-allowed
            ${isSearching ? 'animate-pulse' : ''}
          `}
        >
          {isSearching ? (
            <span className="flex items-center gap-2">
              <svg 
                className="animate-spin h-4 w-4" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              查询中...
            </span>
          ) : (
            '查询'
          )}
        </Button>
      </div>
      
      {/* 示例单词 */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-zinc-500 dark:text-zinc-400">试试：</span>
        {['hello', 'world', 'study', 'memory'].map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => {
              setWord(example)
              router.push(`/word/${example}`)
            }}
            className="rounded-md bg-zinc-100 px-2 py-1 text-zinc-700 transition hover:bg-emerald-100 hover:text-emerald-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
          >
            {example}
          </button>
        ))}
      </div>
    </form>
  )
}

