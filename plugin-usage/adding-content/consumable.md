---
icon: burger-cheese
---

# 可消耗物品

{% hint style="warning" %}
**资源包托管**

记住在开始前决定你[托管资源包的方式](../resourcepack-hosting/)。\
我**建议**你选择**更快与更简单**的**自行托管**，当然你也可以使用 **Dropbox** 及相似方式。
{% endhint %}

## 经典方法

{% hint style="warning" %}
适用于 Minecraft 1.21.1 及以下, ItemsAdder 4.0.7 及以下
{% endhint %}

### 食物

```yaml
info:
  namespace: my_items
items:
  my_food:
    enabled: true
    display_name: My Food
    resource:
      material: COOKED_PORKCHOP
      generate: true
      textures:
        - item/my_food
    events:
      eat:
        feed:
          amount: 7
          saturation: 4
```

### 饮品

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: POTION
      generate: true
      textures:
        - item/my_drink
    specific_properties:
      potion:
        type: WATER
        color: WHITE
    item_flags:
      - HIDE_POTION_EFFECTS
    events:
      drink:
        feed:
          amount: 1
          saturation: 0
```

#### 可选（口渴）

如果你在使用默认的口渴条，你也可以增加一个饮用事件来提升口渴条

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: POTION
      generate: true
      textures:
        - item/my_drink
    specific_properties:
      potion:
        type: WATER
        color: WHITE
    item_flags:
      - HIDE_POTION_EFFECTS
    events:
      drink:
        increment_player_stat:
          name: thirst
          amount: 5
        feed:
          amount: 1
          saturation: 0
```

## 现代方式

{% hint style="warning" %}
适用于 Minecraft 1.21.4+， ItemsAdder 4.0.8+.

仅在你的服务器接受 1.21.2 的客户端，且无任意更低版本内容时使用。
{% endhint %}

### 食物

```yaml
info:
  namespace: my_items
items:
  my_food:
    enabled: true
    display_name: My Food
    resource:
      material: PAPER
      generate: true
      textures:
        - item/my_food
    consumable:
      nutrition: 7
      saturation: 4
```

### 饮品

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: PAPER
      generate: true
      textures:
        - item/my_drink
    consumable:
      nutrition: 1
      saturation: 0
```

#### 可选（口渴）

如果你在使用默认的口渴条，你也可以增加一个饮用事件来提升口渴条

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: PAPER
      generate: true
      textures:
        - item/my_drink
    consumable:
      nutrition: 1
      saturation: 0
    events:
      drink:
        increment_player_stat:
          name: thirst
          amount: 5
```