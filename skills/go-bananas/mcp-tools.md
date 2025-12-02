# Go Bananas! MCP Tools Reference

Complete documentation for all 27 MCP tools organized by category.

---

## Image Generation & Editing (7 tools)

### generate_image
Generate new images from text prompts.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| prompt | string | Yes | Text description of image to generate (max 8192 chars) |
| n | integer | No | Number of images (1-4, default 1) |
| aspect_ratio | string | No | square, portrait, landscape, 16:9, 9:16, 4:3, 3:4 |
| negative_prompt | string | No | What to avoid in the image |
| system_instruction | string | No | Style guidance for the model |
| reference_images | array | No | URLs or R2 keys for reference (max 3 Standard, 14 Pro) |
| style_preset_id | integer | No | Apply saved style preset by ID |
| style_preset_name | string | No | Apply saved style preset by name |
| model_id | string | No | gemini-flash-image (default) or gemini-pro-image |

**Example:**
```json
{
  "prompt": "A professional headshot of a confident business executive",
  "aspect_ratio": "portrait",
  "negative_prompt": "blurry, low quality",
  "n": 2
}
```

### edit_image
Edit a specific image by its database ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| image_id | integer | Yes | Database ID of image to edit |
| prompt | string | Yes | Editing instruction |
| negative_prompt | string | No | What to avoid |
| aspect_ratio | string | No | New aspect ratio |

**Example:**
```json
{
  "image_id": 42,
  "prompt": "Add storm clouds in the sky"
}
```

### continue_editing
Edit the last generated/edited image in the session (conversational editing).

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| prompt | string | Yes | Editing instruction |
| negative_prompt | string | No | What to avoid |
| aspect_ratio | string | No | New aspect ratio |

**Example:**
```json
{
  "prompt": "make the colors more vibrant"
}
```

### edit_uploaded_image
Edit a user-uploaded image (two-step workflow).

**Step 1:** Use `upload_image_for_editing` to upload the image
**Step 2:** Use this tool with the returned image_id

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| image_id | integer | Yes | ID from upload_image_for_editing |
| edit_prompt | string | Yes | Editing instruction |
| negative_prompt | string | No | What to avoid |
| aspect_ratio | string | No | Aspect ratio |

### upload_image_for_editing
Upload an image from URL for editing.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| image_url | string | Yes | Public URL to image |
| file_name | string | No | Original filename |
| mime_type | string | No | Image MIME type |

**Example:**
```json
{
  "image_url": "https://i.imgur.com/xxxxx.jpg"
}
```

### get_image_info
Get metadata about a specific image including edit history.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| image_id | integer | Yes | Database ID |

### get_session_history
List all images in the current session.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| limit | integer | No | Max images to return (default 50, max 200) |
| offset | integer | No | Pagination offset |

### search_images
Search across all images with filters.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters.prompt_substring | string | No | Search in prompt text |
| filters.operation_type | string | No | 'generate' or 'edit' |
| filters.aspect_ratio | string | No | Filter by aspect ratio |
| filters.created_after | string | No | ISO timestamp |
| filters.created_before | string | No | ISO timestamp |
| limit | integer | No | Max results (default 15, max 50) |
| sort_order | string | No | 'newest' (default) or 'oldest' |

---

## Style Presets (4 tools)

### create_style_preset
Save a reusable prompt template.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Preset name (1-128 chars) |
| prompt | string | No | Prompt prefix to prepend |
| negative_prompt | string | No | Default negative prompt |
| system_instruction | string | No | Style guidance |
| aspect_ratio | string | No | Default aspect ratio |

**Example:**
```json
{
  "name": "Watercolor Art",
  "prompt": "watercolor painting style,",
  "system_instruction": "Artistic watercolor aesthetic with soft edges",
  "aspect_ratio": "portrait"
}
```

### list_style_presets
Browse all saved style presets.

**Parameters:** None

### update_style_preset
Update an existing style preset.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | integer | No | Preset ID (or use name) |
| name | string | No | Preset name (or use id) |
| new_name | string | No | Rename the preset |
| prompt | string | No | Update prompt (null to clear) |
| negative_prompt | string | No | Update negative prompt |
| system_instruction | string | No | Update system instruction |
| aspect_ratio | string | No | Update aspect ratio |

### delete_style_preset
Delete a style preset.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | integer | No | Preset ID (or use name) |
| name | string | No | Preset name (or use id) |

---

## Character System (7 tools)

### create_character
Save a character design for multi-scene consistency.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| character_name | string | Yes | Character name (1-100 chars) |
| base_prompt | string | Yes | Core appearance description (10-2000 chars) |
| description | string | No | Optional notes |
| negative_prompt | string | No | What to avoid |
| system_instruction | string | No | Style guidance |
| reference_image_ids | array | No | IDs of reference images (max 10) |
| preferred_aspect_ratio | string | No | Default aspect ratio |
| tags | array | No | Organization tags (max 20) |

