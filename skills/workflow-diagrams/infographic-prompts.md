# Infographic & Data Visualization Prompts

Ready-to-use templates for creating infographics, data visualizations, comparison charts, and statistical displays.

> **Pro Tip**: For infographics with real-time data, enable Google Search grounding:
> `enable_grounding: true`

---

## Template Structure

Every infographic prompt should include:

1. **Purpose statement** - What story the data tells
2. **Data points** - Numbers and labels
3. **Layout specification** - Arrangement and hierarchy
4. **Visual elements** - Icons, charts, illustrations
5. **Style specification** - Colors, fonts, mood

---

## Statistics Display Templates

### Single Metric Hero

```
Create a statistics infographic highlighting one key metric:

HERO METRIC:
- Number: "2.5M"
- Label: "Active Users"
- Context: "+150% from last year"

SUPPORTING METRICS (smaller, row below):
- "99.9% Uptime"
- "45ms Response Time"
- "180 Countries"

VISUAL:
- Large bold number in center
- Upward arrow icon for growth
- Subtle chart line in background showing trend
- Supporting metrics in pill-shaped badges

STYLE: Modern SaaS dashboard style, dark background (#1a1a2e),
accent color for hero metric (electric blue #00d4ff),
white text, subtle grid lines.
```

### Metric Dashboard Grid

```
Create a 2x2 metric grid infographic:

TOP LEFT:
- "Revenue" - "$4.2M" - chart icon - green
- Trend: "+18% MoM"

TOP RIGHT:
- "Customers" - "12,500" - people icon - blue
- Trend: "+234 this week"

BOTTOM LEFT:
- "Orders" - "8,903" - shopping bag icon - purple
- Trend: "Peak: 2.3K daily"

BOTTOM RIGHT:
- "Satisfaction" - "4.8/5" - star icon - gold
- Trend: "Based on 5K reviews"

LAYOUT: 2x2 grid with equal card sizes, mini sparkline in each card
STYLE: Clean dashboard, white cards on light gray background,
colored accents matching icons, Inter or SF Pro font.
```

### Progress/Achievement Display

```
Create a goal progress infographic:

TITLE: "Q4 2024 Goals Progress"

GOALS:
1. "Revenue Target" - 85% complete - $850K of $1M - green progress bar
2. "New Users" - 120% complete (exceeded!) - 12K of 10K - blue bar (overflow shown)
3. "Customer Satisfaction" - 95% complete - 4.75 of 5.0 - gold bar
4. "Feature Releases" - 60% complete - 6 of 10 - orange bar (needs attention)

VISUAL:
- Horizontal progress bars with percentage labels
- Checkmark icon for goals over 100%
- Warning icon for goals under 70%
- Target line marker on each bar

STYLE: Corporate report style, clean sans-serif,
progress bars with rounded ends, subtle shadows.
```

---

## Comparison Templates

### Side-by-Side Comparison

```
Create a comparison infographic: Free vs Pro plan

LAYOUT: Two columns, centered divider

LEFT COLUMN (Free):
Header: "Free" with cloud icon, gray accent
- "5 projects" - check icon
- "1GB storage" - check icon
- "Email support" - check icon
- "API access" - X icon (grayed)
- "Custom domain" - X icon (grayed)
- "Analytics" - X icon (grayed)
Price: "$0/month"
CTA: "Get Started"

RIGHT COLUMN (Pro):
Header: "Pro" with star icon, gold accent, "POPULAR" badge
- "Unlimited projects" - check icon
- "100GB storage" - check icon
- "Priority support" - check icon
- "Full API access" - check icon
- "Custom domain" - check icon
- "Advanced analytics" - check icon
Price: "$29/month"
CTA: "Upgrade Now" (highlighted button)

STYLE: Pricing table style, Pro column slightly elevated/highlighted,
checkmarks in green, X marks in red/gray, clean typography.
```

### Feature Matrix

```
Create a feature comparison matrix:

TITLE: "Cloud Providers Comparison 2024"

PROVIDERS (columns): AWS, Azure, GCP, DigitalOcean

FEATURES (rows):
- "Compute" - all have it (check)
- "Serverless" - AWS/Azure/GCP yes, DO partial
- "Kubernetes" - all yes
- "ML/AI Services" - AWS/Azure/GCP yes, DO no
- "Global CDN" - all yes
- "Free Tier" - all yes, varying amounts
- "Pricing Model" - text: "Pay-per-use" variations

VISUAL:
- Grid layout with alternating row colors
- Provider logos in header
- Checkmarks, X marks, and "partial" indicators
- Color-coded performance ratings where applicable

STYLE: Technical comparison chart, monospace headers,
clean lines, subtle branding colors for each provider.
```

