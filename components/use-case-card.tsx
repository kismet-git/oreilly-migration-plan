"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface UseCaseCardProps {
  title: string
  challenge: string
  cursorFeature: string
  examplePrompt: string
}

export function UseCaseCard({ title, challenge, cursorFeature, examplePrompt }: UseCaseCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(examplePrompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Challenge Section */}
        <div>
          <h3 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">Challenge</h3>
          <p className="text-muted-foreground leading-relaxed">{challenge}</p>
        </div>

        {/* Cursor Feature Section */}
        <div>
          <h3 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">Cursor Feature</h3>
          <p className="text-muted-foreground leading-relaxed">{cursorFeature}</p>
        </div>

        {/* Example Prompt Section */}
        <div>
          <h3 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">Example Prompt</h3>
          <div className="relative">
            <pre className="bg-muted/50 border border-border rounded-lg p-4 text-sm font-mono text-foreground overflow-x-auto whitespace-pre-wrap">
              {examplePrompt}
            </pre>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 bg-transparent"
              onClick={handleCopy}
              title={copied ? "Copied!" : "Copy to clipboard"}
            >
              {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
