---
title: Recipe Book issues
description: Why the Recipe Book doesn't work.
---

# Recipe Book issues

## Recipes with custom Items

Due to current Minecraft limitations is it currently not possible to display custom items in the Recipe Book, or make the book work with custom items as ingredients.  
Even with the custom items in your inventory will the recipes show as "unavailable" in the Recipe Book, due to it not being NBT-Sensitive/Aware (Ignores NBT data of items such as the CustomModelData property).

**This is not an ItemsAdder bug! Every plugin that uses the Recipe Book with custom Items is affected by this. This is nothing that can be fixed on ItemsAdder's end so please don't report it!**

## Getting kicked for too many recipes

Minecraft currently has a limited size for how many recipes can be send to the client on join. Because of this can you get kicked if too many Recipes are created.  
The amount of recipes is quite high, yet this is a possible issue.

This is nothing that can be fixed on ItemsAdder's end. Please see MC-TODO for more information.