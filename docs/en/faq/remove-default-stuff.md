---
title: How do I remove default stuff from ItemsAdder?
description: "If you want to remove default stuff from ItemsAdder, check this page."
---

If you want to remove (some of) ItemsAdder's default items, blocks, etc. without it re-adding them on each `/iazip` can you do the following:

1. Open the `config.yml` of ItemsAdder and change the following settings to `false`:  
   ```yaml
   extract-default-items: false
   extract-default-resources: false
   ```
2. Delete the folders you no longer need.
    
    !!! warning "Important!"
        Certain items/materials are **required** by ItemsAdder and should NOT be deleted.  
        Deleting the `minecraft`, `mcguis` or `mcicons` folders will result in ItemsAdder not working as expected.
    
    - **Twitter Emojis**  
      `plugins/ItemsAdder/data/items_packs/twitteremojis/`  
      `plugins/ItemsAdder/data/resource_pack/twitteremojis/`
    - **Magiccraft Example**  
      `plugins/ItemsAdder/data/items_packs/magiccraft/`  
      `plugins/ItemsAdder/data/resource_pack/magiccraft/`
    - **Minecraft Emojis**  
      `plugins/ItemsAdder/data/items_packs/mcemojis/`  
      `plugins/ItemsAdder/data/resource_pack/mcemojis/`
    - **ItemsAdder Items**  
      `plugins/ItemsAdder/data/items_packs/itemsadder/`  
      `plugins/ItemsAdder/data/resource_pack/itemsadder/`
    - **Example Items**  
      `plugins/ItemsAdder/data/items_packs/example/`  
      `plugins/ItemsAdder/data/resource_pack/example`
      
    --8<-- "iazip.md"