# NeverEnoughRecipes

## [Download Here](https://modrinth.com/plugin/neverenoughrecipes)

NeverEnoughRecipes supports recipes added by ItemsAdder for crafting, smelting and smithing (And other ones added by ItemsAdderAdditions).  
Any recipes added after the server startup (Using `/iazip`) require a reload of the plugin's Index using `/ner reload`.

## NER ItemsAdder Integration

The **NER ItemsAdder Integration** plugin can be used to fix some issues and also add support for additional features of NeverEnoughRecipes.

### Automatic Registry Reloading

NER ItemsAdder Integration automatically triggers a reload of NeverEnoughRecipes' registry whenever ItemsAdder is reloaded.

### Fake Recipe Fix

ItemsAdder creates fake recipes prefixed with `zzzfake_` for any recipe containing custom Items. These recipes will show in NeverEnoughRecipes, displaying the vanilla item instead of the custom ones.  
NER ItemsAdder Integration removes these fake recipes from NeverEnoughRecipes' registry.

### Namespace Search

The namespaces of any registered custom Item in ItemsAdder will be registered as a namespace that you can search for in NeverEnoughRecipes using the `@` prefix.

### Item Grouping

{% hint style="info" %}
Requires NeverEnoughRecipes 1.4.0 or newer
{% endhint %}

Item Groups can be created by adding the following to a new file, or an existing file in the contents folder:
```yaml
info:
  namespace: example # Recommended. Used in the group's ID

ner_item_groups:
  group1: # Can be any name. Used with namespace or a number.
    title: "My Item Group" # Supports MiniMessage formatting.
    animate_icon: true # Should it cycle through all items in the GUI? Default: true
    items: # List of custom Items.
      - "example:item1"
      - "example:item2"
      # ...
```

{% hint style="warning" %}
If no Namespace is specified will the plugin use a number starting at 1 as the namespace.  
This is to make sure it won't conflict and accidentally override other item groups of the same name.
{% endhint %}