"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function MCPWorkflowsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <LayoutWrapper title="MCP Workflows">
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Model Context Protocol Workflows</CardTitle>
            <CardDescription>Automated workflows and processes using MCP for the migration project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive MCP-powered workflows that streamline and automate key aspects of the migration process,
              from task scaffolding to deployment and quality assurance.
            </p>
          </CardContent>
        </Card>

        {/* Workflow 1: AI-Powered Migration Task Scaffolding */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">### Workflow 1: AI-Powered Migration Task Scaffolding</CardTitle>
            <CardDescription>
              This workflow uses Copilot Workspace to create the initial migration script and its corresponding test
              files, handing off a complete starting point to the developer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold mb-2">Goal:</p>
              <p className="text-muted-foreground">
                Automate the creation of a new, specific data migration script (e.g., for "video courses").
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Trigger (Manual):</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The Project Lead creates a new, detailed GitHub Issue.
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium">• Title:</p>
                  <div className="relative">
                    <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
                      <code>Feat: Create Migration Script for Video Courses</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                      onClick={() => copyToClipboard("Feat: Create Migration Script for Video Courses")}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>

                  <p className="text-sm font-medium">• Body:</p>
                  <div className="relative">
                    <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
                      <code>{`"Create a new Node.js script in /scripts/migrations named migrate-videos.js. It needs to read from /data/legacy-videos.csv. For each row, it should map the columns video_url, title, and transcript to a new WordPress post. Create a corresponding test file in /scripts/migrations/tests using Jest."`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                      onClick={() =>
                        copyToClipboard(
                          `"Create a new Node.js script in /scripts/migrations named migrate-videos.js. It needs to read from /data/legacy-videos.csv. For each row, it should map the columns video_url, title, and transcript to a new WordPress post. Create a corresponding test file in /scripts/migrations/tests using Jest."`,
                        )
                      }
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. AI Planning (GitHub Copilot Workspace):</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • A developer opens the repository in Copilot Workspace and directs it to the newly created issue.
                  </li>
                  <li>
                    • Copilot analyzes the issue, scans the existing file structure (
                    <code className="bg-muted px-1 rounded">/scripts</code> directory, existing CSV files), and
                    generates a plan.
                  </li>
                </ul>

                <div className="mt-3">
                  <p className="text-sm font-medium mb-2">The Plan:</p>
                  <ul className="space-y-1 text-sm">
                    <li>
                      ✅ Create file{" "}
                      <code className="bg-muted px-1 rounded">/scripts/migrations/migrate-videos.js</code> with
                      boilerplate code to read the specified CSV.
                    </li>
                    <li>
                      ✅ Add a placeholder function{" "}
                      <code className="bg-muted px-1 rounded">transformVideoData(row)</code> to be filled in later.
                    </li>
                    <li>
                      ✅ Add a function <code className="bg-muted px-1 rounded">createWordPressPost(data)</code> that
                      logs the payload for now.
                    </li>
                    <li>
                      ✅ Create file{" "}
                      <code className="bg-muted px-1 rounded">/scripts/migrations/tests/migrate-videos.test.js</code>.
                    </li>
                    <li>✅ Write a basic Jest test that ensures the script can be imported without errors.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Execution & Handoff:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • The developer approves the plan. Copilot Workspace executes it, creating the files and writing the
                    initial code.
                  </li>
                  <li>
                    • This becomes the starting branch, which is now ready for a developer to open in{" "}
                    <strong>Cursor</strong> for detailed, context-aware implementation of the transformation logic.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow 2: Context-Aware CI/CD with Vercel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">### Workflow 2: Context-Aware CI/CD with Vercel</CardTitle>
            <CardDescription>
              This workflow automates testing and deployment, providing immediate feedback on pull requests with
              context-specific deployment previews.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold mb-2">Goal:</p>
              <p className="text-muted-foreground">
                Ensure every code change related to the frontend is automatically tested and deployed to a preview
                environment on Vercel.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Trigger (Git Push):</h4>
                <p className="text-sm text-muted-foreground">
                  A frontend developer pushes a commit to a feature branch (e.g.,{" "}
                  <code className="bg-muted px-1 rounded">feat/new-author-page</code>) and creates a Pull Request.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Automation (GitHub Actions):</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The push triggers a workflow defined in{" "}
                  <code className="bg-muted px-1 rounded">.github/workflows/ci-cd.yml</code>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Execution (YAML Workflow):</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto max-h-96 overflow-y-auto">
                    <code>{`# .github/workflows/ci-cd.yml
name: Vercel CI/CD

on: [push]

jobs:
  test_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies
        run: npm install

      - name: Run Linting and Tests
        run: npm test # This runs Jest, Playwright, etc.

      # Vercel Integration for Context-Aware Deployment
      - name: Deploy to Vercel Preview
        # This action automatically builds and deploys a unique preview.
        # It posts the URL back to the pull request as a comment.
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          github-comment: true`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard(`# .github/workflows/ci-cd.yml
name: Vercel CI/CD

on: [push]

jobs:
  test_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies
        run: npm install

      - name: Run Linting and Tests
        run: npm test # This runs Jest, Playwright, etc.

      # Vercel Integration for Context-Aware Deployment
      - name: Deploy to Vercel Preview
        # This action automatically builds and deploys a unique preview.
        # It posts the URL back to the pull request as a comment.
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          github-comment: true`)
                    }
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Result (Seamless Feedback):</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• The tests are run automatically.</li>
                  <li>
                    • If they pass, Vercel builds and deploys a <strong>unique preview URL</strong> for that specific
                    pull request (e.g.,{" "}
                    <code className="bg-muted px-1 rounded">oreilly-frontend-git-feat-new-author-page.vercel.app</code>
                    ).
                  </li>
                  <li>
                    • The Vercel bot automatically comments on the GitHub pull request with the live link, allowing
                    designers, developers, and stakeholders to review the changes in a real environment instantly.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow 3: Local AI-Powered Git Hooks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">### Workflow 3: Local AI-Powered Git Hooks</CardTitle>
            <CardDescription>
              This workflow uses a pre-commit hook to ensure code quality before it's even committed, using AI to
              automatically fix issues.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold mb-2">Goal:</p>
              <p className="text-muted-foreground">
                Automate code linting and formatting, and generate commit messages.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Setup (Local Environment):</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The developer installs <strong>husky</strong>, a tool for managing Git hooks.
                </p>

                <div className="relative">
                  <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
                    <code>{`# Install and configure husky
npx husky init`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() => copyToClipboard("# Install and configure husky\nnpx husky init")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  2. Configuration (<code className="bg-muted px-1 rounded">.husky/pre-commit</code>):
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  This file contains a script that runs before every commit.
                </p>

                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto max-h-80 overflow-y-auto">
                    <code>{`#!/bin/sh
if [[ \$(dirname "\$0") == */.husky/* ]]; then
  echo "Running Pre-Commit Hooks..."

  # 1. AI-Powered Linting and Formatting Fixes
  # Use Cursor's command-line interface (hypothetical) or an AI-linting tool
  # to automatically fix simple logical errors
  npx eslint . --fix

  # 2. Add all fixed files to the commit
  git add .

  # 3. AI-Powered Commit Message Generation
  # Use a tool like 'opencommit' to generate a conventional commit message
  # based on the staged changes (the 'diff') and generates a structured,
  # conventional commit message like "feat(author): build new author page component"
  npx opencommit
fi`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard(`#!/bin/sh
if [[ \$(dirname "\$0") == */.husky/* ]]; then
  echo "Running Pre-Commit Hooks..."

  # 1. AI-Powered Linting and Formatting Fixes
  # Use Cursor's command-line interface (hypothetical) or an AI-linting tool
  # to automatically fix simple logical errors
  npx eslint . --fix

  # 2. Add all fixed files to the commit
  git add .

  # 3. AI-Powered Commit Message Generation
  # Use a tool like 'opencommit' to generate a conventional commit message
  # based on the staged changes (the 'diff') and generates a structured,
  # conventional commit message like "feat(author): build new author page component"
  npx opencommit
fi`)
                    }
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Execution (Developer Action):</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • A developer finishes their work and runs <code className="bg-muted px-1 rounded">git commit</code>
                    .
                  </li>
                  <li>
                    • <strong>Automatically</strong>, before the commit is finalized:
                  </li>
                  <li className="ml-4">
                    - <code className="bg-muted px-1 rounded">npx eslint --fix</code> runs, cleaning up any formatting
                    or simple logical errors.
                  </li>
                  <li className="ml-4">
                    - <code className="bg-muted px-1 rounded">opencommit</code> analyzes the code changes (the "diff")
                    and generates a structured, conventional commit message like{" "}
                    <code className="bg-muted px-1 rounded">"feat(author): build new author page component"</code>.
                  </li>
                  <li className="ml-4">- The developer simply reviews and approves the message.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                This workflow enforces consistency, improves code quality, and removes the mental overhead of writing
                commit messages, allowing the developer to stay focused on the migration logic.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
