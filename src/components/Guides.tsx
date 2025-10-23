import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/quickstart',
    name: '快速开始',
    description: '了解如何快速调用 API 查询单词记忆卡片。',
  },
  {
    href: '/api-reference',
    name: 'API 参考',
    description: '详细的 API 文档，包括请求参数和响应格式。',
  },
  {
    href: '/examples',
    name: '使用示例',
    description: '查看各种编程语言的示例代码和最佳实践。',
  },
  {
    href: '/rate-limits',
    name: '限速规则',
    description: '了解 API 的限速机制和如何管理请求配额。',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
