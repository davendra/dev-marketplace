# Go Bananas Claude Code Plugin

AI image generation skills for Claude Code using Google Gemini Flash/Pro models.

## Features

- **Image Generation** - Generate images from text prompts
- **Conversational Editing** - Edit images naturally: "add clouds", "make it brighter"
- **Character Consistency** - Save characters, generate unlimited consistent scenes
- **Product Marketing** - Create marketing images with saved product references
- **Style Presets** - Reusable prompt templates for consistent branding

## Installation

```bash
npm install -g @go-bananas/claude-plugin
```

## Setup

### 1. Get API Key

Sign up at [gobananasai.com](https://gobananasai.com) to get your API key.

### 2. Set Environment Variable

Add to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
export GO_BANANAS_API_KEY=sk_live_your_key_here
```

Then reload:
```bash
source ~/.zshrc
```

### 3. Restart Claude Code

The skill will be available automatically.

## Usage

Just ask Claude to generate images:

```
"Generate an image of a sunset over mountains"
"Create a professional headshot with studio lighting"
"Make a watercolor painting of a cat"
```

Claude will use the Go Bananas REST API to generate images.

## How It Works

1. You ask Claude to generate an image
2. Claude loads the `go-bananas` skill (~500 tokens)
3. Skill tells Claude to use REST API with your API key
4. Claude runs curl commands to generate images
5. You get image URLs in the response

**No MCP server needed** - this uses REST API for minimal token usage.

## Example Output

```json
{
  "images": [{
    "id": 42,
    "url": "https://pub-xxx.r2.dev/tenant/image.png",
    "width": 1024,
    "height": 1024
  }]
}
```

## Documentation

See `skills/go-bananas/` for detailed docs:

| File | Description |
|------|-------------|
| `SKILL.md` | Main skill with curl examples |
| `models.md` | Flash vs Pro comparison |
| `rest-api.md` | All REST API endpoints |
| `prompt-patterns.md` | Prompting best practices |
| `use-cases.md` | Workflow templates |

## Requirements

- API key from gobananasai.com
- `GO_BANANAS_API_KEY` environment variable set

## Links

- **Platform:** https://gobananasai.com
- **API Docs:** https://gobananasai.com/docs

## License

MIT
