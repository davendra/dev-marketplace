---
name: workflow-diagrams
description: Create professional workflow diagrams, flowcharts, process maps, and infographics using Go Bananas Pro model. Supports Mermaid syntax input, natural language descriptions, and automatic format selection. Triggers on requests for flowcharts, process diagrams, workflow visualizations, decision trees, org charts, timelines, mind maps, sequence diagrams, Gantt charts, or infographics.
---

# Workflow Diagrams & Infographics

Transform Mermaid syntax or natural language descriptions into beautiful visual diagrams using Go Bananas Pro model. The skill automatically selects the best output format (flowchart, diagram, infographic, timeline) based on your input.

> **Model Recommendation**: Always use **Pro model** (`model_id: "gemini-pro-image"`) for workflow diagrams. Pro excels at text rendering, layout reasoning, and structured visualizations.

## Quick Start

### From Mermaid Syntax

Provide any Mermaid diagram and it will be converted to a visual:

```
Convert this Mermaid diagram to a professional flowchart:

graph TD
    A[User Request] --> B{Valid Input?}
    B -->|Yes| C[Process Data]
    B -->|No| D[Show Error]
    C --> E[Return Result]
    D --> E
```

### From Natural Language

Describe your workflow in plain English:

```
Create a flowchart showing the customer onboarding process:
1. User signs up
2. Email verification (decision point)
3. If verified: Profile setup → Welcome dashboard
4. If not verified: Resend email → Timeout check
Use corporate style with blue accent colors.
```

## Input Formats

### 1. Mermaid Syntax (Recommended)

The skill supports **all Mermaid diagram types**:

| Type | Syntax | Best For |
|------|--------|----------|
| Flow Diagram | `graph TD/LR/BT/RL` | Processes, decisions |
| Flowchart | `flowchart TD` | Same as graph |
| Sequence | `sequenceDiagram` | API flows, interactions |
| Class Diagram | `classDiagram` | Entity relationships |
| State Diagram | `stateDiagram-v2` | State machines |
| ER Diagram | `erDiagram` | Database schemas |
| Gantt Chart | `gantt` | Project timelines |
| Pie Chart | `pie` | Data distribution |
| User Journey | `journey` | UX flows |
| Mind Map | `mindmap` | Idea organization |
| Timeline | `timeline` | Chronological events |
| Quadrant | `quadrantChart` | Priority matrices |
| Git Graph | `gitgraph` | Branch visualizations |

### 2. Natural Language

Describe what you want in plain English:
- "Create a decision tree for customer support escalation"
- "Show the deployment pipeline stages"
- "Visualize the user authentication flow"

## Output Types

The skill automatically selects the best output format:

| Format | Triggered By | Visual Style |
|--------|--------------|--------------|
| **Flowchart** | Decision points, sequential steps | Boxes, diamonds, arrows |
| **Process Map** | Multi-lane workflows, swimlanes | Horizontal lanes |
| **Infographic** | Statistics, comparisons, data | Icons, charts, numbers |
| **Timeline** | Chronological events, phases | Horizontal/vertical milestones |
| **Org Chart** | Hierarchies, team structures | Tree layout |
| **Mind Map** | Ideas, brainstorming | Radial branches |

## Golden Rules for Visual Diagrams

*From Google DeepMind's official Gemini Pro guide*

### 1. Be Descriptive and Specific

Write full sentences, not tags. Describe the complete visual scene.

**Bad**: `flowchart, nodes, arrows, business`

**Good**: "A corporate flowchart with rounded blue rectangles for process steps, orange diamonds for decision points, and green circles for start/end nodes. Use thin gray arrows with subtle shadows. Clean white background with professional sans-serif labels."

### 2. Explicitly Define Layout

Tell the model exactly where things go:
- "Start node at the top center"
- "Three vertical columns, left-to-right flow"
- "Arrange in a 2x3 grid pattern"

### 3. Use Quoted Text for Labels

Ensure exact text appears on nodes:
- "The start node contains the text 'User Request'"
- "Decision diamond labeled 'Is Valid?'"
- "End node displays 'Complete'"

### 4. Specify Visual Style and Medium

Be explicit about the aesthetic:
- "Rendered as if it were a whiteboard sketch"
- "Professional corporate presentation style"
- "Modern flat design with soft shadows"

### 5. Leverage Real-Time Data (Pro Only)

Pro model supports **Google Search grounding**:

```
Create an infographic comparing the top 5 cloud providers by market share in 2024.
Use current data from search results.
Vertical bar chart with company logos.
```

Set `enable_grounding: true` when generating.

## Style Templates

Choose a visual style for your diagrams:

| Style | Description | Best For |
|-------|-------------|----------|
| **Corporate** | Clean lines, brand colors, professional | Business presentations |
| **Minimal** | Whitespace, monochrome, simple | Technical documentation |
| **Hand-drawn** | Sketch aesthetic, imperfect lines | Whiteboard brainstorming |
| **Blueprint** | Technical, engineering lines | Architecture diagrams |
| **Retro** | Vintage 1950s infographic style | Creative presentations |
| **Modern** | Flat design, bold colors, icons | Social media, marketing |

Specify in your prompt: "Use **corporate style** with company blue (#0066CC)."

## Reference Documentation

For detailed templates and patterns, see:
- **mermaid-patterns.md** - Complete Mermaid syntax reference and conversion rules
- **flowchart-prompts.md** - Flowchart and decision tree templates
- **infographic-prompts.md** - Data visualization and statistics templates
- **style-templates.md** - Visual style definitions with color palettes

## Example Workflows

### Converting Mermaid to Visual

```
Input: Convert this Mermaid diagram to a professional visual:

sequenceDiagram
    participant User
    participant API
    participant Database
    User->>API: POST /login
    API->>Database: Query user
    Database-->>API: User data
    API-->>User: JWT token

Style: Modern, with subtle gradients and rounded boxes.
```

### Creating Data Infographic

```
Create an infographic showing our Q4 2024 results:
- Revenue: $2.3M (+15%)
- New Users: 12,500 (+22%)
- Churn Rate: 3.2% (-0.5%)

Layout: Three columns, each with an icon, large number, and percentage change.
Colors: Green for positive, red for negative.
Style: Modern flat design with subtle shadows.
```

### Project Timeline

```
Create a timeline for our product launch:
- Phase 1: Research (Jan-Feb)
- Phase 2: Development (Mar-May)
- Phase 3: Beta Testing (Jun-Jul)
- Phase 4: Launch (Aug)
- Phase 5: Growth (Sep-Dec)

Horizontal layout, milestone markers, progress indicators.
Corporate style with our brand blue.
```

### Decision Tree

```
Create a decision tree for customer support routing:

Start: Customer contacts support
Decision 1: Is it a billing issue?
  Yes → Billing Team
  No → Continue
Decision 2: Is it a technical issue?
  Yes → Decision 3: Priority level?
    High → Senior Engineer
    Low → Support Queue
  No → General Inquiry → FAQ Bot

Style: Clean flowchart with color-coded departments.
```

## Pro Model Settings

For best results with diagrams and infographics:

```
model_id: "gemini-pro-image"
resolution_tier: "2k"           # 4k for print materials
thinking_level: "high"          # Better layout reasoning
enable_grounding: true          # For real-time data
```

## Tips for Better Results

1. **Start Simple**: Begin with basic structure, then iterate
2. **Use Edit Mode**: If 80% correct, use `continue_editing` to refine
3. **Reference Images**: Provide style examples for consistent branding
4. **Specify Dimensions**: "Create a 16:9 diagram suitable for presentation slides"
5. **Include Legends**: "Add a color legend in the bottom-right corner"
