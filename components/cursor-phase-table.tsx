"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Copy } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CursorChallenge {
  challenge: string
  cursorFeature: string
  tier1Prompt: string
  tier2Prompt: string
}

interface CursorPhase {
  id: string
  title: string
  objective: string
  challenges: CursorChallenge[]
}

const cursorPhases: CursorPhase[] = [
  {
    id: "phase1",
    title: "Phase 1: Discovery, Architecture & Planning",
    objective:
      "Achieve a deep understanding of the legacy system and scaffold a robust new architecture in a fraction of the time.",
    challenges: [
      {
        challenge: "Reverse-Engineering Legacy Perl",
        cursorFeature: 'The legacy codebase is a "black box" with minimal documentation, making it risky to migrate.',
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "In @legacy/lib/OReilly/Article.pm, explain the 'publish' subroutine.",
      },
      {
        challenge: "Database Schema Translation",
        cursorFeature: "The legacy SQL schema is denormalized and uses cryptic column names.",
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "Explain this SQL 'CREATE TABLE' statement. (Paste SQL)",
      },
      {
        challenge: "API Endpoint Design",
        cursorFeature: "Planning the GraphQL API structure to serve the new frontend.",
        tier1Prompt: "Generate from Scratch",
        tier2Prompt:
          "Generate a basic GraphQL schema for a 'Book' type with fields for title, author, and publicationDate.",
      },
      {
        challenge: "Documentation Generation",
        cursorFeature: "The migration plan requires clear documentation of legacy logic before it's decommissioned.",
        tier1Prompt: "Inline Edit (⌘Cmd+K)",
        tier2Prompt: "Highlight a function and prompt: Add a comment block explaining this function.",
      },
    ],
  },
  {
    id: "phase2-3",
    title: "Phases 2 & 3: Migration Scripting & Data Transformation",
    objective:
      "Develop a resilient, idempotent, and highly accurate migration script that can handle the complexity of legacy data.",
    challenges: [
      {
        challenge: "Creating a Restartable Script",
        cursorFeature:
          "A large migration can fail midway. The script must be able to pick up where it left off without creating duplicates.",
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "How can I make this script restartable?",
      },
      {
        challenge: "Complex Data Cleaning",
        cursorFeature:
          "Content is full of legacy shortcodes, inline styles, and broken HTML that needs to be parsed and transformed.",
        tier1Prompt: "Inline Edit (⌘Cmd+K)",
        tier2Prompt: "Write a regex to find all [GALLERY] shortcodes in this string.",
      },
      {
        challenge: "Mapping Relational Data",
        cursorFeature:
          "Posts have authors, topics, etc., that need to be re-connected in WordPress after being imported separately.",
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "I have authors and posts. How do I link them in WordPress using the REST API?",
      },
      {
        challenge: "Script Performance Tuning",
        cursorFeature: "The script is too slow, and making thousands of individual API calls is inefficient.",
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "How can I speed up this script?",
      },
    ],
  },
  {
    id: "phase4",
    title: "Phase 4: Headless Frontend Development (Next.js)",
    objective: "Build a pixel-perfect, accessible, and high-performance frontend with maximum velocity.",
    challenges: [
      {
        challenge: "Building Accessible Components",
        cursorFeature: "Ensuring all UI components are WCAG 2.1 AA compliant.",
        tier1Prompt: "Inline Edit (⌘Cmd+K)",
        tier2Prompt: "Make this button component accessible.",
      },
      {
        challenge: "Implementing State Management",
        cursorFeature: "Managing complex global UI state, like user authentication or shopping cart data.",
        tier1Prompt: "Generate from Scratch",
        tier2Prompt: "Set up a simple Zustand store for managing a user's profile.",
      },
      {
        challenge: "Image Optimization",
        cursorFeature: "Properly using Next.js features to ensure images are fast and responsive.",
        tier1Prompt: "Inline Edit (⌘Cmd+K)",
        tier2Prompt: "Convert this 'img' tag to a Next.js 'Image' component.",
      },
    ],
  },
  {
    id: "phase5",
    title: "Phase 5: Testing, QA & Validation",
    objective: "Automate quality assurance to catch bugs early and validate the success of the migration.",
    challenges: [
      {
        challenge: "Mocking API Calls in Tests",
        cursorFeature: "Unit tests for data-driven components need to mock GraphQL API responses.",
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "How do I mock a GraphQL query in a Jest test?",
      },
      {
        challenge: "Visual Regression Testing",
        cursorFeature: "Preventing unintentional UI changes from being deployed.",
        tier1Prompt: "Generate from Scratch",
        tier2Prompt: "Set up a basic Storybook test for this component.",
      },
      {
        challenge: "Content Integrity Validation",
        cursorFeature: "Programmatically verifying that migrated content matches the source content.",
        tier1Prompt: "Codebase Chat (⌘Cmd+L)",
        tier2Prompt: "Write a script to compare two text files.",
      },
    ],
  },
]

export function CursorPhaseTable() {
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(["phase1"]))

  const togglePhase = (phaseId: string) => {
    const newExpanded = new Set(expandedPhases)
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId)
    } else {
      newExpanded.add(phaseId)
    }
    setExpandedPhases(newExpanded)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const getFeatureBadge = (feature: string) => {
    if (feature.includes("Codebase Chat")) {
      return (
        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
          Codebase Chat
        </Badge>
      )
    }
    if (feature.includes("Inline Edit")) {
      return (
        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
          Inline Edit
        </Badge>
      )
    }
    if (feature.includes("Generate")) {
      return (
        <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
          Generate
        </Badge>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      {cursorPhases.map((phase) => (
        <Card key={phase.id} className="border-border/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg font-semibold text-foreground">{phase.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Objective:</span> {phase.objective}
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => togglePhase(phase.id)} className="ml-4 shrink-0">
                {expandedPhases.has(phase.id) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardHeader>

          {expandedPhases.has(phase.id) && (
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-3 font-medium text-sm text-muted-foreground w-1/4">Challenge</th>
                      <th className="text-left p-3 font-medium text-sm text-muted-foreground w-1/4">Cursor Feature</th>
                      <th className="text-left p-3 font-medium text-sm text-muted-foreground w-1/4">
                        Tier 1 Prompt (Beginner)
                      </th>
                      <th className="text-left p-3 font-medium text-sm text-muted-foreground w-1/4">
                        Tier 2 Prompt (Advanced)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {phase.challenges.map((challenge, index) => (
                      <tr key={index} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                        <td className="p-3 align-top">
                          <div className="font-medium text-sm text-foreground mb-1">{challenge.challenge}</div>
                        </td>
                        <td className="p-3 align-top">
                          <div className="text-sm text-muted-foreground">{challenge.cursorFeature}</div>
                        </td>
                        <td className="p-3 align-top">
                          <div className="flex items-start gap-2">
                            {getFeatureBadge(challenge.tier1Prompt)}
                            <div className="text-sm text-muted-foreground">
                              {challenge.tier1Prompt.replace(
                                /^(Codebase Chat|Inline Edit|Generate from Scratch)\s*($$[^)]*$$)?\s*/,
                                "",
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-3 align-top">
                          <div className="relative group">
                            <div className="bg-muted/50 rounded-md p-3 font-mono text-xs text-foreground border border-border/50">
                              {challenge.tier2Prompt}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => copyToClipboard(challenge.tier2Prompt)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}
