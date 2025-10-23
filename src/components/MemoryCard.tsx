/**
 * 记忆卡片展示组件
 * 使用 Protocol 模板的设计风格
 */

import type { MemoryCardData } from '@/types/memory-card'
import { Tag } from '@/components/Tag'

interface MemoryCardProps {
  data: MemoryCardData
}

export function MemoryCard({ data }: MemoryCardProps) {
  return (
    <div className="space-y-8">
      {/* 单词标题和音标 */}
      <div className="border-b border-zinc-900/5 pb-6 dark:border-white/5">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
          {data.word}
        </h1>
        {data.phonetic && (
          <p className="mt-2 text-lg text-emerald-600 dark:text-emerald-400">
            {data.phonetic}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2">
          <Tag color="emerald">{data.languageCategory.toUpperCase()}</Tag>
          {data.cached && (
            <Tag color="zinc">已缓存</Tag>
          )}
        </div>
      </div>

      {/* 例句 */}
      {data.examples && data.examples.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            例句
          </h2>
          <div className="mt-4 space-y-4">
            {data.examples.map((example, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-900/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50"
              >
                <p className="text-base font-medium text-zinc-900 dark:text-white">
                  {example.sentence}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {example.translation}
                </p>
                {example.usage && (
                  <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                    💡 {example.usage}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 词组搭配 */}
      {data.phrases && data.phrases.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            词组搭配
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {data.phrases.map((phrase, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-900/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-800"
              >
                <p className="font-medium text-zinc-900 dark:text-white">
                  {phrase.phrase}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {phrase.translation}
                </p>
                {phrase.usage && (
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                    {phrase.usage}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 助记技巧 */}
      {data.mnemonics && (
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            助记技巧
          </h2>
          <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-50 p-4 dark:bg-emerald-950/30">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {data.mnemonics}
            </p>
          </div>
        </div>
      )}

      {/* 词根词缀 */}
      {data.etymology && (
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            词根词缀分析
          </h2>
          <div className="mt-4 rounded-lg border border-zinc-900/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {data.etymology}
            </p>
          </div>
        </div>
      )}

      {/* 同义词辨析 */}
      {data.synonyms && data.synonyms.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            同义词辨析
          </h2>
          <div className="mt-4 space-y-3">
            {data.synonyms.map((synonym, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-zinc-900/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-800"
              >
                <span className="font-mono text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {synonym.word}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  —
                </span>
                <p className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {synonym.difference}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 使用场景 */}
      {data.usageScenes && data.usageScenes.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            使用场景
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.usageScenes.map((scene, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {scene}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

