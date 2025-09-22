import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CursorPhaseTable } from "@/components/cursor-phase-table"

export default function CursorGuidePage() {
  return (
    <LayoutWrapper title="Cursor Guide">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Cursor Development Guidelines</CardTitle>
            <CardDescription>Best practices and workflows for using Cursor in the migration project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This section contains comprehensive guidelines for using Cursor effectively throughout the migration
              process.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Migration Phase Challenges</h2>
            <p className="text-muted-foreground">
              Comprehensive Cursor strategies organized by project phase, with beginner and advanced prompts for each
              challenge.
            </p>
          </div>

          <CursorPhaseTable />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Setup & Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Initial setup instructions and recommended configurations for optimal development workflow.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Proven methodologies and coding standards to maintain consistency across the project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
