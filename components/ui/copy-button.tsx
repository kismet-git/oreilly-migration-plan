"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
  className?: string
  size?: "sm" | "default"
  variant?: "ghost" | "outline" | "default"
}

export function CopyButton({ text, className = "", size = "sm", variant = "ghost" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={`h-6 w-6 p-0 opacity-70 hover:opacity-100 ${className}`}
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
    </Button>
  )
}
