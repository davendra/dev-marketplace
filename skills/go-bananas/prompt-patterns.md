# Prompt Engineering Patterns

Best practices for writing effective image generation prompts.

---

## Prompt Structure

### Basic Formula
```
[Subject] + [Action/Pose] + [Setting] + [Style] + [Technical Details]
```

### Example
```
"A confident business executive (subject)
standing with arms crossed (pose)
in a modern glass office (setting)
professional photography style (style)
shot on 85mm lens, soft natural light (technical)"
```

---

## Subject Description

### Be Specific About:
- **People**: Age, build, hair, clothing, expression
- **Objects**: Material, color, size, condition
- **Animals**: Breed, size, posture, fur/feathers

### Good Examples:
```
"30-year-old woman with curly red hair, wearing a navy blazer"
"Vintage brass telescope with weathered patina, ornate engravings"
"Golden retriever puppy with fluffy coat, sitting attentively"
```

### Avoid:
```
"A person" (too vague)
"Some kind of animal" (unclear)
"A thing on a table" (ambiguous)
```

---

## Composition Terms

### Camera Angles
| Term | Effect |
|------|--------|
| eye level | Natural, neutral |
| low angle / hero shot | Power, drama |
| high angle / bird's eye | Context, vulnerability |
| dutch angle | Tension, unease |
| over-the-shoulder | Conversation POV |
| extreme close-up | Detail, emotion |

### Framing
| Term | Shows |
|------|-------|
| wide shot | Full scene, context |
| medium shot | Waist up |
| close-up | Face/head |
| extreme close-up | Feature detail |

### Examples:
```
"low angle hero shot of a skyscraper against blue sky"
"extreme close-up of an eye reflecting city lights"
"wide establishing shot of a mountain village at dawn"
```

---

## Lighting Patterns

### Natural Light
| Term | Effect |
|------|--------|
| soft natural daylight | Clean, approachable |
| golden hour | Warm, romantic, nostalgic |
| blue hour | Cool, mysterious, twilight |
| overcast | Soft, even, no harsh shadows |
| backlit / silhouette | Drama, mystery |

### Studio Lighting
| Term | Effect |
|------|--------|
| Rembrandt lighting | Classic portrait drama (triangle on cheek) |
| rim lighting | Subject separation, drama |
| split lighting | Half shadow, moody |
| high key | Bright, optimistic, clean |
| low key | Dark, dramatic, cinematic |

### Creative Lighting
| Term | Effect |
|------|--------|
| neon lighting | Cyberpunk, modern |
| candlelight | Warm, intimate |
| volumetric fog | Atmospheric depth |
| lens flare | Cinematic, dreamy |

### Examples:
```
"portrait with Rembrandt lighting, soft shadows"
"neon-lit cyberpunk street scene, rain reflections"
"golden hour beach, warm backlit silhouettes"
```

---

## Lens Simulation

| Lens | Effect | Best For |
|------|--------|----------|
| 24mm wide angle | Expansive, slight distortion | Landscapes, architecture |
| 35mm | Natural, documentary feel | Street, environmental |
| 50mm | Human eye perspective | General purpose |
| 85mm f/1.4 | Flattering, background compression | Portraits |
| 135mm telephoto | Intimate, isolated subject | Portraits, wildlife |
| macro lens | Extreme detail | Small objects, textures |
| tilt-shift | Miniature effect | Architecture, cityscapes |

### Examples:
```
"shot on 85mm f/1.4, shallow depth of field, creamy bokeh"
"wide angle 24mm architectural shot, dramatic perspective"
"macro photography of dewdrops on a leaf, extreme detail"
```

---

## Depth of Field

| Effect | Prompt Language |
|--------|-----------------|
| Shallow | "shallow depth of field", "background blur", "bokeh" |
| Deep | "everything in focus", "deep focus", "sharp throughout" |
| Selective | "focus on [subject], blur background" |
| Bokeh | "creamy bokeh", "circular bokeh lights" |

### Examples:
```
"portrait with shallow depth of field, subject sharp, background soft bokeh"
"landscape photography, deep focus, everything sharp from foreground to horizon"
```

---

## Color & Mood

### Color Grading
| Term | Look |
|------|------|
| cinematic color grading | Film-like, processed |
| teal and orange | Hollywood blockbuster |
| muted pastels | Soft, artistic |
| high contrast black and white | Dramatic monochrome |
| vintage film | Nostalgic, warm |
| desaturated | Moody, serious |

### Mood Words
| Mood | Terms to Use |
|------|-------------|
| Happy | bright, vibrant, colorful, cheerful |
| Mysterious | dark, shadowy, foggy, ethereal |
| Romantic | soft, warm, dreamy, golden |
| Dramatic | high contrast, bold, intense |
| Peaceful | serene, calm, gentle, soft |
| Energetic | dynamic, bold, vivid, electric |

### Examples:
```
"cinematic color grading, teal and orange palette"
"moody atmosphere, desaturated colors, fog"
"vibrant and cheerful, bright saturated colors"
```

---

## Style References

### Photography Styles
```
"professional product photography"
"editorial fashion photography"
"documentary street photography"
"fine art photography"
"lifestyle photography"
```

### Art Styles
```
"watercolor painting style"
"oil painting, impressionist"
"digital illustration"
"concept art"
"comic book style"
"anime style"
"photorealistic 3D render"
```

### Specific Aesthetics
```
"minimalist design"
"maximalist, busy, detailed"
"retro 80s aesthetic"
"Art Deco style"
"Scandinavian design"
```

---

## Text in Images (Pro Model)

### Best Practices:
1. **Quote the text**: Put exact words in quotes
2. **Specify position**: top, bottom, center, left, right
3. **Describe font style**: serif, sans-serif, bold, italic
4. **Keep it simple**: Fewer words = better rendering

### Examples:
```
"Movie poster with bold title 'STELLAR DRIFT' in sans-serif at top center,
tagline 'Beyond the stars' in smaller italic below"

"Coffee shop menu board with 'ESPRESSO $3' in chalk lettering style"

"Infographic with headline 'CLIMATE FACTS' in bold blue,
statistics displayed in clean modern typography"
```

---

## Negative Prompts

Tell the model what to avoid:

### Common Negative Prompts:
```
"blurry, low quality, distorted"
"text, watermarks, logos"
"extra limbs, deformed"
"oversaturated, unrealistic colors"
"cluttered background"
```

### When to Use:
- Preventing common AI artifacts
- Excluding unwanted elements
- Maintaining quality standards
- Avoiding specific styles

---

## Complete Prompt Examples

### Professional Headshot
```
Prompt: "Professional corporate headshot of a confident 35-year-old
woman with shoulder-length dark hair, wearing a charcoal blazer,
subtle smile, modern office background with soft blur,
shot on 85mm f/1.4, soft natural window light from the left,
clean professional color grading"

Negative: "harsh shadows, over-edited, unnatural skin"
```

### Product Photography
```
Prompt: "Luxury watch on polished marble surface, dramatic lighting
with subtle reflections, 45-degree angle, shallow depth of field,
dark moody background, professional product photography,
high-end advertising style"

Negative: "busy background, flat lighting, low quality"
```

### Fantasy Scene
```
Prompt: "Epic fantasy castle on a cliff at sunset, golden hour
lighting, volumetric clouds, dramatic sky with purple and orange,
birds flying in distance, detailed stone architecture,
cinematic wide shot, concept art style, highly detailed"

Negative: "modern elements, people, text"
```
