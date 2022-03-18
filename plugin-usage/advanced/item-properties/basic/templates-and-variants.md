# Templates and variants

## What are templates?

Templates are special items that won't appear ingame, they are used as properties holders for other items.\
They allow you to write common properties in one item and add them automatically to other items without constant copy and paste.

To create a template you have to set `template: true` in your item.

{% hint style="warning" %}
This is an experimental feature, let me know if something is not working correctly.\
You can see an usage example in [this addon](https://www.spigotmc.org/resources/furniture-itemsadder-more-furniture.93193/).
{% endhint %}

## What are variants?

Variants are items that will appear ingame and will inherit properties of template items.

To create a variant you have to set `variant_of: template name` in your item.

## Example

I want to create multiple furnitures which are equal but with different model.

```yaml
  template_wood_park_bench:
    template: true  # <---- HERE you can see I set this item as "template"
    display_name: ""
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench
    behaviours:
      furniture:
        entity: armor_stand
        small: true
        solid: true
        fixed_rotation: true
        hitbox:
          length: 1
          width: 2
          height: 1
          width_offset: 0.5
        placeable_on:
          walls: false
          ceiling: false
          floor: true
      furniture_sit:
        sit_height: 0.5
        sit_all_solid_blocks: true
        
        
  oak_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Oak wood Park Bench"
    permission: oak_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench
      
      
  spruce_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Spruce wood Park Bench"
    permission: spruce_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/spruce_wood_park_bench
      
      
  birch_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Birch wood Park Bench"
    permission: birch_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/birch_wood_park_bench
```

