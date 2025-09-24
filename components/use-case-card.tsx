"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CopyButton } from "@/components/ui/copy-button"

interface UseCaseCardProps {
  title: string
  challenge: string
  cursorFeature: string
  examplePrompt: string
}

export function UseCaseCard({ title, challenge, cursorFeature, examplePrompt }: UseCaseCardProps) {
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
            <pre className="bg-muted/50 border border-border rounded-lg p-4 text-sm font-mono text-foreground overflow-x-auto whitespace-pre-wrap scrollbar-thin">
              {examplePrompt}
            </pre>
            <CopyButton text={examplePrompt} variant="outline" className="absolute top-2 right-2 bg-transparent" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
