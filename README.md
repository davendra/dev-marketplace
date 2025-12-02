<div align="center">
  <img src=".github/assets/logo-animated.svg" alt="Dev Marketplace" width="120" height="120">
  <h1>Dev Marketplace</h1>
  <p><strong>Claude Code Skills & Plugins Marketplace</strong></p>
  <p><em>Discover, install, and use powerful AI-powered skills for Claude Code</em></p>

  [![Claude Code](https://img.shields.io/badge/Claude-Code-5B21B6?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyeiIvPjwvc3ZnPg==&logoColor=white)](https://claude.ai)
  [![Google Gemini](https://img.shields.io/badge/Google-Gemini%202.5-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

  [![Skills Available](https://img.shields.io/badge/Skills-1-blueviolet)](#available-skills)
  [![Plugin Compatible](https://img.shields.io/badge/Plugin-Compatible-success)](#installation)
  [![REST API](https://img.shields.io/badge/REST-API-orange)](#go-bananas-features)

  <br/>

  <table>
  <tr>
  <td align="center" width="25%"><h3>1+</h3><p>Production-Ready<br/>Skills</p></td>
  <td align="center" width="25%"><h3>2</h3><p>AI Models<br/>(Flash & Pro)</p></td>
  <td align="center" width="25%"><h3>6</h3><p>Core Features<br/>Per Skill</p></td>
  <td align="center" width="25%"><h3>MIT</h3><p>Open Source<br/>License</p></td>
  </tr>
  </table>

</div>

---

## What is Dev Marketplace?

Dev Marketplace is a **distribution platform for Claude Code skills and plugins**. It provides a curated collection of production-ready AI tools that extend Claude Code's capabilities.

<table>
<tr>
<td width="50%">

### Why Use Marketplace Skills?

- **One-command installation** - Add skills instantly with `/plugin install`
- **Production-ready** - Tested, documented, and maintained
- **Seamless integration** - Works natively with Claude Code
- **Regular updates** - Skills are continuously improved

</td>
<td width="50%">

### How It Works

1. Add the marketplace to Claude Code
2. Browse available skills
3. Install what you need
4. Configure API keys
5. Start using powerful AI capabilities

</td>
</tr>
</table>

---

## Quick Start

### 1. Add the Marketplace

```bash
/plugin marketplace add https://github.com/davendra/dev-marketplace
```

### 2. Install a Skill

```bash
/plugin install go-bananas@dev-marketplace
```

### 3. Configure Your API Key

```bash
export GO_BANANAS_API_KEY=sk_live_your_key_here
```

Get your API key at [gobananasai.com](https://gobananasai.com)

---

## Available Skills

### Go Bananas - AI Image Generation

<div align="center">
  <img src=".github/assets/logo-animated.svg" alt="Go Bananas!" width="80" height="80">
  <p><strong>Generate stunning AI images with Google Gemini models</strong></p>
</div>

The flagship skill of Dev Marketplace. Go Bananas provides comprehensive AI image generation capabilities powered by Google Gemini 2.5 (Flash and Pro models).

| Feature | Description |
|---------|-------------|
| **Image Generation** | Create images from detailed text prompts |
| **Conversational Editing** | Natural language image refinement with session memory |
| **Character Consistency** | Save characters once, generate unlimited consistent scenes |
| **Product Marketing** | URL-based product references for e-commerce campaigns |
| **Style Presets** | Reusable prompt templates for consistent branding |
| **Batch Operations** | Generate multiple variations for A/B testing |

---

## Go Bananas Features

### Model Comparison

Choose the right model for your needs:

| Feature | Gemini Flash | Gemini Pro |
|---------|--------------|------------|
| **Speed** | 3-5 seconds | 8-15 seconds |
| **Resolution** | Up to 1K | Up to 4K |
| **Text Rendering** | Basic | Advanced (SOTA) |
| **Character References** | Up to 3 | Up to 5 |
| **Web Grounding** | No | Yes |
| **Best For** | Fast iteration | High-quality output |

### Supported Aspect Ratios

```
square, portrait, landscape
1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9
```

### Pro Model Exclusive Features

| Feature | Description |
|---------|-------------|
| **Resolution Tiers** | 1K, 2K, 4K output options |
| **14 Reference Images** | 6 with high-fidelity identity locking |
| **Text & Infographics** | State-of-the-art text rendering |
| **Thinking Mode** | Enhanced reasoning for complex prompts |
| **Google Search Grounding** | Factual accuracy with sources |
| **360 Turnaround** | Multiple angles from single reference |
| **Photo Restoration** | Repair damaged photos |
| **High-Fidelity Upscaling** | Small images to 4K |

---

## Installation & Setup

### Prerequisites

- Claude Code CLI installed
- Node.js 18+ (for npm installation method)
- API key from [gobananasai.com](https://gobananasai.com)

### Method 1: Marketplace Installation (Recommended)

```bash
# Add the marketplace
/plugin marketplace add https://github.com/davendra/dev-marketplace

# Install Go Bananas
/plugin install go-bananas@dev-marketplace
```

### Method 2: NPM Installation

```bash
# Install globally
npm install -g @go-bananas/claude-plugin
```

### Configure Environment

Add to your shell profile (`.bashrc`, `.zshrc`, etc.):

```bash
export GO_BANANAS_API_KEY=sk_live_your_api_key_here
```

---

## Usage Examples

### Basic Image Generation

```bash
curl -X POST https://gobananasai.com/api/images \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A serene mountain landscape at golden hour, photorealistic",
    "aspectRatio": "16:9"
  }'
```

### Continue Editing (Conversational)

```bash
# After generating an image, continue editing naturally
curl -X POST https://gobananasai.com/api/images/continue \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Add dramatic clouds and make the colors more vibrant"
  }'
```

### Character Workflow

```bash
# 1. Create a character
curl -X POST https://gobananasai.com/api/characters \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "RoboBot",
    "basePrompt": "friendly chrome robot mascot with blue LED eyes",
    "referenceImages": [42]
  }'

# 2. Generate scenes with your character
curl -X POST https://gobananasai.com/api/characters/RoboBot/generate \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "scene": "waving in a modern office setting"
  }'
```

### Product Marketing

```bash
# 1. Save a product reference
curl -X POST https://gobananasai.com/api/products \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Chrome Arrow",
    "imageUrl": "https://example.com/product.jpg"
  }'

# 2. Generate marketing images
curl -X POST https://gobananasai.com/api/products/Chrome%20Arrow/generate \
  -H "X-API-Key: $GO_BANANAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "scene": "on a marble desk with warm lighting"
  }'
```

---

## Documentation

Detailed documentation is available in the skill directories:

| Document | Description |
|----------|-------------|
| [SKILL.md](skills/go-bananas/SKILL.md) | Main skill guide with setup and examples |
| [models.md](skills/go-bananas/models.md) | Gemini Flash vs Pro comparison |
| [use-cases.md](skills/go-bananas/use-cases.md) | Workflow templates and examples |
| [prompt-patterns.md](skills/go-bananas/prompt-patterns.md) | Prompt engineering best practices |
| [rest-api.md](skills/go-bananas/rest-api.md) | REST API reference |

---

## Adding Your Own Skills

Want to contribute a skill to Dev Marketplace? Follow this structure:

```
skills/
└── your-skill-name/
    ├── .claude-plugin/
    │   └── plugin.json       # Plugin metadata
    ├── SKILL.md              # Main skill documentation
    ├── README.md             # Quick start guide
    ├── package.json          # NPM package (optional)
    └── [additional docs]     # Feature-specific documentation
```

### plugin.json Example

```json
{
  "name": "your-skill-name",
  "version": "1.0.0",
  "description": "Brief description of your skill",
  "author": {
    "name": "Your Name",
    "email": "your@email.com"
  },
  "category": "development"
}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Invalid API key" | Verify `GO_BANANAS_API_KEY` is set correctly |
| "Rate limit exceeded" | Wait 60 seconds and retry |
| "Quota exceeded" | Check your account at gobananasai.com |
| "Plugin not found" | Re-add marketplace and reinstall skill |
| "Connection failed" | Check internet connection and API status |

### Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad request - check your parameters |
| 401 | Unauthorized - invalid or missing API key |
| 429 | Rate limit exceeded - wait and retry |
| 500 | Server error - try again later |

---

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Powered by [Google Gemini API](https://ai.google.dev/)
- Built for [Claude Code](https://claude.ai)
- Implements Claude Code Plugin architecture

---

<div align="center">

## Ready to Get Started?

<table>
<tr>
<td align="center" width="33%">

### Add Marketplace

Get access to all skills

```bash
/plugin marketplace add \
  https://github.com/davendra/dev-marketplace
```

</td>
<td align="center" width="33%">

### Get API Key

Sign up for Go Bananas

[**Sign Up**](https://gobananasai.com)

</td>
<td align="center" width="33%">

### Read Docs

Learn how to use skills

[**Documentation**](#documentation)

</td>
</tr>
</table>

---

<p>
  <img src=".github/assets/logo-animated.svg" alt="Dev Marketplace" width="60" height="60">
  <br/>
  <strong>Dev Marketplace</strong>
  <br/>
  <sub>Claude Code Skills & Plugins Marketplace</sub>
  <br/>
  <sub>Curated AI tools for developers</sub>
</p>

</div>
