# 挖掘方块掉落经验

{% hint style="info" %}
### 两种方法使自定义方块被挖掘后掉落经验
{% endhint %}

## 1. 在自定义方块中直接添加 drop_exp 属性

该方法具有缺陷，你只能将 drop_exp 属性 添加在自定义方块上，无法在原版方块上应用.

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

## 2. 添加经验掉落至掉落物中

该方法为最佳方法，因为你也可以将其应用在原版方块上，并且可以添加任意数量的经验设置.\
可使你的自定义方块拥有更多的随机性和动态性

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