### Before/After Comparison

```
Create a before/after comparison infographic:

TITLE: "Results After 6 Months"

BEFORE (left side, muted colors):
- "Page Load Time" - 4.5s
- "Bounce Rate" - 65%
- "Conversion Rate" - 1.2%
- "Monthly Revenue" - $45K

AFTER (right side, vibrant colors):
- "Page Load Time" - 1.2s (↓ 73%)
- "Bounce Rate" - 28% (↓ 57%)
- "Conversion Rate" - 4.8% (↑ 300%)
- "Monthly Revenue" - $128K (↑ 184%)

CENTER: Arrow or transformation indicator

VISUAL:
- Split screen design
- Before: grayscale or muted
- After: full color, highlighted
- Percentage change badges
- Trophy/star icon for biggest wins

STYLE: Marketing case study style, dramatic contrast,
success green for improvements.
```

---

## Timeline & Process Templates

### Horizontal Timeline

```
Create a horizontal timeline infographic:

TITLE: "Product Roadmap 2024"

TIMELINE:
Q1 (Jan-Mar): "Research & Planning"
- Icon: lightbulb
- Key deliverable: "Market Analysis Complete"

Q2 (Apr-Jun): "Development Phase 1"
- Icon: code brackets
- Key deliverable: "MVP Launch"

Q3 (Jul-Sep): "Beta Testing"
- Icon: users/testing
- Key deliverable: "1000 Beta Users"

Q4 (Oct-Dec): "Public Launch"
- Icon: rocket
- Key deliverable: "V1.0 Release"

CURRENT POSITION: Marker on Q3

VISUAL:
- Horizontal line with milestone markers
- Quarter boxes above/below alternating
- Icons inside circles on the timeline
- Current position highlighted (pulsing effect suggested)

STYLE: Modern roadmap, gradient line, soft shadows,
company brand colors, clean iconography.
```

### Vertical Process Steps

```
Create a vertical step-by-step infographic:

TITLE: "Getting Started Guide"

STEPS (top to bottom):
1. "Create Account"
   - Icon: user plus
   - Description: "Sign up with email or SSO"
   - Time: "~1 minute"

2. "Configure Workspace"
   - Icon: settings
   - Description: "Set up your team and preferences"
   - Time: "~5 minutes"

3. "Import Data"
   - Icon: upload
   - Description: "Connect sources or upload files"
   - Time: "~10 minutes"

4. "Invite Team"
   - Icon: users
   - Description: "Add collaborators to your workspace"
   - Time: "~2 minutes"

5. "Start Building"
   - Icon: rocket
   - Description: "Create your first project"
   - Time: "Ready!"

VISUAL:
- Numbered circles connected by vertical line
- Step cards extending to the right
- Estimated times in small badges
- Progress indicator showing completion

STYLE: Onboarding guide style, friendly colors,
rounded shapes, encouraging iconography.
```

---

## Data Chart Templates

### Bar Chart Infographic

```
Create a bar chart infographic:

TITLE: "Market Share by Company - 2024"

DATA:
- "Company A" - 35% - blue bar
- "Company B" - 28% - green bar
- "Company C" - 18% - orange bar
- "Company D" - 12% - purple bar
- "Others" - 7% - gray bar

VISUAL:
- Horizontal bars (easier to read labels)
- Company logos at start of each bar
- Percentage labels at end of bars
- Subtle grid lines behind bars

EXTRAS:
- Year-over-year change indicators (+/-)
- "Leader" badge on top company
- Source citation at bottom

STYLE: Business report, clean lines,
bars with subtle gradients, professional palette.
```

### Pie/Donut Chart Infographic

```
Create a donut chart infographic:

TITLE: "Budget Allocation 2024"

CENTER: Total budget "$2.5M"

SEGMENTS:
- "Engineering" - 40% - $1M - blue
- "Marketing" - 25% - $625K - green
- "Operations" - 20% - $500K - orange
- "R&D" - 10% - $250K - purple
- "Admin" - 5% - $125K - gray

VISUAL:
- Donut chart with thick ring
- Legend to the right with colored squares
- Each segment slightly separated
- Dollar amounts shown in legend
- Percentage labels on segments

STYLE: Financial report style, professional colors,
clean legend, subtle shadows on segments.
```

### Line Chart Trend

