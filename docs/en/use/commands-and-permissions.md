---
title: Commands & Permissions
description: List of ItemsAdder commands, permissions and what they are used for.
---

# Commands & Permissions

## Commands

### `/itemsadder`

> **Permission:** `ia.user.ia`  
> **Aliases:**
>
> - `/ia`

Main command of ItemsAdder.

----

### `/iarecipe`

Lets you see the recipe(s) of a particular item.

----

### `/iatexture`

!!! info ""
    **Usages:**
    
    - `/iatexture`
    - `/iatexture all`
    
    **Permissions:**
    
    - `ia.user.iatexture`
    - `ia.user.iatexture.all`
    
    **Description:**  
    Forces a refresh of the resource pack for your client.  
    Using `/iatexture all` will trigger a refresh for all online players.

----

### `/iaimage`

----

### `/iaget`

!!! info ""
    **Usages:**
    
    - `/iaget <item>`
    
    **Permissions:**
    
    - `ia.admin.iaget`
    
    **Description:**  
    Gives you a custom `<item>`.  
    `<item>` has to be in the format `namespace:item_id` (Tab completion is supported).

----

### `/iadrop`


----

### `/iaremove`


----

### `/iatag`


----

### `/iacustommodeldata`

> **Permission:** `ia.admin.custommodeldata`  
> **Arguments:**
> 
> - `<item>`

Gives you the currently used `CustomModelData` of a custom item.

----

### `/iagive <player> <item>` { #iagive-player-item data-toc-label="/iagive &lt;player&gt; &lt;item&gt;" }

> **Permission:** `ia.admin.iagive`  
> **Arguments:**
> 
> - `<player>` - The player to give an item to.
> - `<item>` - The item to give.

Gives another player a custom item.

----

### `/iaconfig`

> **Sub commands:**
> 
> - [`/iaconfig item delete <item>`](#iaconfig-item-delete-item)
> - [`/iaconfig item disable <item>`](#iaconfig-item-disable-item)
> - [`/iaconfig recipes deleteofitem <item>`](#iaconfig-recipes-deleteofitem-item)
> - [`/iaconfig recipes disableofitem <item>`](#iaconfig-recipes-disableofitem-item)
> - [`/iaconfig namespace delete <namespace>`](#iaconfig-namespace-delete-namespace)
> - [`/iaconfig namespace disable <namespace>`](#iaconfig-namespace-disable-namespace)

Allows modification of config files related to specific items.

#### `/iaconfig item delete <item>` { #iaconfig-item-delete-item data-toc-label="/iaconfig item delete &lt;item&gt;" }

> **Permission:** `ia.admin.iaconfig.item.delete`  
> **Arguments:**
> 
> - `<item>` - The item to delete.

COMPLETELY deletes the item from the config files. Be careful!

#### `/iaconfig item disable <item>` { #iaconfig-item-disable-item data-toc-label="/iaconfig item disable &lt;item&gt;" }

> **Permission:** `ia.admin.iaconfig.item.disable`  
> **Arguments:**
> 
> - `<item>` - The item to disable.

Disables an item, making it unobtainable in-game. This won't remove the item from the file.

#### `/iaconfig recipes deleteofitem <item>` { #iaconfig-recipes-deleteofitem-item data-toc-label="/iaconfig recipes deleteofitem &lt;item&gt;" }

> **Permission:** `ia.admin.iaconfig.recipes.deleteofitem`  
> **Arguments:**
> 
> - `<item>` - The item to remove related recipes of.

COMPLETELY deletes all recipes that either use or create the specified item. Be careful!

#### `/iaconfig recipes disableofitem <item>` { #iaconfig-recipes-disableofitem-item data-toc-label="/iaconfig recipes disableofitem &lt;item&gt;" }

> **Permission:** `ia.admin.iaconfig.recipes.disableofitem`  
> **Arguments:**
> 
> - `<item>` - The item to disable recipes of.

Disables all recipes that either use or create the specified item.

#### `/iaconfig namespace delete <namespace>` { #iaconfig-namespace-delete-namespace data-toc-label="/iaconfig namespace delete &lt;namespace&gt;" }

> **Permission:** `ia.admin.iaconfig.namespace.delete`  
> **Arguments:**
> 
> - `<namespace>` - The namespace to delete.

COMPLETELY deletes all items and recipes of those from the specified namespace. Be careful!

#### `/iaconfig namespace disable <namespace>` { #iaconfig-namespace-disable-namespace data-toc-label="/iaconfig namespace disable &lt;namespace&gt;" }

> **Permission:** `ia.admin.iaconfig.namespace.disable`  
> **Arguments:**
> 
> - `<namespace>` - The namespace to disable.

Disables all items and recipes of those from the specified namespace.

----

### `/iazip`

> **Permission:** `ia.`

Reloads the configuration files of ItemsAdder and all custom items, blocks, etc. before zipping the resource pack.  
If `self-host` or `auto-external-host` is used as hosting method will ItemsAdder also apply the newly created resource pack to all online players, otherwise will you need to upload the resource pack and update the URL for it before running `/iareload` followed by `/iatexture all`.

#### `/iaconfig `

> **Permission:** `ia.admin.iaconfig.`  
> **Arguments:**
> 
> - `` - 