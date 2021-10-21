# Сбрасываемое exp из блоков

{% hint style="info" %}
### Есть 2 способа выдать exp из ваших блоков.
{% endhint %}

## 1. Добавьте падение exp непосредственно при создании блока

У этого есть недостаток, вы можете установить падение exp только для пользовательских блоков, а не для ванильных блоков.

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

## 2. Добавьте выпадения exp к лотам

Это лучший способ, потому что вы также можете применить его к ванильным блокам и добавить столько настроек exp, сколько захотите. Это позволяет вам добавить больше случайности и динамичности в ваши дропы.

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

