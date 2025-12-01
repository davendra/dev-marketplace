# Model Comparison: Standard vs Pro

## Quick Reference

| Feature | Standard (Flash) | Pro |
|---------|------------------|-----|
| Model ID | `gemini-flash-image` | `gemini-pro-image` |
| Resolution | 1K (1024px) | 1K, 2K, 4K (up to 4096px) |
| Reference Images | Up to 3 | Up to 14 |
| Character Consistency | Up to 3 people | Up to 5 people |
| Text Rendering | Basic | Advanced (multilingual) |
| Web Search Grounding | No | Yes |
| Speed | Fast (~3-5 sec) | Quality-optimized (~8-15 sec) |

## When to Use Each

### Use Standard (Flash)
- Rapid iteration on concepts
- High-volume generation
- Quick edits and adjustments
- Speed is critical
- Simple single-subject images
- Web-only output

### Use Pro
- Final production assets
- Print materials (need 4K)
- Text-heavy content (infographics, posters, menus)
- Multi-person character consistency (4-5 people)
- Complex multi-image compositions (up to 14 refs)
- Data-grounded visualizations (web search)
- Marketing/advertising campaigns

## Pro Resolution Options

| Setting | Size | Use Case |
|---------|------|----------|
| 1K | 1024px | Web, quick iteration |
| 2K | 2048px | High-quality web, presentations |
| 4K | 4096px | Print, billboards, large displays |

## Text Rendering

**Standard:** Basic text, simple words, English primarily. May have legibility issues.

**Pro:** Advanced multilingual text, multi-line support, stylized fonts. Best for infographics, posters, technical diagrams.

**Pro text tips:**
1. Put text in quotes
2. Specify font style
3. Indicate position
4. Keep text concise

## Web Grounding (Pro Only)

Pro can search the web for current data:
- Weather with real temperatures
- Stock charts with current prices
- Sports scores and statistics
- Geographic/map data

## Recommended Workflow

```
1. Iterate with Standard - develop concept (fast, cheap)
2. Refine prompt based on results
3. Generate final with Pro - production quality
```

## Selecting Model

```json
{
  "prompt": "Your prompt here",
  "model_id": "gemini-pro-image"
}
```

Default is `gemini-flash-image` (Standard) if not specified.
