import { toolColors } from "@/lib/constants"

interface ToolBadgeProps {
  tool: string
  variant?: "default" | "bordered"
  className?: string
}

export function ToolBadge({ tool, variant = "default", className = "" }: ToolBadgeProps) {
  const baseStyle = toolColors[tool] || "bg-gray-500/20 text-gray-300 border-gray-500/30"

  if (variant === "bordered") {
    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${baseStyle} ${className}`}
      >
        {tool}
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${baseStyle} ${className}`}>{tool}</span>
  )
}
