# Go Bananas REST API Reference

HTTP endpoints for image generation when MCP is unavailable.

## Authentication

```bash
-H "X-API-Key: sk_live_your_key_here"
```

## Base URL

```
https://gobananasai.com
```

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/images | Generate images |
| GET | /api/images | List images with pagination |
| GET | /api/images/:id | Get image metadata |
| DELETE | /api/images/:id | Delete image |
| GET | /api/profile | Account info and quotas |
| GET | /api/usage | Usage statistics |
| GET | /api/sessions | List sessions |
| GET/POST/DELETE | /api/characters | Character management |
| GET/POST/DELETE | /api/style-presets | Style preset management |

## Generate Image

```bash
curl -X POST https://gobananasai.com/api/images \
  -H "X-API-Key: sk_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A sunset over mountains",
    "aspect_ratio": "16:9",
    "n": 2
  }'
```

**Request Parameters:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| prompt | string | Yes | Image description (max 8192 chars) |
| n | integer | No | Number of images (1-4, default 1) |
| aspect_ratio | string | No | square, portrait, landscape, 16:9, 9:16, 4:3, 3:4 |
| negative_prompt | string | No | What to avoid |
| style_preset_name | string | No | Apply saved style preset |
| model_id | string | No | gemini-flash-image (default) or gemini-pro-image |

**Response:**

```json
{
  "images": [{
    "id": 42,
    "url": "https://pub-xxx.r2.dev/tenant/image.png",
    "width": 1820,
    "height": 1024
  }],
  "session_id": "session-abc123"
}
```

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 429 | Rate limit exceeded (60 req/min default) |
| 500 | Server error |

Rate limit headers:
```
X-RateLimit-Remaining: 58
X-RateLimit-Reset: 1705320000
```
