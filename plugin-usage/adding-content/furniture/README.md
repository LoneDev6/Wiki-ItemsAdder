---
icon: lamp-floor
description: Tutorial on how to create your first furniture
---

# Furniture Creation Guide

Furniture items allow you to add decorative and functional 3D objects to your Minecraft world. These objects can be solid, emit light, function as chairs, and feature various other interactive elements.

## Understanding Furniture Types

ItemsAdder supports three main types of furniture entities, each with different placement capabilities:

| Entity Type | Best For | Rotation | Placement Options |
|------------|----------|----------|-------------------|
| `item_display` | Any furniture, most flexible | Fixed or dynamic | All surfaces with precise control |
| `armor_stand` | Chairs, plants, columns, fixed objects | Fixed | Mainly floor placement |
| `item_frame` | Wall decorations, ceiling fixtures | Adapts to surface | All surfaces with automatic orientation |

## Creating Your First Furniture

### Step 1: Create the Configuration File

Create a YAML configuration file in your namespace folder. In this example, we'll create a simple lamp named `lamp`:

{% code title="contents/my_items/configs/furniture_example.yml" %}
```yaml
info:
  namespace: my_items
items:
  lamp:
    display_name: "Modern Lamp"
    permission: my_items.decorative.lamp
    lore:
      - "A sleek modern lamp"
      - "Provides ambient lighting"
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        entity: item_display  # Using the most flexible entity type
        light_level: 13       # Light level (0-15, where 15 is brightest)
        solid: true           # Players can't walk through it
        placeable_on:
          floor: true         # Can be placed on the floor
          ceiling: false      # Cannot be placed on the ceiling
          walls: false        # Cannot be placed on walls
        hitbox:
          height: 1           # Standard 1-block hitbox
          length: 1
          width: 1
        sound:
          place:
            name: block.metal.place
          break:
            name: block.metal.break
```
{% endcode %}

### Key Configuration Properties

| Property | Description | Example Values |
|----------|-------------|----------------|
| `entity` | The type of entity used for the furniture | `item_display`, `armor_stand`, `item_frame` |
| `light_level` | Brightness of light emitted (0-15) | `0` (no light), `15` (maximum brightness) |
| `solid` | Whether players can walk through the furniture | `true`, `false` |
| `placeable_on` | Where the furniture can be placed | `floor`, `ceiling`, `walls` |
| `hitbox` | Physical dimensions of the furniture | Height, width, length (and offsets) |
| `sound` | Sounds played when placing or breaking | Any Minecraft sound ID |

### Step 2: Create the 3D Model in BlockBench

1. Open **BlockBench** and create a new "Java Block/Item" model
2. Design your furniture model (remember that 1 BlockBench unit = 1/16 of a block)
3. Set up display settings for how the item appears in hand

{% hint style="warning" %}
**Important orientation tip:** Make sure the north side of your model faces opposite to where you want the model to face when placed. Alternatively, add `opposite_direction: true` to your configuration.
{% endhint %}

![Create a Java Block/Item in BlockBench](<../../../.gitbook/assets/image (49) (1) (1) (1).png>)

### Step 3: Configure Model Display Settings

Depending on your chosen entity type, follow these guidelines:

#### For `item_display` (Recommended)

The most flexible option with precise control over position, rotation, and scale:

```yaml
furniture:
  entity: item_display
  display_transformation:
    transform: HEAD
    scale:
      x: 1.0
      y: 1.0
      z: 1.0
    translation:
      x: 0
      y: 0
      z: 0
```

#### For `armor_stand`

1. In BlockBench, select the **head icon** and then **small armorstand**
2. Shift your model down until it aligns with the armorstand base
3. In your configuration, specify:

```yaml
furniture:
  entity: armor_stand
  small: true  # Use a small armorstand (recommended for most furniture)
```

#### For `item_frame`

1. In BlockBench, select the **Image icon** 
2. Set the Z-offset to `-16`
3. In your configuration, specify:

```yaml
furniture:
  entity: item_frame
```

### Step 4: Export and Save the Model

