---
title: "How to make Slabs, Stairs, Tridents, Armor, etc"
description: "The tl;dr is: You can't Check this page for why."
---

# How to make Slabs, Stairs, Tridents, Armor, ...

For most of the below listed types is there usually the same answer: You can't.

## Slabs/Stairs

Custom stais slabs cannot be made due to a Minecraft Limitation showing sides usually covered by the block as transparent (Creating a X-Ray Bug). See MC-54254 for more information.

Another reason is the fact that you can't create custom hitboxes that stairs and slabs would have.

## Tridents

Custom Tridends can be made. However, the model used for the thrown Trident cannot be changed.  
This is a Minecraft limitation that cannot be fixed on ItemsAdder's end. See MC-155286 for more details.

## Armor

Minecraft Versions 1.16 and older don't allow to set custom textures/3D models on armor, unless you use Client-side Mods such as OptiFine for this.

Also, while Minecraft 1.17 and newer allow this feature, does it require modification of the vanilla shader engine, which will break when using custom shaders through mods such as OptiFine or Iris.

!!! info "Custom Armor Shader bug"
    
    === "With Shaders"
        ![shaders bug on](/assets/images/faq/shaders_bug_on.png)
    
    === "Without shaders"
        ![shaders bug on](/assets/images/faq/shaders_bug_off.png)

## Elytras

It currently isn't possible to display custom Elytra textures.