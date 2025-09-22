interface Task {
  id: string
  description: string
  roles: string[]
  tools: string[]
}

interface TaskTableProps {
  tasks: Task[]
}

const roleColors: Record<string, string> = {
  "Lead Developer": "bg-purple-600 text-white",
  "UI/UX Designer": "bg-blue-600 text-white",
  "Backend Developer": "bg-green-600 text-white",
  "Frontend Developer": "bg-orange-600 text-white",
  "DevOps Engineer": "bg-red-600 text-white",
  "Product Manager": "bg-indigo-600 text-white",
  "QA Engineer": "bg-yellow-600 text-black",
  "Data Analyst": "bg-pink-600 text-white",
  "Technical Writer": "bg-teal-600 text-white",
}

export function TaskTable({ tasks }: TaskTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-card">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground w-20">Task ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Task Description</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground w-48">Primary Role(s)</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground w-40">Key Tools</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
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
                <td className="px-4 py-3 text-sm text-muted-foreground">{task.tools.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`p-4 border-b border-border last:border-b-0 ${index % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{task.id}</span>
            </div>
            <h3 className="text-sm font-medium text-foreground mb-3">{task.description}</h3>
            <div className="space-y-2">
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
                <p className="text-sm text-muted-foreground">{task.tools.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
