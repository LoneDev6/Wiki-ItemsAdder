---
icon: square-check
---

# Plugin Compatibility Guide

Understanding how ItemsAdder interacts with other plugins is essential for creating a stable server environment. This section provides detailed information about compatible and incompatible plugins, along with configuration tips to ensure everything works smoothly together.

## Compatibility Overview

ItemsAdder interfaces with many other Minecraft plugins in various ways. Compatibility can be categorized into several levels:

| Compatibility Level | Description |
|---------------------|-------------|
| **Full Compatibility** | Works perfectly with ItemsAdder without any special configuration |
| **Compatible with Config** | Works with ItemsAdder, but requires specific configuration |
| **Partial Compatibility** | Some features work, others may conflict |
| **Incompatible** | Fundamental conflicts prevent these plugins from working correctly with ItemsAdder |

## Common Integration Points

ItemsAdder interacts with other plugins primarily through these systems:

1. **Custom Items and Blocks**: Plugins that handle items need to recognize ItemsAdder's custom items
2. **Resource Pack**: Plugins that modify or use custom resourcepacks may conflict
3. **Entity Management**: Plugins that spawn or modify entities may interact with ItemsAdder's custom entities
4. **World Generation**: Plugins that modify world generation may affect ItemsAdder's custom ore generation

## Integration Categories

We've organized compatibility information into specific categories to help you find what you need:

### Economy and Shop Plugins
Economy plugins like Vault, shop plugins, and auction house plugins often need to recognize ItemsAdder's custom items.

### World Management Plugins
WorldGuard, Towny, and similar plugins that control what can be placed and where need special consideration with ItemsAdder's custom blocks and furniture.

### Cosmetic and Visual Plugins
Other plugins that modify player appearance or add visual elements may need configuration to work with ItemsAdder.

### Custom Item Plugins
Plugins that add their own custom items may compete with ItemsAdder for CustomModelData values or item interactions.

## Compatibility Documentation

For detailed compatibility information, choose from these sections:

{% content-ref url="compatible/" %}
[Compatible Plugins](compatible/)
{% endcontent-ref %}

{% content-ref url="not-compatible.md" %}
[Incompatible Plugins](not-compatible.md)
{% endcontent-ref %}

## Troubleshooting Compatibility Issues

If you encounter issues between ItemsAdder and another plugin, try these general troubleshooting steps:

1. **Check Version Compatibility**: Ensure both plugins are updated to their latest versions
2. **Review Configuration**: Many compatibility issues can be resolved through proper configuration
3. **Isolate the Issue**: Test each plugin separately to identify exactly where the conflict occurs
4. **Check Load Order**: Some plugins may need to load before or after ItemsAdder (adjust in your server startup settings)
5. **Consult Documentation**: Check both plugins' documentation for known compatibility issues

## Contributing to Compatibility Information

If you discover a plugin that works well with ItemsAdder that isn't listed here, or find a solution to a compatibility issue, please consider [contributing to this wiki](../contribute/) to help other users.