1. In BlockBench, go to File → Export → Export Block/Item Model
2. Save the JSON file to: `contents/my_items/models/lamp.json` (matching your `model_path` value)
3. Make sure any textures are saved to the appropriate textures folder

### Step 5: Deploy Your Furniture

1. Run `/iazip` to update the resourcepack
2. Follow your [hosting method's instructions](../../resourcepack-hosting/) if needed
3. Get your new furniture item with `/iaget my_items:lamp`

## Creating Interactive Furniture

### Making a Chair

To create a chair that players can sit on, add the `furniture_sit` behavior:

```yaml
behaviours:
  furniture:
    # Your existing furniture settings...
  furniture_sit:
    sit_height: 0.5  # Adjust this value to control where players sit
```

### Creating Light Sources

To make a furniture item emit light:

```yaml
behaviours:
  furniture:
    light_level: 15  # 15 is the brightest, equivalent to a torch
```

## Advanced Furniture Properties

### Hitbox Configuration

The hitbox determines the physical space your furniture occupies. You can create furniture of different sizes:

```yaml
hitbox:
  length: 2       # Length in blocks (X-axis)
  width: 1        # Width in blocks (Z-axis)
  height: 1.5     # Height in blocks (Y-axis)
  length_offset: 0.5  # Shift hitbox on X-axis
  width_offset: 0     # Shift hitbox on Z-axis
  height_offset: 0    # Shift hitbox on Y-axis
```

{% hint style="info" %}
Use the `/iahitbox` command to visualize the hitbox of placed furniture. This helps identify and fix positioning issues.
{% endhint %}

### Item Display Transformations

For `item_display` furniture, you can precisely control positioning and scaling:

```yaml
display_transformation:
  transform: HEAD  # Display preset (HEAD, THIRDPERSON, etc.)
  right_rotation:
    axis_angle:
      angle: 180
      axis:
        x: 0
        y: 1
        z: 0
  translation:
    x: 0
    y: 0.92
    z: 0
  scale:
    x: 0.45
    y: 0.45
    z: 0.45
```

You can use [this online tool](https://misode.github.io/transformation/) to preview transformations.

## Limitations and Troubleshooting

{% hint style="warning" %}
### Entity-Specific Limitations

- **Item Frame Furniture:**
  - Only supports hitboxes where width and length are equal
  - Solid functionality requires server version ≥ 1.16
  - Invisible item frames require both server and client version ≥ 1.16

- **All Furniture Types:**
  - Maximum hitbox size is 3x3x3 for performance reasons
  - Non-solid furniture cannot receive interact events (only break events)
{% endhint %}

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Furniture facing the wrong direction | Add `opposite_direction: true` to your furniture configuration |
| Hitbox not aligned with the model | Adjust the offset values for length, width, and height |
| Model appears too large or small | Use `display_transformation` with `scale` values to resize (for `item_display`) |
| Unable to interact with furniture | Make sure `solid: true` is set if you need interaction events |

## Complete Example: Modern Table

Here's a complete example of a modern table configuration:

```yaml
info:
  namespace: my_items
items:
  modern_table:
    display_name: "Modern Table"
    permission: my_items.furniture.modern_table
    lore:
      - "Sleek modern design"
      - "Perfect for dining areas"
    resource:
      material: PAPER
      generate: false
      model_path: furniture/modern_table
    behaviours:
      furniture:
        entity: item_display
        solid: true
        fixed_rotation: true
        hitbox:
          length: 2
          width: 1
          height: 1
          length_offset: 0.5
        placeable_on:
          walls: false
          ceiling: false
          floor: true
        display_transformation:
          scale:
            x: 1.0
            y: 1.0
            z: 1.0
        sound:
          place:
            name: block.wood.place
          break:
            name: block.wood.break
```

## Next Steps

After creating your basic furniture, consider these advanced options:

- [Add a 2D icon](furniture-2d-icon.md) for your furniture in the inventory
- [Configure furniture permissions](furniture-permissions.md) for placement/removal
- [Make transparent furniture](transparent-furniture.md) for glass or other see-through objects
- [Add interaction events](furniture-execute-actions.md) to create interactive furniture

For more complex multi-part furniture, check out the [Furniture - Complex](../furniture-complex.md) guide.
