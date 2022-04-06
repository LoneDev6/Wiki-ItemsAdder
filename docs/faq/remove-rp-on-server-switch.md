---
title: Remove Resource pack when switching servers
description: A guide on how you can remove the resource pack when switching servers.
---

# Remove Resource pack when switching servers on a Network

When you use ItemsAdder on a Network and want to remove/disable the Resource pack when switching to a different server, will you need to do the following steps:

1. Download the [Blank Resource pack][blank-rp]
2. Upload it to a hosting of your choice such as f.e. https://mc-packs.net
3. Copy the **direct download URL** (++ctrl+c++ / ++cmd+c++)
4. Open the `server.properties` of the server where you want to NOT have the ItemsAdder Resource pack and update the following settings:
    
    ```properties
    # (1)
    resource-pack=https://download.mc-packs.net/pacl/1a234bcdef.zip
    
    # (2)
    resource-pack-sha1=1a234bcdef
    ```
    
    1.  Paste the download URL you copied here (++ctrl+v++ / ++cmd+v++)
    2.  If possible, add a valid SHA1 code.

5. Save the changes and restart the server.
6. Repeat the steps 4 and 5 on any other server that should have default textures.