---
name: go-bananas
description: This skill provides AI image generation with Google Gemini models. Use when the user asks to generate images, create AI artwork, edit photos, make characters consistent across scenes, create product marketing images, apply style presets, or generate infographics. Triggers on requests for AI images, photo generation, character design, product shots, marketing assets, multi-scene storytelling, Gemini Flash, Gemini Pro, or Go Bananas.
version: 1.0.0
license: MIT
---

# Go Bananas Image Generation

AI-powered image generation with Google Gemini models via REST API.

## Setup

### 1. Get API Key
Obtain from gobananasai.com. Format: `sk_live_xxx` or `sk_test_xxx`

### 2. Set Environment Variable
```bash
export GO_BANANAS_API_KEY=sk_live_your_key_here
```

Or add to your shell profile (`~/.zshrc` or `~/.bashrc`).

## Generating Images

Use curl to call the REST API. Replace `$GO_BANANAS_API_KEY` with actual key if not set as env var.

### Basic Generation
```bash
curl -X POST https://gobananasai.com/api/images \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "A sunset over mountains", "aspect_ratio": "16:9"}'
```

### With Options
```bash
curl -X POST https://gobananasai.com/api/images \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A professional headshot",
    "aspect_ratio": "portrait",
    "n": 2,
    "negative_prompt": "blurry, low quality",
    "model_id": "gemini-pro-image"
  }'
```

### Response
```json
{
  "images": [{
    "id": 42,
    "url": "https://pub-xxx.r2.dev/tenant/image.png",
    "width": 1024,
    "height": 1024
  }],
  "session_id": "session-abc123"
}
```

## Common Operations

### Generate Image
```bash
curl -X POST https://gobananasai.com/api/images \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "YOUR PROMPT HERE"}'
```

### List Images
```bash
curl https://gobananasai.com/api/images \
  -H "X-API-Key: $GO_BANANAS_API_KEY"
```

### Get Image Info
```bash
curl https://gobananasai.com/api/images/42 \
  -H "X-API-Key: $GO_BANANAS_API_KEY"
```

### Check Usage
```bash
curl https://gobananasai.com/api/usage \
  -H "X-API-Key: $GO_BANANAS_API_KEY"
```

### Create Character (for consistent multi-scene)
```bash
curl -X POST https://gobananasai.com/api/characters \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "character_name": "Hero Henry",
    "base_prompt": "10-year-old boy with brown hair, blue eyes, red cape"
  }'
```

### Create Style Preset
```bash
curl -X POST https://gobananasai.com/api/style-presets \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Watercolor",
    "prompt": "watercolor painting style,"
  }'
```

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| prompt | string | Yes | Image description (max 8192 chars) |
| n | integer | No | Number of images (1-4, default 1) |
| aspect_ratio | string | No | square, portrait, landscape, 16:9, 9:16, 4:3, 3:4 |
| negative_prompt | string | No | What to avoid |
| model_id | string | No | gemini-flash-image (default) or gemini-pro-image |
| style_preset_name | string | No | Apply saved style preset |

## Model Selection

| Need | Use | Why |
|------|-----|-----|
| Quick iteration | Standard (default) | Fast 3-5 sec, 1K resolution |
| Production assets | Pro | Up to 4K, better quality |
| Text in images | Pro | Advanced text rendering |
| Infographics | Pro | Data visualization |

To use Pro model, add `"model_id": "gemini-pro-image"` to request.

## Critical Rules

### Always Do
- Use descriptive prompts with style, lighting, composition details
- Specify `negative_prompt` to prevent unwanted elements
- Use Pro model for text-heavy content or 4K resolution
- Check quota with `/api/usage` before batch operations

### Never Do
- Generate more than 4 images per call (API limit)
- Use Standard model for infographics or precise text
- Expose API keys in visible output

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 429 | Rate limit exceeded (60 req/min default) |
| 500 | Server error |

## Reference Files

Load only when needed:

| Need | Load |
|------|------|
| All endpoints | `rest-api.md` |
| Flash vs Pro details | `models.md` |
| Prompt techniques | `prompt-patterns.md` |
| Workflow templates | `use-cases.md` |

## Official Documentation

- Platform: https://gobananasai.com
- API Docs: https://gobananasai.com/docs
