---
icon: file-image
---

# Resourcepack Hosting Guide

ItemsAdder requires a resourcepack to display custom items, blocks, models, and textures to players. This section explains how to properly host and distribute your resourcepack to ensure all players can see your custom content.

## Understanding Resourcepack Hosting

For custom content to display correctly, your server must provide the resourcepack to players when they join. This process involves:

1. **Generating** the resourcepack with your custom content
2. **Hosting** the resourcepack file where players can download it
3. **Delivering** the download link to players when they join your server

## Hosting Methods

ItemsAdder supports several hosting methods, each with different advantages:

| Hosting Method                               | Advantages                                      | Best For                                    |
| -------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| [Self-hosting](resourcepack-self-hosting.md) | Fast updates, full control, no file size limits | Most servers with a dedicated IP            |
| [LobFile Hosting](lobfile-hosting.md)        | Simple setup, no server configuration needed    | Small to medium servers without port access |
| [DropBox](resourcepack-on-dropbox.md)        | Easy setup, reliable                            | Testing or small servers                    |
| [Google Drive](google-drive.md)              | Reliable, supports large files                  | Medium-sized servers                        |
| [OneDrive](onedrive.md)                      | Microsoft integration, reliable                 | Medium-sized servers                        |
| [No Host](no-host.md)                        | Manual distribution                             | Local/LAN servers or testing                |

## Choosing the Right Method

When deciding how to host your resourcepack, consider:

- **Server Setup**: Do you have access to open ports on your server?
- **File Size**: How large is your resourcepack? (Minecraft has a download limit of 250MB on 1.18+)
- **Update Frequency**: How often will you update custom content?
- **Technical Expertise**: Some methods require more technical knowledge than others

{% hint style="info" %}
**Recommended Approach**: Self-hosting is generally the best option if your server has a static IP address and you can open port 8080 (or another port). This method provides the fastest resourcepack updates since changes take effect immediately.
{% endhint %}

## Resourcepack Size Limits

Minecraft has built-in limits for server resourcepack downloads:

- **1.14**: 50MB maximum
- **1.15 - 1.17**: 100MB maximum
- **1.18+**: 250MB maximum

If your resourcepack exceeds these limits, you'll need to optimize it by:

- Compressing textures
- Reducing audio file sizes
- Removing unnecessary assets

## Common Issues and Troubleshooting

If players can't see custom textures, check these common issues:

- **Resourcepack URL**: Make sure it's directly downloadable (test in a browser)
- **Port Access**: For self-hosting, verify the port is open
- **File Size**: Ensure your pack doesn't exceed Minecraft's limits
- **HTTPS**: Most hosting methods require secure links (https://)
- **Client Settings**: Players must have server resourcepacks enabled in their client settings

For detailed troubleshooting, see the [Resourcepack is not loading correctly](../../faq/identify-why-textures-are-not-shown.md) guide.

## Next Steps

Select a hosting method from the sidebar that best fits your server's needs, then follow the step-by-step instructions to set it up. After configuring your hosting method, you'll need to run `/iazip` to generate and deploy your resourcepack.