**Example:**
```json
{
  "character_name": "Hero Henry",
  "base_prompt": "10-year-old boy with messy brown hair, bright blue eyes, wearing a red superhero cape and blue mask",
  "reference_image_ids": [42, 43],
  "tags": ["children", "superhero"]
}
```

### list_characters
Browse character library with search and pagination.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| search | string | No | Search by name/description |
| sort_by | string | No | 'name', 'created', 'used', 'recent' |
| limit | integer | No | Max results (default 50, max 100) |
| offset | integer | No | Pagination offset |

### get_character
Get full character details.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| character_id | integer | No | Character ID (or use name) |
| character_name | string | No | Character name (or use id) |

### update_character
Modify an existing character.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| character_id | integer | No | Character ID (or use name) |
| character_name | string | No | Character name (or use id) |
| new_character_name | string | No | Rename character |
| base_prompt | string | No | Update appearance |
| description | string | No | Update notes |
| reference_image_ids | array | No | Replace references |
| tags | array | No | Replace tags |

### delete_character
Remove a character from library.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| character_id | integer | No | Character ID (or use name) |
| character_name | string | No | Character name (or use id) |

### generate_with_character
Generate a scene with a saved character.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| character_id | integer | No | Character ID (or use name) |
| character_name | string | No | Character name (or use id) |
| scene_prompt | string | Yes | Scene description (5-1500 chars) |
| additional_details | string | No | Extra details |
| aspect_ratio | string | No | Override character default |
| override_negative_prompt | string | No | Override character negative |

**Example:**
```json
{
  "character_name": "Hero Henry",
  "scene_prompt": "flying over a city at sunset"
}
```

### generate_with_multiple_characters
Generate a scene with 2-5 characters together.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| character_ids | array | No | Array of character IDs (2-5) |
| character_names | array | No | Array of character names (2-5) |
| scene_prompt | string | Yes | Scene with all characters (10-1500 chars) |
| additional_details | string | No | Extra details |
| aspect_ratio | string | No | Default: landscape |

**Example:**
```json
{
  "character_names": ["Hero Henry", "Villain Victor"],
  "scene_prompt": "having an epic battle on a rooftop"
}
```

---

## Product System (5 tools)

### create_product_reference
Save a product image from URL for marketing.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| product_name | string | Yes | Product name (1-100 chars) |
| product_url | string | Yes | URL to product image |
| product_description | string | No | Product description |
| tags | string | No | Comma-separated tags |

**Example:**
```json
{
  "product_name": "Chrome Arrow Decor",
  "product_url": "https://example.com/products/arrow.jpg",
  "product_description": "Sleek chrome arrow wall decoration",
  "tags": "home-decor,wall-art,chrome"
}
```

### list_product_references
Browse saved products.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| search | string | No | Search products |
| page | integer | No | Page number (1-based) |
| page_size | integer | No | Results per page (max 100) |

### get_product_reference
Get full product details.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | integer | No | Product ID (or use name) |
| product_name | string | No | Product name (or use id) |

### delete_product_reference
Remove a product from library.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | integer | No | Product ID (or use name) |
| product_name | string | No | Product name (or use id) |

### generate_with_product
Generate marketing images with saved product.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| product_id | integer | No | Product ID (or use name) |
| product_name | string | No | Product name (or use id) |
| scene_prompt | string | Yes | Marketing scene description |
| additional_details | string | No | Extra styling |
| aspect_ratio | string | No | 1:1, 9:16, 16:9, 4:3, 3:4 |
| negative_prompt | string | No | What to avoid |
| number_of_images | integer | No | 1-4 images |

**Example:**
```json
{
  "product_name": "Chrome Arrow Decor",
  "scene_prompt": "on a modern minimalist desk with a laptop and coffee",
  "additional_details": "warm lighting, cozy atmosphere",
  "aspect_ratio": "16:9"
}
```

---

## Analytics & Help (3 tools)

### get_usage_stats
Summarize usage for analytics and quota tracking.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| range_start | string | No | ISO start timestamp |
| range_end | string | No | ISO end timestamp |
| granularity | string | No | 'hour', 'day', 'week' |
| operation | string | No | Filter by operation |
| lookback_days | integer | No | Days to look back (1-90) |
| limit | integer | No | Max buckets (default 100) |

### get_account_summary
Comprehensive account overview.

**Parameters:** None

**Returns:**
- Library statistics (characters, presets, products)
- Image statistics
- Storage usage
- Session activity
- Most used references

### get_help
Get help documentation for tools and workflows.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| tool_name | string | No | Specific tool help |
| category | string | No | generation, editing, characters, products, styles, analytics |
| workflow | string | No | consistent_characters, conversational_editing, product_marketing, style_branding |
