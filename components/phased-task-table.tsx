"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RoleBadge } from "@/components/ui/role-badge"
import { ToolBadge } from "@/components/ui/tool-badge"

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

export function PhasedTaskTable({ phases }: PhasedTaskTableProps) {
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set())

  const togglePhase = (phaseId: string) => {
    const newExpanded = new Set(expandedPhases)
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId)
    } else {
      newExpanded.add(phaseId)
    }
    setExpandedPhases(newExpanded)
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
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
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
                        <td className="px-4 py-3 text-sm text-foreground leading-relaxed">{task.description}</td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {task.roles.map((role, roleIndex) => (
                              <RoleBadge key={roleIndex} role={role} />
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {task.tools.map((tool, toolIndex) => (
                              <ToolBadge key={toolIndex} tool={tool} variant="bordered" />
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
                    <h4 className="text-sm font-medium text-foreground mb-3 leading-relaxed">{task.description}</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Primary Role(s)</p>
                        <div className="flex flex-wrap gap-1">
                          {task.roles.map((role, roleIndex) => (
                            <RoleBadge key={roleIndex} role={role} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Key Tools</p>
                        <div className="flex flex-wrap gap-1">
                          {task.tools.map((tool, toolIndex) => (
                            <ToolBadge key={toolIndex} tool={tool} variant="bordered" />
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
