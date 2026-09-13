import { cn } from "@/lib/utils"

/**
 * Símbolo da erysdev: um "E" geométrico em barras.
 * Chapado, sem gradiente — o resto do site também não tem.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="4" className="fill-brand" />
      <g fill="#FFFFFF">
        <rect x="9" y="8" width="3.2" height="16" rx="0.6" />
        <rect x="9" y="8" width="14" height="3.2" rx="0.6" />
        <rect x="9" y="14.4" width="9" height="3.2" rx="0.6" />
        <rect x="9" y="20.8" width="14" height="3.2" rx="0.6" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string
  markClassName?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span className="text-[17px] font-extrabold tracking-[-0.04em] text-foreground">
          erys<span className="text-brand">dev</span>
        </span>
      )}
    </span>
  )
}
