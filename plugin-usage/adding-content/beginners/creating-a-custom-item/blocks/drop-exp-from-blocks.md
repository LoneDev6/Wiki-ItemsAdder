# 挖取掉落经验

{% hint style="info" %}
### 有两种方法可以让你的自定义方块掉落经验.
{% endhint %}

## 1. 在自定义方块配置中直接添加drop\_exp \[经验掉落\]

当然在这有一个缺点,只允许Itemsadder物品使用drop\_exp,而原版的方块并不能.

```yaml
  ruby_block:
    display_name: display-name-ruby_block
    permission: ruby_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/ruby_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: REDSTONE_BLOCK
        break_tools_whitelist:
        - PICKAXE
        - pickaxe
    events:
      placed_block:
        break:
          drop_exp:
            chance: 100
            min_amount: 0
            max_amount: 3
```

## 2. Add the exp drop to loots

This is the best way because you can also apply this to vanilla blocks types and you can add as many as exp settings you want. This allows you to add more randomness and dynamicity to your drops.

```yaml
loots:
  blocks:
    ruby_ore:
      type: itemsadder:ruby_ore
      items:
        ruby:
          item: itemsadder:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
      exp:
        exp_1:
          min_amount: 0
          max_amount: 3
          chance: 100
```

