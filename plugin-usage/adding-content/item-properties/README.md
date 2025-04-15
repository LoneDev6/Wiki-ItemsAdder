---
icon: list-check
---

# Item Properties

Item properties determine how your custom items function, appear, and interact within Minecraft. This section covers all the configuration options available when creating custom items with ItemsAdder.

## Property Categories

ItemsAdder's item configuration is organized into these main categories:

- **Basic Properties**: Essential settings like display name, lore text, and material type
- **Resource Properties**: Controls the visual appearance of your item
- **Permission Properties**: Manages who can use or access your items
- **Behavior Properties**: Defines how the item functions and interacts
- **Event Properties**: Configures actions that trigger when specific events occur
- **Template Properties**: Allows creation of reusable item configurations

## Configuration Structure

All item properties are defined using YAML syntax in configuration files. A typical item configuration follows this general structure:

```yaml
info:
  namespace: your_namespace
items:
  your_item_id:
    display_name: "Your Item Name"
    permission: your_namespace.your_item_id
    resource:
      material: DIAMOND_SWORD
      generate: true
      texture: item/your_texture.png
    # Additional properties...
```

## Getting Started

If you're new to item configuration:

1. Start with the [Basic Properties](basic.md) section to understand essential settings
2. Review the [Resource Properties](resource.md) to learn how to add custom textures
3. As you become more comfortable, explore the more advanced properties

Each subsection provides detailed explanations and examples to help you create items with precisely the functionality you need.
