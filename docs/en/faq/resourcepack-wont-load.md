---
title: "The resource pack doesn't load"
description: "Common issues about why a resource pack isn't loading"
---

There are multiple causes for why the resource pack doesn't load for you.  
A list of known causes is below:

## It won't load for me and I get an error in chat

- If you're using SkinsRestorer, read [This page please](/usage/compatability/skinsrestorer.md).
- Make sure no other plugin is installed that provides and/or manages resource packs.  
  If you're using such a plugin, try to disables its resource pack downloading.  
  You can then try to [merge the resource pack(s)](/usage/merge-resource-packs.md), if the plugin in question supports this.
- Make sure you haven't set a resource pack URL in your server's `server.properties` file.  
  The options in question should look like this:  
  ```properties
  resource-pack=
  resource-pack-sha1=
  ```
- The resource pack shouldn't be larger than 50MB (100MB for MC 1.15 and newer) in size.  
  You can try to compress the textures and music files before zipping it. ItemsAdder does this by default for you.
- Make sure the URL for the resource pack is a **direct download** (Makes your browser download it when opening it).  
  Any redirects such as bit.ly or sites that require you to press a button to download the file won't work.
- Check that you followed the [tutorial](/getting-started/first-install.md) in detail!

----

## My players can't see the textures

If you followed the tutorial properly but other players can't see the textures, you can try the following fixes:

- Tell them to check their `Server Resource Packs` settings in the server list.  
  If the setting says anything other than `Enabled` should they update it and save the changes.
- If it still doesn't work, tell them to remove and re-add the server to their list and to make sure `Server Resource Packs` is set to `Enabled` this time.
- Still not working? The players should close their client and navigate to their `server-resource-packs` folder.  
  The folder is usually found under `%appdata%/.minecraft/` but may differ depending on their OS and other factors.  
  In this folder, delete **everything**. Afterwards, start the client and try again. The client should now try to download the pack again.

If any of this still doesn't work, contact us for further help!