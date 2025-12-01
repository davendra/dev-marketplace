# Use Case Templates

Ready-to-use prompt templates for common scenarios.

---

## Marketing & Advertising

### Social Media Post
```json
{
  "prompt": "Instagram-ready product shot of [PRODUCT] on clean white background,
soft studio lighting with subtle shadows, minimalist composition,
professional e-commerce photography style",
  "aspect_ratio": "square",
  "negative_prompt": "cluttered, busy background, harsh shadows"
}
```

### Instagram Story
```json
{
  "prompt": "[PRODUCT/SERVICE] promotional graphic with bold headline '[TEXT]',
vibrant gradient background in brand colors [COLORS],
modern minimalist design, space for text overlay",
  "aspect_ratio": "9:16",
  "system_instruction": "Clean social media design aesthetic"
}
```

### YouTube Thumbnail
```json
{
  "prompt": "Eye-catching YouTube thumbnail for video about [TOPIC],
bold expressive face showing [EMOTION], bright saturated colors,
dramatic lighting, text-friendly composition with space on right",
  "aspect_ratio": "16:9",
  "negative_prompt": "small details, cluttered, dark"
}
```

### Billboard Advertisement
```json
{
  "prompt": "4K billboard advertisement for [BRAND/PRODUCT],
hero product shot left of center, dramatic lighting,
large text area on right for headline '[TEXT]',
[BRAND COLORS] color scheme, premium luxury feel",
  "aspect_ratio": "16:9",
  "model_id": "gemini-pro-image"
}
```

---

## Product Photography

### E-commerce Product Shot
```json
{
  "prompt": "Professional product photography of [PRODUCT],
45-degree angle on seamless white background,
soft even lighting, subtle reflection on surface,
sharp focus, clean commercial style",
  "aspect_ratio": "square",
  "negative_prompt": "shadows, color cast, reflections"
}
```

### Lifestyle Product Shot
```json
{
  "prompt": "[PRODUCT] in natural lifestyle setting,
[ENVIRONMENT: kitchen/office/bedroom/outdoors],
warm natural light from window, shallow depth of field,
product in focus, lifestyle photography style",
  "aspect_ratio": "4:3"
}
```

### Hero Product Shot
```json
{
  "prompt": "Premium hero shot of [PRODUCT] floating against
[dark/gradient/abstract] background, dramatic rim lighting,
reflections and highlights emphasizing form,
advertising campaign quality, luxury brand aesthetic",
  "aspect_ratio": "16:9",
  "model_id": "gemini-pro-image"
}
```

---

## Infographics (Pro Model Recommended)

### Data Infographic
```json
{
  "prompt": "Modern infographic about [TOPIC]:
Title '[TITLE]' in bold sans-serif at top,
3 main sections with icons: [SECTION1], [SECTION2], [SECTION3],
key statistics: [STAT1], [STAT2], [STAT3],
color palette: [PRIMARY], [SECONDARY], [ACCENT],
clean minimalist design, easy to scan",
  "aspect_ratio": "9:16",
  "model_id": "gemini-pro-image"
}
```

### Process/Workflow Diagram
```json
{
  "prompt": "Step-by-step workflow diagram showing [PROCESS]:
5 connected steps flowing left to right,
Step 1: [STEP], Step 2: [STEP], Step 3: [STEP], Step 4: [STEP], Step 5: [STEP],
clean icons for each step, numbered circles,
[COLOR] and white color scheme, professional business style",
  "aspect_ratio": "16:9",
  "model_id": "gemini-pro-image"
}
```

### Comparison Chart
```json
{
  "prompt": "Side-by-side comparison infographic:
[ITEM1] vs [ITEM2],
Feature rows: [FEATURE1], [FEATURE2], [FEATURE3], [FEATURE4],
checkmarks for positive, X for negative,
clean professional layout, easy to read",
  "aspect_ratio": "4:3",
  "model_id": "gemini-pro-image"
}
```

---

## Character Design

### Character Design Sheet
```json
{
  "prompt": "Character design reference sheet for [CHARACTER NAME]:
Main full-body pose center, face close-up top right,
action pose bottom right, color palette swatches in corner,
[ART STYLE] style, detailed costume design,
Character: [DETAILED DESCRIPTION]",
  "aspect_ratio": "16:9"
}
```

### Character Portrait
```json
{
  "prompt": "Portrait of [CHARACTER DESCRIPTION],
[EXPRESSION] expression, looking [DIRECTION],
[LIGHTING: dramatic/soft/rim] lighting,
[ART STYLE: anime/realistic/cartoon/painterly] style,
detailed face and eyes, [BACKGROUND]",
  "aspect_ratio": "portrait"
}
```

