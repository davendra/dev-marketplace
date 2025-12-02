---
name: go-bananas
description: AI image generation using Go Bananas! MCP server or REST API. Supports Google Gemini Flash (Standard) and Pro models. Use for image generation, editing, character consistency, product marketing, style presets, infographics, and usage analytics. Triggers on requests for AI images, photo generation, character design, product shots, marketing assets, or multi-scene storytelling.
---

# Go Bananas! Image Generation

AI-powered image generation with Google Gemini models, deployed on Cloudflare Workers.

> **Character Consistency**: For comprehensive guidance on creating consistent characters across scenes, see the [Character Consistency Master Guide](../../../docs/guides/CHARACTER_CONSISTENCY_MASTERGUIDE.md).

> **Product Marketing**: For comprehensive guidance on product marketing image generation, see the [Product Marketing Master Guide](../../../docs/guides/PRODUCT_MARKETING_MASTERGUIDE.md).

## Quick Start

### Option 1: MCP Server (Recommended)
If you have Go Bananas! MCP server configured, use the tools directly:

```
generate_image - Create new images from text prompts
continue_editing - Edit the last generated image conversationally
generate_with_character - Create scenes with saved characters
generate_with_product - Marketing images with product references
```

### Option 2: REST API
If using HTTP endpoints:

```bash
# Generate image
curl -X POST https://gobananasai.com/api/images \
  -H "X-API-Key: sk_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "A sunset over mountains", "aspect_ratio": "16:9"}'
```

## Models

| Feature | Standard (Flash) | Pro |
|---------|------------------|-----|
| Resolution | 1K | 1K, 2K, 4K |
| Reference images | 3 | 14 |
| Text rendering | Basic | Advanced |
| Web grounding | No | Yes |
| Speed | Fast | Quality-optimized |

**When to use:**
- **Standard**: Rapid prototyping, high-volume, simple edits
- **Pro**: Production assets, print materials, infographics, text-heavy content

## Golden Rules of Prompting

*From Google DeepMind's official Gemini Pro guide*

| Rule | Description |
|------|-------------|
| **1. Edit, Don't Re-roll** | If 80% correct, use `continue_editing` instead of regenerating |
| **2. Natural Language** | Write full sentences like briefing an artist, not tag soups |
| **3. Materiality** | Describe textures: "brushed steel", "soft velvet", "crumpled paper" |
| **4. Context** | Add "for whom": "for a luxury cookbook" changes everything |
| **5. Identity Locking** | "Keep facial features exactly the same as Image 1" |

**Bad**: `dog, park, 4k, realistic`
**Good**: "A golden retriever playing fetch in a sunny park, captured in photorealistic detail"

## Advanced Techniques

| Technique | Description |
|-----------|-------------|
| **Negative Prompts** | Tell model what NOT to include: "no date stamp", "no text", "not rustic" |
| **JSON Prompting** | Use structured JSON for complex scenes with precise control |
| **Prompt Evolution** | Start simple, iterate: "fashion photo" → "high-end fashion" → "winter fashion, daring" |
| **Upscaling** | Images as small as 150x150 → 4K with Pro model |
| **Multi-Reference** | Use images for style, branding, colors, object placement |
| **360 Turnaround** | Generate multiple angles from single reference |

## Core Capabilities

### 1. Image Generation
Generate images with prompts, style presets, and reference images.

### 2. Conversational Editing
Edit images naturally: "add clouds", "make it brighter", "change to night scene"

### 3. Character Consistency
Save characters once, generate unlimited consistent scenes across sessions.

### 4. Product Marketing
Save product images, generate unlimited marketing scenes.

### 5. Style Presets
Save and reuse prompt templates for consistent branding.

### 6. Pro Model Features (Advanced)
- **Text & Infographics**: SOTA text rendering, data visualization
- **Viral Thumbnails**: Identity + text + graphics in one pass
- **Storyboarding**: Multi-scene sequential art with consistent characters
- **Structural Control**: Sketches/wireframes to polished designs
- **2D↔3D Translation**: Floor plans to renders, 2D art to 3D
- **4K Textures**: Print-quality output for wallpapers and materials

## Reference Documentation

For detailed information, see:
- **mcp-tools.md** - All 27 MCP tools with parameters and examples
- **rest-api.md** - REST endpoints with curl examples
- **prompt-patterns.md** - Best practices for writing effective prompts
- **models.md** - Detailed Flash vs Pro feature comparison
- **use-cases.md** - Templates for common scenarios (marketing, infographics, characters)

## Example Workflows

### Creating a Character Campaign
```
1. generate_image - Create initial character design
2. create_character - Save character with reference images
3. generate_with_character - Generate multiple scenes
```

### Product Marketing
```
1. create_product_reference - Save product from URL
2. generate_with_product - Generate marketing scenes
3. continue_editing - Refine results
```

### Consistent Branding
```
1. create_style_preset - Save brand style
2. generate_image with style_preset_name - Apply to all generations
```

## Related Skills

- **[Workflow Diagrams](../workflow-diagrams/SKILL.md)** - Transform Mermaid syntax or natural language into professional flowcharts, infographics, timelines, and org charts using Pro model
