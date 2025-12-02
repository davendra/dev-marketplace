# Flowchart & Decision Tree Prompts

Ready-to-use prompt templates for creating flowcharts, decision trees, process flows, and workflow visualizations.

## Template Structure

Every flowchart prompt should include:

1. **Type declaration** - What kind of diagram
2. **Node definitions** - All shapes with their labels
3. **Connection map** - How nodes connect
4. **Layout specification** - Direction and arrangement
5. **Style specification** - Visual appearance

---

## Basic Flowchart Template

```
Create a [DIRECTION] flowchart showing [PROCESS NAME]:

NODES:
- Start: [SHAPE] labeled "[TEXT]" ([COLOR])
- Step 1: [SHAPE] labeled "[TEXT]"
- Decision 1: Diamond labeled "[QUESTION]?"
- Step 2a: [SHAPE] labeled "[TEXT]"
- Step 2b: [SHAPE] labeled "[TEXT]"
- End: [SHAPE] labeled "[TEXT]" ([COLOR])

FLOW:
Start → Step 1 → Decision 1
Decision 1 → Step 2a (if [CONDITION])
Decision 1 → Step 2b (if [CONDITION])
Step 2a → End
Step 2b → End

STYLE: [STYLE NAME], [COLORS], [FONT]
```

---

## Process Flow Templates

### Linear Process (No Decisions)

```
Create a horizontal process flow diagram showing the order fulfillment stages:

STAGES (left to right):
1. "Order Received" - shopping cart icon, blue box
2. "Payment Processing" - credit card icon, blue box
3. "Warehouse Pick" - box/package icon, blue box
4. "Quality Check" - checkmark icon, blue box
5. "Shipping" - truck icon, blue box
6. "Delivered" - house icon, green box (success)

CONNECTIONS: Solid arrows between each stage

STYLE: Modern flat design, numbered badges on each box, icons above labels,
subtle gradient background, progress bar beneath showing completion.
```

### Multi-Branch Process

```
Create a flowchart showing customer service ticket routing:

START: "New Ticket Received" (rounded rectangle, blue)

DECISION 1: "Category?" (diamond)
- "Technical" → Branch A
- "Billing" → Branch B
- "General" → Branch C

BRANCH A (Technical):
- "Check Knowledge Base" → "Solution Found?" (diamond)
  - Yes → "Send KB Article"
  - No → "Escalate to L2 Support"

BRANCH B (Billing):
- "Verify Account" → "Payment Issue?" (diamond)
  - Yes → "Process Refund/Adjustment"
  - No → "Update Account Info"

BRANCH C (General):
- "Auto-Response" → "Resolved?" (diamond)
  - Yes → "Close Ticket"
  - No → "Route to Agent"

END: All paths converge to "Ticket Resolved" (green)

LAYOUT: Top-to-bottom with three parallel vertical branches
STYLE: Corporate, color-coded branches (blue/green/orange), clean lines
```

---

## Decision Tree Templates

### Binary Decision Tree

```
Create a decision tree for loan approval:

ROOT: "Loan Application Received"

LEVEL 1: "Credit Score > 700?"
- YES → Level 2A
- NO → Level 2B

LEVEL 2A: "Debt-to-Income < 40%?"
- YES → "APPROVED - Standard Rate" (green terminal)
- NO → "APPROVED - Higher Rate" (yellow terminal)

LEVEL 2B: "Existing Customer?"
- YES → "Manual Review Required" (orange terminal)
- NO → "DECLINED" (red terminal)

STYLE: Binary tree layout, rounded rectangles for decisions,
terminal nodes clearly colored by outcome, yes/no labels on branches.
```

### Multi-Option Decision Tree

```
Create a product recommendation decision tree:

START: "What's your primary use case?"

BRANCH: "Gaming"
- "Budget?" → Under $1000 → "Product A"
- "Budget?" → $1000-2000 → "Product B"
- "Budget?" → Over $2000 → "Product C"

BRANCH: "Content Creation"
- "Type?" → Video → "Product D"
- "Type?" → Graphics → "Product E"
- "Type?" → 3D Modeling → "Product F"

BRANCH: "Business"
- "Team Size?" → Solo → "Product G"
- "Team Size?" → Small Team → "Product H"
- "Team Size?" → Enterprise → "Product I"

LAYOUT: Horizontal tree expanding right
STYLE: Modern, icon for each product, color-coded by category
```

---

## Swimlane Templates

### Horizontal Swimlanes

```
Create a swimlane diagram for purchase order approval:

LANES (top to bottom):
1. "Requester" (blue header)
2. "Manager" (green header)
3. "Finance" (orange header)
4. "Vendor" (purple header)

FLOW:
Requester: "Submit PO Request" →
Manager: "Review Request" → "Approve?" (diamond)
  - No → Requester: "Revise Request" (loops back)
  - Yes → Finance: "Budget Check" → "Funds Available?" (diamond)
    - No → Manager: "Request Budget Increase"
    - Yes → Finance: "Release Payment" → Vendor: "Process Order"

END: Vendor: "Order Confirmed" → Requester: "Receive Notification"

STYLE: Clear lane boundaries, alternating lane background colors (subtle),
activities as rounded rectangles, flow arrows crossing lanes with connectors.
```

### Vertical Swimlanes

