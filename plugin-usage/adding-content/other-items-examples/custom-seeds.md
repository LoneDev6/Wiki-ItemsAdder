# Custom Seeds

## Some examples

```yaml
info:
  namespace: iasurvival
items:
  tomato_seeds:
    enabled: true
    display_name: display-name-tomato_seeds
    permission: iasurvival.crops.tomato_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/tomato_seeds
    specific_properties:
      seed:
        crop_block: SWEET_BERRY_BUSH
        results: 
          result_1: 
            item: iasurvival:tomato
            min_amount: 1
            max_amount: 2
            chance: 100
  garlic_seeds:
    enabled: true
    display_name: display-name-garlic_seeds
    permission: iasurvival.crops.garlic_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/garlic_seeds
    specific_properties:
      seed:
        crop_block: CARROTS
        results:
          result_1:
            item: iasurvival:garlic
            min_amount: 1
            max_amount: 2
            chance: 100
  chili_pepper_seeds:
    enabled: true
    display_name: display-name-chili_pepper_seeds
    permission: iasurvival.crops.chili_pepper_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/chili_pepper_seeds
    specific_properties:
      seed:
        crop_block: BEETROOTS
        results:
          result_1:
            item: iasurvival:chili_pepper
            min_amount: 1
            max_amount: 2
            chance: 100
  rice_seeds:
    enabled: true
    display_name: display-name-rice_seeds
    permission: iasurvival.crops.rice_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/rice_seeds
    specific_properties:
      seed:
        crop_block: WHEAT
        results:
          result_1:
            item: iasurvival:rice
            min_amount: 1
            max_amount: 2
            chance: 100
```

