export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 120 24" aria-hidden="true" {...props}>
      {/* 图标部分 - 书本/卡片图标 */}
      <path
        className="fill-emerald-400"
        d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
      />
      {/* 文字部分 - WordAPI */}
      <text
        x="24"
        y="16"
        className="fill-zinc-900 dark:fill-white"
        style={{ 
          fontSize: '14px', 
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        WordAPI
      </text>
    </svg>
  )
}