```
Create a line chart infographic:

TITLE: "Monthly Active Users - 12 Month Trend"

DATA POINTS:
Jan: 45K → Feb: 52K → Mar: 48K → Apr: 61K →
May: 75K → Jun: 89K → Jul: 102K → Aug: 115K →
Sep: 128K → Oct: 145K → Nov: 162K → Dec: 180K

VISUAL:
- Smooth line chart with area fill below
- Monthly markers as dots on line
- Y-axis: 0 to 200K
- X-axis: Jan to Dec
- Trend line (dotted) showing projection

ANNOTATIONS:
- "Feature Launch" callout at April spike
- "Marketing Campaign" callout at August
- Growth percentage badge: "+300% YoY"

STYLE: Dashboard style, gradient fill under line,
subtle grid, annotation callouts with arrows.
```

---

## Icon-Based Infographics

### Icon Statistics Grid

```
Create an icon-based statistics infographic:

TITLE: "Our Impact in 2024"

GRID (3x2):
Row 1:
- Globe icon + "180 Countries" + "Global Reach"
- Users icon + "2.5M Users" + "Active Monthly"
- Clock icon + "99.9% Uptime" + "Reliability"

Row 2:
- Heart icon + "4.8 Rating" + "Customer Love"
- Lightning icon + "45ms" + "Response Time"
- Shield icon + "SOC2 Certified" + "Security"

VISUAL:
- Large icons with numbers below
- Small descriptive text beneath
- Consistent icon style (line/filled/duotone)
- Optional: subtle icon background circles

STYLE: Modern SaaS, duotone icons,
primary color for icons, dark text on light background.
```

### Process Icons Flow

```
Create an icon-based process flow:

TITLE: "How It Works"

STEPS:
1. Upload icon → "Upload Your Data"
2. Arrow
3. Gear/process icon → "We Process It"
4. Arrow
5. Chart icon → "Get Insights"
6. Arrow
7. Download icon → "Export Results"

VISUAL:
- Large icons in circles
- Connecting arrows between
- Step numbers above icons
- Short descriptions below
- Optional: decorative background pattern

STYLE: Landing page style, oversized icons,
smooth gradients, plenty of whitespace.
```

---

## Real-Time Data Templates

### Live Data Infographic (with Grounding)

```
Create an infographic with current data (enable search grounding):

TITLE: "Top Programming Languages 2024"

FETCH CURRENT DATA FOR:
- TIOBE Index rankings
- GitHub usage statistics
- Stack Overflow survey results

DISPLAY:
1. Ranking list with language logos
2. Bar chart showing usage percentage
3. Year-over-year change indicators
4. Trend arrows (rising/falling)

VISUAL:
- Leaderboard-style numbered list
- Progress bars for each language
- Language-specific colors/logos
- "Updated: [date]" timestamp

NOTE: Use enable_grounding: true for real-time data

STYLE: Tech industry infographic, dark mode,
neon accent colors, code-inspired typography.
```

### Market Data Display

```
Create a market data infographic (with grounding):

TITLE: "Tech Stocks Performance"

COMPANIES: Apple, Microsoft, Google, Amazon, Meta

DATA TO FETCH:
- Current stock price
- Daily change (% and $)
- Market cap
- 52-week high/low

DISPLAY:
- Ticker symbols with current prices
- Up/down arrows with percentage
- Mini sparkline for each stock
- Market cap comparison bar

STYLE: Financial dashboard, red/green for down/up,
ticker-tape aesthetic, real-time feel.
```

---

## Style Quick Reference

### Color Palettes for Infographics

```
BUSINESS:
- Primary: #1a73e8 (blue)
- Success: #34a853 (green)
- Warning: #fbbc05 (yellow)
- Error: #ea4335 (red)
- Neutral: #5f6368 (gray)

TECH/MODERN:
- Primary: #00d4ff (cyan)
- Secondary: #7b61ff (purple)
- Accent: #ff6b6b (coral)
- Dark: #1a1a2e
- Light: #f8f9fa

MINIMAL:
- Primary: #000000
- Secondary: #666666
- Accent: #0066ff
- Background: #ffffff
- Border: #e0e0e0
```

### Layout Guidelines

| Type | Best Layout |
|------|-------------|
| Statistics | Grid (2x2, 3x3) |
| Comparison | Side-by-side columns |
| Timeline | Horizontal or vertical line |
| Process | Sequential with arrows |
| Hierarchy | Tree or pyramid |
| Distribution | Pie/donut or bar chart |

### Font Pairing Suggestions

```
HEADERS: Bold sans-serif (Montserrat, Poppins, Inter)
NUMBERS: Monospace or tabular (Roboto Mono, SF Mono)
BODY: Regular sans-serif (Open Sans, Source Sans Pro)
ACCENT: Display font (Playfair for elegance)
```
