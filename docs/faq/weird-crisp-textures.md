---
title: "Textures in the distance look weird/crisp"
description: "A common issue among resource pack makers"
---

# Textures in the distance look weird/crisp

This issue is common among resource pack makers.

Minecraft disables mipmap when a texture with a dimension is used that isn't a multiple of 2.  
As an example, making a texture with dimensions 18x18 disables mipmap, while textures with dimensions 16x16 or a multiple of 2 of it (i.e. 32x32) won't.

To fix this, do the following:

- Open the latest logs of your client (Not server).  
  By default are they found under `%appdata%/.minecraft/logs/`.  
  This may be different depending on both your Operating system and if you're using custom Launchers or Launcher Profiles.
- Search for `limits mipmap level` inside the logs (++ctrl+f++ / ++cmd+f++)
- Identify the texture that causes this issue.  
  Example: `Texture mcicons:item/icon_toggle_off with size 30x30 limits mipmap level from 3 to 1`
- Fix the texture.  
  To fix it, make sure its dimension are 16x16 any any factor of 2 from it (32x32, 64x64, 128x128, 256x256, ...). You decide the size.
- Save the changes and re-zip the file.
  
    --8<-- "iazip.md"