```
Create a vertical swimlane diagram for software deployment:

LANES (left to right):
1. "Developer"
2. "CI/CD Pipeline"
3. "QA"
4. "Operations"

FLOW (top to bottom):
Developer: "Commit Code" →
CI/CD: "Build" → "Unit Tests" → "Integration Tests"
QA: "UAT Testing" → "Approved?" (diamond)
  - No → Developer: "Fix Issues"
  - Yes → Operations: "Deploy to Staging" → "Production Deploy"

STYLE: Technical diagram style, DevOps icons, status indicators (green checks)
```

---

## Specialized Flowchart Templates

### Error Handling Flow

```
Create a flowchart for API error handling:

START: "API Request Received"

PROCESS: "Validate Request" → "Valid?" (diamond)
- No → "Return 400 Bad Request" → END (error)
- Yes → "Authenticate" → "Auth Valid?" (diamond)
  - No → "Return 401 Unauthorized" → END (error)
  - Yes → "Check Rate Limit" → "Within Limit?" (diamond)
    - No → "Return 429 Too Many Requests" → END (error)
    - Yes → "Process Request" → "Success?" (diamond)
      - No → "Return 500 Internal Error" → END (error)
      - Yes → "Return 200 OK" → END (success)

STYLE: Technical diagram, color-coded endpoints
(red for errors, green for success), HTTP status codes in nodes.
```

### User Authentication Flow

```
Create a detailed authentication flowchart:

ENTRY: "User Visits App"

CHECK: "Has Session Token?" (diamond)
- Yes → "Validate Token" → "Token Valid?" (diamond)
  - Yes → "Grant Access" → END (success)
  - No → "Clear Token" → Continue below
- No → Continue below

LOGIN: "Show Login Page" → "Enter Credentials" → "Credentials Valid?" (diamond)
- No → "Show Error" → "Attempts < 3?" (diamond)
  - Yes → Loop to "Enter Credentials"
  - No → "Lock Account" → END (security)
- Yes → "MFA Enabled?" (diamond)
  - Yes → "Send MFA Code" → "Verify Code" → "Code Valid?" (diamond)
    - Yes → "Create Session" → "Grant Access"
    - No → "Show MFA Error" → Loop to "Send MFA Code"
  - No → "Create Session" → "Grant Access"

STYLE: Security diagram style, lock icons, green/red color coding
```

### E-commerce Checkout Flow

```
Create a checkout process flowchart:

STAGES:
1. "Shopping Cart" (cart icon)
   - "Review Items" → "Proceed?" → Yes/No

2. "Shipping Info" (location icon)
   - "Enter Address" → "Validate Address" → Valid/Invalid
   - Invalid → "Suggest Corrections"

3. "Payment" (card icon)
   - "Select Method" → "Enter Details" → "Process Payment"
   - "Payment Failed?" → Yes → "Show Error" → Retry
   - Success → Continue

4. "Confirmation" (check icon)
   - "Generate Order ID" → "Send Email" → "Show Confirmation"

EXTRAS:
- "Apply Coupon" side path from Cart
- "Save for Later" exit from Cart
- "Express Checkout" bypass from Cart to Payment

STYLE: E-commerce style, step indicators (1-2-3-4),
icons for each stage, mobile-friendly vertical layout
```

---

## Quick Patterns

### Simple Yes/No Pattern

```
Create a simple yes/no decision flowchart:
"[QUESTION]?" → Yes → "[ACTION A]" → End
"[QUESTION]?" → No → "[ACTION B]" → End
```

### Loop Pattern

```
Create a flowchart with retry loop:
"Start Process" → "Attempt Task" → "Success?" (diamond)
- Yes → "Complete" (green)
- No → "Retry Count < 3?" (diamond)
  - Yes → Loop back to "Attempt Task"
  - No → "Fail" (red)
```

### Parallel Process Pattern

```
Create a flowchart with parallel processing:
"Start" → "Fork" (horizontal bar)
→ Path A: "Task A1" → "Task A2"
→ Path B: "Task B1" → "Task B2"
→ "Join" (horizontal bar) → "End"
```

### Exception Handling Pattern

```
Create flowchart with exception flow:
"Main Flow" → TRY: "Process" → "Success"
              ↓ (exception)
              CATCH: "Handle Error" → "Log" → "Recover or Fail"
```

---

## Style Combinations

### Corporate Presentation

```
STYLE: Clean corporate,
- Primary: Company blue (#0066CC)
- Secondary: Company gray (#666666)
- Success: Green (#28A745)
- Error: Red (#DC3545)
- Font: Arial or Helvetica
- Shadows: Subtle drop shadows
- Borders: 2px solid
```

### Technical Documentation

```
STYLE: Technical diagram,
- Monochrome with accent color
- Font: Monospace (Consolas/Monaco)
- Grid background (subtle)
- No shadows
- Sharp corners
- Thin borders (1px)
```

### Whiteboard Sketch

```
STYLE: Hand-drawn aesthetic,
- Slightly wobbly lines
- Handwriting-style font
- No fill colors (outline only)
- Simple arrows (no fancy heads)
- Paper texture background
```

---

## Prompt Modifiers

Add these to customize any flowchart:

| Modifier | Effect |
|----------|--------|
| "with icons" | Add relevant icons to each node |
| "numbered steps" | Add 1, 2, 3... badges to nodes |
| "with annotations" | Add explanatory notes beside complex steps |
| "responsive layout" | Design works at multiple sizes |
| "print-ready" | High contrast, no transparency |
| "animated style" | Add motion suggestion arrows |
| "with legend" | Include color/shape legend |
| "time-annotated" | Add duration estimates to steps |
