---
icon: spinner-scale
---

# Resourcepack is not Loading Correctly

{% hint style="danger" %}

#### Please read this page CAREFULLY before asking for support.

Most issues can be easily resolved by following the troubleshooting steps on this page.
{% endhint %}

## Common Symptoms

If you're experiencing any of these issues, you likely have a resourcepack loading problem:

- Resourcepack not loading at all
- Error message shown fullscreen when a player joins
- Black and purple textures (missing texture pattern)
- Models not loading correctly
- Pack failing to load with error message
- Custom sounds not playing
- Infinite resourcepack loading screen

## Diagnostic Steps

### Step 1: Check Server Logs

Server logs can provide important clues about what's going wrong:

1. Run the command `/iazip` to regenerate the resourcepack
2. Wait for the command to complete
3. Check your server console or open the file `logs/latest.log` using a text editor (e.g., [VSCode](https://code.visualstudio.com/))
4. Look for errors or warnings related to ItemsAdder or resourcepack generation

### Step 2: Check Client Logs

Client-side logs often show exactly which files failed to load and why:

{% hint style="warning" %}

## Always use the Vanilla client for troubleshooting!

The log provided by the vanilla game is cleaner and makes it easier to identify problems.
{% endhint %}

#### For any Minecraft launcher:

1. Join the server and let the pack attempt to load
2. Open your Minecraft GAME log file (not server logs) located at: `%appdata%\.minecraft\logs\latest.log`
3. Look for errors related to resourcepack loading, missing textures, or broken JSON files

#### For the official Minecraft launcher:

1. Enable output log in launcher settings:
   ![](<../.gitbook/assets/image_(135).png>)

2. Join the server and review the output log for errors:
   ![](<../.gitbook/assets/json_errors (1) (1) (1) (1).png>)

The example above shows two broken files: `gem_vending_machine` and `whitebathroom_sink`. The error indicates the JSON files are broken, likely containing invalid syntax or corruption.

## Common Issues and Solutions

### Invalid File Naming

- Avoid using **UPPERCASE**, **spaces**, or **special characters** in:
  - Item IDs
  - Namespaces
  - Texture filenames (.png)
  - Model filenames (.json)
- Example: Use `custom_sword` instead of `CustomSword` or `Custom Sword`

### Plugin Conflicts

- If you have **SkinsRestorer**, please [check the compatibility guide](../compatibility-with-other-plugins/compatible/skinsrestorer.md)
- If you have other plugins using custom resourcepacks:
  - Disable their resourcepack feature, or
  - [Merge the resourcepacks](../plugin-usage/merge-resourcepacks.md)
- Ensure you don't have a resourcepack set in `server.properties`

### Size Limitations

Minecraft has built-in size limits for server resourcepacks:

- 50MB on Minecraft 1.14
- 100MB on Minecraft 1.15-1.17
- 250MB on Minecraft 1.18+

To reduce pack size:

- Compress textures using tools like [TinyPNG](https://tinypng.com/)
- Optimize audio files
- Remove unused content

### Hosting Issues

- Run `/iainfo` and verify the resourcepack URL works in your browser:
  - It should directly download the .zip file when accessed
  - If you see a download page with buttons, it's not a direct URL
- Follow the correct [hosting tutorial](../plugin-usage/resourcepack-hosting/) for your method
- If using [self-hosting](../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md), ensure the port is open

### Client-Side Problems

If players can't load the resourcepack:

- Ensure they've enabled server resourcepacks in their client settings: [Guide](http://imgur.com/a/SG0AU)
- Avoid opening GUIs or books on join, as this can hide the resourcepack prompt
  - Consider using [ResourcePackBroadcast](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/) to handle resourcepack timing
- Try increasing the `delay-ticks` in `config.yml` to `10` or higher
- Have players clear their cache by deleting everything in `%appdata%/.minecraft/server-resource-packs`

## Advanced Troubleshooting

If you've tried all the steps above and still have issues:

1. Create a test server with only ItemsAdder and its dependencies
2. Use a minimal configuration to determine if the issue is with specific content
3. Check if your server host has any restrictions on file hosting or HTTP/HTTPS requests
4. Verify your network doesn't block the resourcepack URL

## Getting Support

If you've followed all steps and still have problems:

1. Gather your server log, client log, and `/iainfo` output
2. Take screenshots of the issue
3. Provide details about your server version, plugin version, and hosting method
4. [Join our Discord community](https://discord.gg/4dfnpUK) or [visit our forum](https://forum.devs.beer/)
