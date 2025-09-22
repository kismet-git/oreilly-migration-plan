import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhasedTaskTable } from "@/components/phased-task-table"

const projectPhases = [
  {
    id: "phase-1",
    name: "Phase 1: Discovery Planning",
    description: "Initial analysis and planning phase",
    tasks: [
      {
        id: "1.1",
        description: "Analyze legacy Perl database schema and content structures.",
        roles: ["Lead Developer"],
        tools: ["VS Code + Copilot", "ChatGPT"],
      },
      {
        id: "1.2",
        description: "Audit all existing URL patterns and compile a complete list.",
        roles: ["SEO Strategist", "Lead Developer"],
        tools: ["Screaming Frog", "Custom Scripts"],
      },
      {
        id: "1.3",
        description: "Conduct stakeholder interviews to define functional requirements.",
        roles: ["Project Lead", "UI/UX Designer"],
        tools: [],
      },
      {
        id: "1.4",
        description: "Develop user personas and journey maps for key site interactions.",
        roles: ["UI/UX Designer"],
        tools: ["Figma", "Miro"],
      },
      {
        id: "1.5",
        description: "Create a complete sitemap and information architecture for the new site.",
        roles: ["UI/UX Designer", "SEO Strategist"],
        tools: [],
      },
      {
        id: "1.6",
        description: "Design: Create low-fidelity wireframes for all key page templates.",
        roles: ["UI/UX Designer"],
        tools: ["Figma"],
      },
      {
        id: "1.7",
        description: "Define the WordPress Content Model (CPTs, Taxonomies, ACF Fields).",
        roles: ["Lead Developer"],
        tools: ["ChatGPT", "ACF Pro"],
      },
      {
        id: "1.8",
        description: "Design: Create a high-fidelity design system and component library.",
        roles: ["UI/UX Designer"],
        tools: ["Figma"],
      },
      {
        id: "1.9",
        description: "Design: Produce final, approved mockups for all page templates.",
        roles: ["UI/UX Designer"],
        tools: ["Figma"],
      },
    ],
  },
  {
    id: "phase-2",
    name: "Phase 2: Environment Setup",
    description: "Technical infrastructure and development environment setup",
    tasks: [
      {
        id: "2.1",
        description: "Set up WordPress environments (Local, Staging, Production).",
        roles: ["Lead Developer"],
        tools: ["Docker", "WP Engine/Kinsta"],
      },
      {
        id: "2.2",
        description: "Install and configure all necessary WordPress plugins (ACF, WPGraphQL).",
        roles: ["Lead Developer"],
        tools: ["WordPress Admin"],
      },
      {
        id: "2.3",
        description: "Initialize Next.js project and set up GitHub repository.",
        roles: ["Frontend Developer"],
        tools: ["create-next-app", "Git"],
      },
      {
        id: "2.4",
        description: "Configure Vercel project with Git integration and environment variables.",
        roles: ["Frontend Developer"],
        tools: ["Vercel Dashboard"],
      },
      {
        id: "2.5",
        description: "Implement GraphQL connection logic in the Next.js app.",
        roles: ["Frontend Developer"],
        tools: ["Cursor", "VS Code + Copilot"],
      },
    ],
  },
  {
    id: "phase-3",
    name: "Phase 3: Content Migration",
    description: "Data migration and content transformation",
    tasks: [
      {
        id: "3.1",
        description: "Export all content and media from the legacy system.",
        roles: ["Lead Developer"],
        tools: ["SQL Tools", "Custom Scripts"],
      },
      {
        id: "3.2",
        description: "Develop the ETL (Extract, Transform, Load) migration script.",
        roles: ["Lead Developer"],
        tools: ["Cursor", "VS Code + Copilot"],
      },
      {
        id: "3.3",
        description: "Implement data transformation and HTML cleanup logic in the script.",
        roles: ["Lead Developer"],
        tools: ["ChatGPT (for complex logic)"],
      },
      {
        id: "3.4",
        description: "(Optional) Integrate OpenAI API for content summarization and tagging.",
        roles: ["Lead Developer"],
        tools: ["OpenAI API", "Python/Node.js"],
      },
      {
        id: "3.5",
        description: "Perform test runs of the migration script on the staging environment.",
        roles: ["Lead Developer", "QA Engineer"],
        tools: ["WP-CLI", "Custom Script"],
      },
      {
        id: "3.6",
        description: "Refine script based on test results and content validation.",
        roles: ["Lead Developer"],
        tools: [],
      },
    ],
  },
  {
    id: "phase-4",
    name: "Phase 4: Frontend Development",
    description: "User interface development and component implementation",
    tasks: [
      {
        id: "4.1",
        description: "Generate initial UI components from design mockups.",
        roles: ["Frontend Developer"],
        tools: ["v0.dev", "Figma"],
      },
      {
        id: "4.2",
        description: "Build: Develop all reusable React components in Storybook/Next.js.",
        roles: ["Frontend Developer"],
        tools: ["Cursor", "VS Code + Copilot"],
      },
      {
        id: "4.3",
        description: "Build: Write GraphQL queries to fetch data for each component/page.",
        roles: ["Frontend Developer"],
        tools: ["Cursor", "VS Code + Copilot"],
      },
      {
        id: "4.4",
        description: "Build: Assemble components into final page templates (Homepage, Article, etc.).",
        roles: ["Frontend Developer"],
        tools: ["Next.js"],
      },
      {
        id: "4.5",
        description: "Design: Conduct design reviews of implemented pages and provide feedback.",
        roles: ["UI/UX Designer"],
        tools: ["Vercel Preview Links"],
      },
      {
        id: "4.6",
        description: "Implement site-wide features like search, navigation, and footer.",
        roles: ["Frontend Developer"],
        tools: [],
      },
      {
        id: "4.7",
        description: "Ensure all pages are fully responsive and accessible (WCAG standards).",
        roles: ["Frontend Developer", "QA Engineer"],
        tools: [],
      },
    ],
  },
  {
    id: "phase-5",
    name: "Phase 5: Testing & QA",
    description: "Quality assurance and pre-launch testing",
    tasks: [
      {
        id: "5.1",
        description: "Implement the 301 redirect map.",
        roles: ["Lead Developer"],
        tools: ["Vercel next.config.js"],
      },
      {
        id: "5.2",
        description: "Content Freeze: No new content is published on the legacy site.",
        roles: ["Project Lead", "Content Team"],
        tools: [],
      },
      {
        id: "5.3",
        description: "Run final migration script to populate the staging database.",
        roles: ["Lead Developer"],
        tools: [],
      },
      {
        id: "5.4",
        description: "Execute the full test plan: functional, browser, and device testing.",
        roles: ["QA Engineer"],
        tools: ["BrowserStack", "Cypress"],
      },
      {
        id: "5.5",
        description: "Conduct a final visual QA against the Figma designs.",
        roles: ["UI/UX Designer", "QA Engineer"],
        tools: ["Vercel Preview Links"],
      },
      {
        id: "5.6",
        description: "Perform performance and SEO audits on the staging site.",
        roles: ["Frontend Developer", "SEO Strategist"],
        tools: ["Google Lighthouse", "Ahrefs"],
      },
      {
        id: "5.7",
        description: "Triage and fix all identified bugs.",
        roles: ["All Developers"],
        tools: ["Jira", "GitHub"],
      },
    ],
  },
  {
    id: "phase-6",
    name: "Phase 6: Launch & Post-Launch",
    description: "Production deployment and post-launch activities",
    tasks: [
      {
        id: "6.1",
        description: "Run final migration script on the production WordPress instance.",
        roles: ["Lead Developer"],
        tools: ["WP-CLI", "Custom Script"],
      },
      {
        id: "6.2",
        description: "GO LIVE: Update DNS records to point the O'Reilly domain to Vercel.",
        roles: ["Lead Developer", "Project Lead"],
        tools: [],
      },
      {
        id: "6.3",
        description: "Monitor site for errors, performance issues, and uptime.",
        roles: ["All Developers"],
        tools: ["Vercel Analytics", "Sentry"],
      },
      {
        id: "6.4",
        description: "Validate SEO by checking crawl errors and rankings.",
        roles: ["SEO Strategist"],
        tools: ["Google Search Console"],
      },
      {
        id: "6.5",
        description: "Address any critical post-launch bugs (hypercare period).",
        roles: ["All Developers", "Project Lead"],
        tools: [],
      },
      {
        id: "6.6",
        description: "Project retrospective and documentation hand-off.",
        roles: ["Entire Team"],
        tools: [],
      },
    ],
  },
]

