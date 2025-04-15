---
icon: bolt-lightning
---

# ItemsAdder v4: Version Guide

## Version Compatibility Overview

ItemsAdder now has two main version branches:

- **ItemsAdder v3**: Supports Minecraft 1.15 through 1.20.4
- **ItemsAdder v4**: Supports Minecraft 1.20.6 and newer versions

{% hint style="danger" %}
**Important:** Always use the correct ItemsAdder version for your Minecraft server version:

- For MC 1.15 - 1.20.4: Use ItemsAdder v3.x
- For MC 1.20.6+: Use ItemsAdder v4.x
  {% endhint %}

## Key Differences in v4

### New Features and Improvements

The v4 branch includes several significant improvements:

| Feature                    | v3 (1.15-1.20.4)                | v4 (1.20.6+)                                          |
| -------------------------- | ------------------------------- | ----------------------------------------------------- |
| Resource Pack System       | Legacy format                   | Optimized format with improved performance            |
| Item Display Support       | Limited                         | Full support for the new entity type                  |
| Resourcepack Apply Process | Standard                        | Enhanced reliability with 1.20.6+ improvements        |
| Dependencies               | Requires ProtocolLib + LoneLibs | Only requires ProtocolLib (LoneLibs no longer needed) |
| Compatibility Layer        | Complex multi-version support   | Streamlined single-version support                    |

### Technical Changes

- Removed legacy compatibility code for better stability
- Improved resourcepack application process
- Optimized internal systems for better performance
- Enhanced furniture placement and rendering
- Streamlined API for developers

## Migration Guide: v3 to v4

If you're upgrading your server to Minecraft 1.20.6+, follow these steps to migrate from ItemsAdder v3 to v4:

1. **Backup Everything**

   - Create a complete backup of your server
   - Save a copy of your `plugins/ItemsAdder` folder

2. **Update Your Server**

   - Update your server software to 1.20.6 or newer
   - Remove the LoneLibs plugin (no longer required for v4.0.9+)
   - Ensure ProtocolLib is updated to the latest version

3. **Install ItemsAdder v4**

   - Remove the old ItemsAdder v3 JAR file
   - Add the new ItemsAdder v4 JAR file to your plugins folder

4. **Configuration Compatibility**

   - Most configurations remain compatible between versions
   - Run `/iazip` after the update to regenerate the resourcepack
   - Test all custom content to ensure proper functionality

5. **Check for Issues**
   - Some custom models may need adjustments for the new version
   - Review the [troubleshooting guide](identify-why-textures-are-not-shown.md) if you encounter any issues

## Technical Rationale

### Why v4 Dropped Older Version Support

The decision to create a version-specific branch was made to:

1. **Reduce Bugs**: Remove complex compatibility code that caused instability
2. **Enable New Features**: Take advantage of Minecraft 1.20.6+ improvements
3. **Improve Performance**: Optimize internal systems without legacy constraints
4. **Speed Development**: Allow faster updates and new feature implementation
5. **Enhance Stability**: Focus on quality rather than backward compatibility

### About Multi-Version Support

Running a server with ViaVersion to support multiple client versions can cause various issues:

- Inconsistent behavior between client versions
- Visual glitches in custom content
- Compatibility problems with new features
- Performance impacts from version translation

{% hint style="info" %}
**Best Practice Recommendation**: For optimal performance and reliability, configure your server to require the same Minecraft version as your server software, rather than using ViaVersion to allow multiple client versions.
{% endhint %}

## Frequently Asked Questions

### Can I keep using v3 if I don't want to update my server?

Yes, ItemsAdder v3 will remain available for download and will continue to work on Minecraft servers running versions 1.15 through 1.20.4.

### Will my custom content work after upgrading to v4?

Most custom content will work without changes. However, you should thoroughly test everything after upgrading, as some advanced customizations might require adjustments.

### Do I need to remake my resourcepack for v4?

No, you don't need to remake your resourcepack. Running `/iazip` after the update will automatically regenerate the resourcepack in the correct format for v4.

### Will v3 receive updates in the future?

v3 will receive critical bugfix updates but will not receive new features. The development focus is now primarily on v4 and future versions.