### Multi-Character Scene (with saved characters)
```json
{
  "character_names": ["Character1", "Character2"],
  "scene_prompt": "[ACTION/INTERACTION] in [SETTING],
[MOOD] atmosphere, [TIME OF DAY],
both characters clearly visible and recognizable",
  "aspect_ratio": "landscape"
}
```

---

## Children's Content

### Children's Book Illustration
```json
{
  "prompt": "Children's book illustration:
[SCENE DESCRIPTION] in [SETTING],
[CHARACTER] doing [ACTION],
[ART STYLE: watercolor/digital/collage] style,
bright cheerful colors, friendly welcoming mood,
age-appropriate for [AGE] years",
  "aspect_ratio": "4:3"
}
```

### Educational Illustration
```json
{
  "prompt": "Educational illustration teaching [CONCEPT]:
Clear visual explanation of [TOPIC],
labeled diagram style, friendly cartoon characters,
bright colors, engaging for children,
simple and easy to understand",
  "aspect_ratio": "16:9"
}
```

---

## Architecture & Real Estate

### Architectural Visualization
```json
{
  "prompt": "Photorealistic architectural rendering of [BUILDING TYPE]:
[STYLE: modern/traditional/industrial] design,
[VIEW: exterior front/aerial/interior],
[TIME: morning/sunset/night] lighting,
surrounding landscape, people for scale,
professional architectural visualization quality",
  "aspect_ratio": "16:9",
  "model_id": "gemini-pro-image"
}
```

### Interior Design
```json
{
  "prompt": "[ROOM TYPE: living room/bedroom/kitchen] interior design:
[STYLE: minimalist/scandinavian/industrial/luxury] aesthetic,
[MATERIALS: wood/marble/concrete] surfaces,
natural light from large windows, plants for warmth,
professional interior photography, inviting atmosphere",
  "aspect_ratio": "16:9"
}
```

---

## Food & Restaurant

### Food Photography
```json
{
  "prompt": "Professional food photography of [DISH]:
[PLATING STYLE] presentation on [PLATE/SURFACE],
[LIGHTING: natural/studio] light from [DIRECTION],
shallow depth of field, steam/condensation if appropriate,
appetizing and delicious looking, editorial quality",
  "aspect_ratio": "square"
}
```

### Menu Design
```json
{
  "prompt": "Restaurant menu design for [RESTAURANT NAME]:
[CUISINE TYPE] menu layout,
'[DISH NAME]' with price in elegant typography,
food photography style images,
[COLOR SCHEME] colors, [STYLE] design aesthetic",
  "aspect_ratio": "3:4",
  "model_id": "gemini-pro-image"
}
```

---

## UI/UX Design

### App Screen Mockup
```json
{
  "prompt": "Mobile app UI mockup for [APP TYPE]:
[SCREEN: login/dashboard/profile/feed] screen,
[STYLE: iOS/Material/custom] design system,
[COLOR] primary color, clean modern typography,
intuitive layout, [DEVICE: iPhone/Android] frame",
  "aspect_ratio": "9:16"
}
```

### Website Hero Section
```json
{
  "prompt": "Website hero section design:
Bold headline area, clear call-to-action button,
[BACKGROUND: gradient/image/abstract] background,
modern SaaS/startup aesthetic,
clean whitespace, professional web design",
  "aspect_ratio": "16:9"
}
```

---

## Editing Workflows

### Photo Enhancement
```json
{
  "image_id": [ID],
  "prompt": "Enhance this image: improve lighting,
add subtle color grading for [MOOD] mood,
sharpen details, keep natural looking"
}
```

### Background Change
```json
{
  "image_id": [ID],
  "prompt": "Replace the background with [NEW BACKGROUND],
maintain subject lighting consistency,
seamless natural blend"
}
```

### Style Transfer
```json
{
  "image_id": [ID],
  "prompt": "Transform this image into [STYLE] style,
maintain subject recognizability,
[STYLE DETAILS]"
}
```

---

## Batch Generation Tips

### Consistent Series
For a series of images with consistent style:

1. **Create a style preset first:**
```json
{
  "name": "Campaign Style",
  "prompt": "professional studio lighting, brand colors, clean composition",
  "system_instruction": "Consistent corporate branding",
  "aspect_ratio": "square"
}
```

2. **Generate with preset:**
```json
{
  "prompt": "[Subject-specific prompt]",
  "style_preset_name": "Campaign Style"
}
```

### A/B Testing Variations
Generate multiple options:
```json
{
  "prompt": "[Your prompt]",
  "n": 4
}
```
Then use `continue_editing` on the best result.
