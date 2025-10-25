/**
 * 记忆卡片骨架屏组件
 * 在数据加载时显示，与 MemoryCard 结构一致
 */

export function MemoryCardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* 单词标题和音标占位符 */}
      <div className="border-b border-zinc-900/5 pb-6 dark:border-white/5">
        <div className="h-10 w-48 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-2 h-6 w-32 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-3 flex items-center gap-2">
          <div className="h-6 w-12 bg-zinc-200 rounded-full dark:bg-zinc-700" />
          <div className="h-6 w-16 bg-zinc-200 rounded-full dark:bg-zinc-700" />
        </div>
      </div>

      {/* 例句骨架 */}
      <div>
        <div className="h-8 w-24 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-zinc-900/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900/50"
            >
              <div className="h-5 w-full bg-zinc-200 rounded dark:bg-zinc-700" />
              <div className="mt-2 h-4 w-4/5 bg-zinc-200 rounded dark:bg-zinc-700" />
              <div className="mt-2 h-3 w-3/5 bg-zinc-200 rounded dark:bg-zinc-700" />
            </div>
          ))}
        </div>
      </div>

      {/* 词组搭配骨架 */}
      <div>
        <div className="h-8 w-32 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-zinc-900/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-800"
            >
              <div className="h-5 w-32 bg-zinc-200 rounded dark:bg-zinc-700" />
              <div className="mt-2 h-4 w-24 bg-zinc-200 rounded dark:bg-zinc-700" />
            </div>
          ))}
        </div>
      </div>

      {/* 助记技巧骨架 */}
      <div>
        <div className="h-8 w-32 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-200 rounded dark:bg-zinc-700" />
            <div className="h-4 w-5/6 bg-zinc-200 rounded dark:bg-zinc-700" />
            <div className="h-4 w-4/6 bg-zinc-200 rounded dark:bg-zinc-700" />
          </div>
        </div>
      </div>

      {/* 词根词缀骨架 */}
      <div>
        <div className="h-8 w-40 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-4 rounded-lg border border-zinc-900/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-200 rounded dark:bg-zinc-700" />
            <div className="h-4 w-4/5 bg-zinc-200 rounded dark:bg-zinc-700" />
          </div>
        </div>
      </div>

      {/* 同义词辨析骨架 */}
      <div>
        <div className="h-8 w-32 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-zinc-900/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-800"
            >
              <div className="h-4 w-16 bg-zinc-200 rounded dark:bg-zinc-700" />
              <div className="h-4 w-4 bg-zinc-200 rounded dark:bg-zinc-700" />
              <div className="flex-1 h-4 bg-zinc-200 rounded dark:bg-zinc-700" />
            </div>
          ))}
        </div>
      </div>

      {/* 使用场景骨架 */}
      <div>
        <div className="h-8 w-32 bg-zinc-200 rounded dark:bg-zinc-700" />
        <div className="mt-4 flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-7 w-20 bg-zinc-200 rounded-full dark:bg-zinc-700"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

