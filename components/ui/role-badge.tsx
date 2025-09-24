import { roleColors } from "@/lib/constants"

interface RoleBadgeProps {
  role: string
  className?: string
}

export function RoleBadge({ role, className = "" }: RoleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
        roleColors[role] || "bg-gray-600 text-white"
      } ${className}`}
    >
      {role}
    </span>
  )
}
