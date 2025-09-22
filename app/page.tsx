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
        description: "Analyze legacy Perl DB schema & content",
        roles: ["Lead Dev"],
        tools: ["VS Code/Cursor", "DBeaver/TablePlus", "SchemaSpy/DBML", "Git"],
      },
      {
        id: "1.2",
        description: "URL audit & complete list",
        roles: ["SEO", "Lead Dev"],
        tools: ["Screaming Frog SEO Spider", "Sitebulb", "curl/httpx", "Python + requests/pandas", "Google Sheets"],
      },
      {
        id: "1.3",
        description: "Stakeholder interviews",
        roles: ["PM", "UX"],
        tools: ["Zoom/Meet", "Notion/Confluence"],
      },
      {
        id: "1.4",
        description: "Personas & journeys",
        roles: ["UX"],
        tools: ["Figma", "Miro"],
      },
      {
        id: "1.5",
        description: "Sitemap & IA",
        roles: ["UX", "SEO"],
        tools: ["Figma", "Octopus.do (optional)", "Sheets"],
      },
      {
        id: "1.6",
        description: "Low-fi wires",
        roles: ["UX"],
        tools: ["Figma"],
      },
      {
        id: "1.7",
        description: "WP content model (CPTs/tax/fields)",
        roles: ["Lead Dev"],
        tools: ["WordPress Admin", "ACF (if used)", "WPGraphQL schema docs"],
      },
      {
        id: "1.8",
        description: "Design system & tokens",
        roles: ["UX"],
        tools: ["Figma", "tokens in JSON"],
      },
      {
        id: "1.9",
        description: "Hi-fi mockups all templates",
        roles: ["UX"],
        tools: ["Figma"],
      },
      {
        id: "1.10",
        description: "Decide block vs headless + routing parity",
        roles: ["Lead Dev", "UX"],
        tools: ["ADR in Notion/Git", "Figma site map"],
      },
      {
        id: "1.11",
        description: "SEO baseline (rankings/CWV/indexing)",
        roles: ["SEO"],
        tools: ["GA4", "GSC", "Lighthouse CI (lab)"],
      },
      {
        id: "1.12",
        description: "Redirect inventory: collect server/CDN rules",
        roles: ["Lead Dev", "SEO"],
        tools: ["Akamai Control Center export", "Nginx/Apache conf", "git grep", "Python/jq → CSV"],
      },
      {
        id: "1.13",
        description: "Hosting/CDN, RTO/RPO, backups",
        roles: ["SRE", "Security"],
        tools: ["Akamai", "host control panel", "runbook in Notion"],
      },
      {
        id: "1.14",
        description: "Security/compliance",
        roles: ["Security"],
        tools: ["Policy repo", "checklists"],
      },
      {
        id: "1.15",
        description: "Acceptance criteria (content/SEO/CWV/A11y/Sec)",
        roles: ["PM"],
        tools: ["Checklist in repo"],
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
        description: "Stand up WordPress envs (Local/Staging/Pre-prod/Prod)",
        roles: ["Lead Dev"],
        tools: ["WP Engine/Kinsta/Pantheon or LocalWP (no-Docker path)", "WP-CLI"],
      },
      {
        id: "2.2",
        description: "Enable Multisite + domain mapping",
        roles: ["Lead Dev"],
        tools: ["WordPress Admin", "wp-config.php", "WP-CLI"],
      },
      {
        id: "2.3",
        description: "Install core plugins (WPGraphQL, Redis, Offload Media, SEO, SRM, OIDC/SAML)",
        roles: ["Lead Dev"],
        tools: ["WP-CLI", "vendor plugins"],
      },
      {
        id: "2.4",
        description: "Redis + S3/GCS offload + CDN rewrites",
        roles: ["Lead Dev"],
        tools: ["Redis service", "WP Offload Media", "AWS S3/GCS consoles"],
      },
      {
        id: "2.5",
        description: "Akamai staging property, WAF, TLS, Fast Purge creds",
        roles: ["SRE"],
        tools: ["Akamai Control Center", "Akamai CLI"],
      },
      {
        id: "2.6",
        description: "Initialize Next.js 15 app + GitHub repo",
        roles: ["FE Dev"],
        tools: ["create-next-app", "GitHub"],
      },
      {
        id: "2.7",
        description: "Vercel project, env vars",
        roles: ["FE Dev"],
        tools: ["Vercel Dashboard/CLI"],
      },
      {
        id: "2.8",
        description: "Edge Middleware skeleton + image domains + base redirects",
        roles: ["FE Dev"],
        tools: ["Next.js", "vercel.json"],
      },
      {
        id: "2.9",
        description: "CI/CD (build/test/deploy; perf/a11y)",
        roles: ["SRE"],
        tools: ["GitHub Actions", "Lighthouse CI", "Playwright", "axe-core"],
      },
      {
        id: "2.10",
        description: "Observability (RUM/logs/uptime)",
        roles: ["SRE", "SEO"],
        tools: ["Vercel Analytics/Logs", "GA4", "GSC", "UptimeRobot/Pingdom"],
      },
      {
        id: "2.11",
        description: "Secrets management per env",
        roles: ["Security"],
        tools: ["1Password/Vercel Env/WP host secrets"],
      },
      {
        id: "2.12",
        description: "Security headers/CSP baseline",
        roles: ["Security", "SRE"],
        tools: ["Akamai rules", "Nginx includes"],
      },
      {
        id: "2.13",
        description: "AI/MCP setup (automation hooks)",
        roles: ["Lead Dev"],
        tools: ["ChatGPT Agent (MCP) with tools: github, vercel, wpcli, akamai"],
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
        description: "Export content/media from legacy",
        roles: ["Lead Dev"],
        tools: ["psql/mysql cli", "Perl/Python scripts", "rsync/scp"],
      },
      {
        id: "3.2",
        description: "Build ETL (Extract/Transform/Load)",
        roles: ["Lead Dev"],
        tools: ["Node.js/Python", "WP-CLI", "pandas"],
      },
      {
        id: "3.3",
        description: "HTML cleanup + TT2 → Gutenberg block mapping",
        roles: ["Lead Dev"],
        tools: ["Node/cheerio or Python/BeautifulSoup", "block templates"],
      },
      {
        id: "3.4",
        description: "Media MD5 hashing + dedupe/import",
        roles: ["Lead Dev"],
        tools: ["openssl/md5sum", "WP-CLI media import", "S3"],
      },
      {
        id: "3.5",
        description: "Users/roles import + SSO claim mapping",
        roles: ["Lead Dev"],
        tools: ["WP-CLI", "OIDC/SAML plugin"],
      },
      {
        id: "3.6",
        description: "Taxonomy/relations import",
        roles: ["Lead Dev"],
        tools: ["WP-CLI", "scripts"],
      },
      {
        id: "3.7",
        description: "Redirect CSV generation (legacy→new)",
        roles: ["SEO", "Dev"],
        tools: ["Python/Sheets", "regex"],
      },
      {
        id: "3.8",
        description: "WP→Vercel publish webhook (/api/revalidate)",
        roles: ["Lead Dev"],
        tools: ["MU-plugin (PHP)", "Next.js route"],
      },
      {
        id: "3.9",
        description: "Staging test runs + validation reports",
        roles: ["Lead Dev", "QA"],
        tools: ["Diff scripts", "Linkinator/Screaming Frog"],
      },
      {
        id: "3.10",
        description: "Optional AI tagging/summaries",
        roles: ["Data", "Dev"],
        tools: ["OpenAI API", "Python"],
      },
      {
        id: "3.11",
        description: "Make ETL idempotent/restartable",
        roles: ["Lead Dev"],
        tools: ["SQLite state file/Redis locks", "scripts"],
      },
      {
        id: "3.12",
        description: "MCP agent to orchestrate ETL batches",
        roles: ["Lead Dev"],
        tools: ["ChatGPT Agent (MCP) + wpcli/vercel tools"],
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
        description: "Generate initial UI components from design system",
        roles: ["FE Dev"],
        tools: ["v0.dev (optional)", "Figma", "shadcn/ui", "TailwindCSS"],
      },
      {
        id: "4.2",
        description: "Reusable components + Storybook",
        roles: ["FE Dev"],
        tools: ["Storybook", "Next.js"],
      },
      {
        id: "4.3",
        description: "GraphQL queries/hooks per route",
        roles: ["FE Dev"],
        tools: ["WPGraphQL", "graphql-request/urql"],
      },
      {
        id: "4.4",
        description: "Assemble templates (Home/Article/Topic/Author/Search)",
        roles: ["FE Dev"],
        tools: ["Next.js App Router"],
      },
      {
        id: "4.5",
        description: "Edge Middleware for auth/locale/flags",
        roles: ["FE Dev"],
        tools: ["Next.js Middleware", "Akamai edge (if needed)"],
      },
      {
        id: "4.6",
        description: "ISR per route + on-demand revalidation",
        roles: ["FE Dev"],
        tools: ["Next.js (revalidate, revalidatePath)", "Vercel"],
      },
      {
        id: "4.7",
        description: "Protected routes + preview",
        roles: ["FE + BE"],
        tools: ["OIDC/SAML plugin", "NextAuth.js (if used)"],
      },
      {
        id: "4.8",
        description: "Kaltura player block + analytics",
        roles: ["FE Dev"],
        tools: ["Kaltura embed API", "GA4 events"],
      },
      {
        id: "4.9",
        description: "Image optimization",
        roles: ["FE Dev"],
        tools: ["next/image", "Akamai image CDN paths"],
      },
      {
        id: "4.10",
        description: "Global search/nav/footer/error",
        roles: ["FE Dev"],
        tools: ["Next.js", "Algolia/Elastic (if search svc)"],
      },
      {
        id: "4.11",
        description: "SEO: canonicals/hreflang/OG + sitemaps/robots",
        roles: ["SEO", "FE"],
        tools: ["Yoast/TSF", "next-sitemap"],
      },
      {
        id: "4.12",
        description: "Accessibility to WCAG 2.2 AA",
        roles: ["FE", "A11y"],
        tools: ["axe-core", "Playwright", "NVDA/VoiceOver"],
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
        description: "Import 301 map (CDN/Nginx + SRM)",
        roles: ["Lead Dev"],
        tools: ["Akamai rules/CLI", "Nginx map", "Safe Redirect Manager"],
      },
      {
        id: "5.2",
        description: "Content freeze comms & lock",
        roles: ["PM", "Content"],
        tools: ["Slack/Email", "WordPress role/cap or Maintenance mode"],
      },
      {
        id: "5.3",
        description: "Full migration run to staging",
        roles: ["Lead Dev"],
        tools: ["WP-CLI", "ETL scripts"],
      },
      {
        id: "5.4",
        description: "Functional/browser/device tests (auth/forms/video)",
        roles: ["QA"],
        tools: ["Playwright"],
      },
      {
        id: "5.5",
        description: "Visual regression on templates",
        roles: ["QA", "UX"],
        tools: ["Storybook test runner", "Playwright"],
      },
      {
        id: "5.6",
        description: "Performance / CWV / cache-hit",
        roles: ["FE", "SEO", "SRE"],
        tools: ["Lighthouse CI", "Web Vitals RUM (GA4)", "Akamai/Vercel stats"],
      },
      {
        id: "5.7",
        description: "Accessibility audits (auto + manual)",
        roles: ["A11y"],
        tools: ["axe-core", "Keyboard/Screenreader"],
      },
      {
        id: "5.8",
        description: "Security checks (headers/CSP/WAF/authz)",
        roles: ["Security", "SRE"],
        tools: ["securityheaders.com style checks", "Akamai WAF", "curl"],
      },
      {
        id: "5.9",
        description: "Data integrity + link check at scale",
        roles: ["QA", "SEO"],
        tools: ["Screaming Frog (mode: list)", "Linkinator", "scripts"],
      },
      {
        id: "5.10",
        description: "Triage/fix issues",
        roles: ["All Devs"],
        tools: ["GitHub Issues/Projects"],
      },
      {
        id: "5.11",
        description: "Nightly automated QA via MCP",
        roles: ["QA"],
        tools: ["ChatGPT Agent (MCP) with lighthouse/crawler tools"],
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
        description: "Final migration run on production",
        roles: ["Lead Dev"],
        tools: ["WP-CLI", "ETL scripts"],
      },
      {
        id: "6.2",
        description: "GO LIVE: DNS flip + enable edge redirects",
        roles: ["SRE", "PM"],
        tools: ["DNS provider", "Akamai Control Center/CLI"],
      },
      {
        id: "6.3",
        description: "Blue/green rollback ≤5 min",
        roles: ["SRE"],
        tools: ["DB snapshot/restore", "Akamai origin switch"],
      },
      {
        id: "6.4",
        description: "Hypercare 7-14 days (errors/CWV/indexing)",
        roles: ["Dev", "SEO", "SRE"],
        tools: ["Vercel Logs/Analytics", "GA4/GSC", "Akamai"],
      },
      {
        id: "6.5",
        description: "Validate SEO (coverage/rankings)",
        roles: ["SEO"],
        tools: ["GSC", "Ahrefs/Semrush"],
      },
      {
        id: "6.6",
        description: "Tune ISR TTLs, purges, images",
        roles: ["FE", "SRE"],
        tools: ["Vercel revalidate", "Akamai Fast Purge"],
      },
      {
        id: "6.7",
        description: "Editor training",
        roles: ["Product Lead"],
        tools: ["Loom videos", "Docs"],
      },
      {
        id: "6.8",
        description: "Hypercare bug fixes",
        roles: ["Devs"],
        tools: ["GitHub"],
      },
      {
        id: "6.9",
        description: "Retro + docs hand-off",
        roles: ["Entire Team"],
        tools: ["Notion/Confluence"],
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
              <CardDescription>15 tasks • Planning & Assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comprehensive legacy system analysis, stakeholder interviews, design planning, and technical
                architecture decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 2: Environment</CardTitle>
              <CardDescription>13 tasks • Infrastructure Setup</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                WordPress environments, Next.js setup, Vercel deployment, CI/CD, observability, security, and AI
                automation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 3: Migration</CardTitle>
              <CardDescription>12 tasks • Content & Data Migration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Content export, ETL development, HTML cleanup, media handling, user imports, taxonomy migration, and
                AI-powered orchestration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 4: Development</CardTitle>
              <CardDescription>12 tasks • Frontend Build</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                UI components, Storybook, GraphQL integration, templates, middleware, ISR, authentication, video player,
                image optimization, search, SEO, and accessibility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 5: Testing</CardTitle>
              <CardDescription>11 tasks • QA & Validation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                301 redirects, content freeze, migration testing, functional/visual/performance testing, accessibility
                audits, security checks, data integrity validation, issue triage, and automated QA.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Phase 6: Launch</CardTitle>
              <CardDescription>9 tasks • Go-Live & Support</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Final migration, DNS cutover, rollback procedures, hypercare monitoring, SEO validation, performance
                tuning, editor training, bug fixes, and project retrospective.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
