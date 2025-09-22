"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Task {
  id: string
  description: string
  roles: string[]
  tools: string[]
}

interface Phase {
  id: string
  name: string
  description: string
  tasks: Task[]
}

interface PhasedTaskTableProps {
  phases: Phase[]
}

const roleColors: Record<string, string> = {
  "Lead Developer": "bg-purple-600 text-white",
  "UI/UX Designer": "bg-blue-600 text-white",
  "Frontend Developer": "bg-orange-600 text-white",
  "Backend Developer": "bg-green-600 text-white",
  "SEO Strategist": "bg-emerald-600 text-white",
  "Project Lead": "bg-indigo-600 text-white",
  "QA Engineer": "bg-yellow-600 text-black",
  "Content Team": "bg-pink-600 text-white",
  "All Developers": "bg-slate-600 text-white",
  "Entire Team": "bg-gray-600 text-white",
}

const toolColors: Record<string, string> = {
  "VS Code + Copilot": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  ChatGPT: "bg-green-500/20 text-green-300 border-green-500/30",
  Figma: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "WordPress Admin": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Docker: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Next.js": "bg-gray-500/20 text-gray-300 border-gray-500/30",
  Vercel: "bg-black/20 text-white border-gray-500/30",
  "WP-CLI": "bg-blue-500/20 text-blue-300 border-blue-500/30",
}

export function PhasedTaskTable({ phases }: PhasedTaskTableProps) {
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(phases.map((p) => p.id)))

  const togglePhase = (phaseId: string) => {
    const newExpanded = new Set(expandedPhases)
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId)
    } else {
      newExpanded.add(phaseId)
    }
    setExpandedPhases(newExpanded)
  }

  const getToolBadgeStyle = (tool: string) => {
    return toolColors[tool] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <div key={phase.id} className="border border-border rounded-lg bg-card overflow-hidden">
          <Button
            variant="ghost"
            onClick={() => togglePhase(phase.id)}
            className="w-full justify-between p-4 h-auto hover:bg-muted/50"
          >
            <div className="text-left">
              <h3 className="font-semibold text-foreground">{phase.name}</h3>
              <p className="text-sm text-muted-foreground">{phase.description}</p>
            </div>
            {expandedPhases.has(phase.id) ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>

          {expandedPhases.has(phase.id) && (
            <div className="border-t border-border">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground w-20">Task ID</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Task Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground w-48">
                        Primary Role(s)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground w-64">Key Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phase.tasks.map((task, index) => (
                      <tr
                        key={task.id}
                        className={`border-b border-border last:border-b-0 transition-colors hover:bg-muted/30 ${
                          index % 2 === 0 ? "bg-card" : "bg-muted/20"
                        }`}
                      >
                        <td className="px-4 py-3 text-sm font-mono text-muted-foreground">{task.id}</td>
                        <td className="px-4 py-3 text-sm text-foreground">{task.description}</td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {task.roles.map((role, roleIndex) => (
                              <span
                                key={roleIndex}
                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  roleColors[role] || "bg-gray-600 text-white"
                                }`}
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {task.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getToolBadgeStyle(tool)}`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden">
                {phase.tasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`p-4 border-b border-border last:border-b-0 ${
                      index % 2 === 0 ? "bg-card" : "bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                        {task.id}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-foreground mb-3">{task.description}</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Primary Role(s)</p>
                        <div className="flex flex-wrap gap-1">
                          {task.roles.map((role, roleIndex) => (
                            <span
                              key={roleIndex}
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                roleColors[role] || "bg-gray-600 text-white"
                              }`}
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Key Tools</p>
                        <div className="flex flex-wrap gap-1">
                          {task.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getToolBadgeStyle(tool)}`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