export default function ProjectPlanPage() {
  return (
    <LayoutWrapper title="Project Plan">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Migration Overview</CardTitle>
            <CardDescription>Current status and key milestones for the O'Reilly migration project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to the O'Reilly Migration Plan project hub. This comprehensive migration plan outlines the
              transition from legacy Perl systems to a modern Next.js and WordPress headless architecture.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Tasks</CardTitle>
            <CardDescription>Full migration plan with roles, tools, and milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <PhasedTaskTable phases={projectPhases} />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 1: Discovery</CardTitle>
              <CardDescription>9 tasks • Planning & Assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Legacy system analysis, stakeholder interviews, and design planning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 2: Environment</CardTitle>
              <CardDescription>5 tasks • Infrastructure Setup</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                WordPress and Next.js environment configuration and deployment setup.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 3: Migration</CardTitle>
              <CardDescription>6 tasks • Content & Data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ETL script development and content migration from legacy systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 4: Development</CardTitle>
              <CardDescription>7 tasks • Frontend Build</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                React component development and page template implementation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 5: Testing</CardTitle>
              <CardDescription>7 tasks • QA & Validation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Comprehensive testing, performance audits, and bug fixes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 6: Launch</CardTitle>
              <CardDescription>6 tasks • Go-Live & Support</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Production deployment, DNS updates, and post-launch monitoring.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
