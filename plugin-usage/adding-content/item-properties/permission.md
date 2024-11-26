# 权限

### 示例物品权限

```yaml
  my_armor_simple_helmet:
    display_name: my_armor_simple helmet
    permission_suffix: my_armor_simple
    resource:
      generate: true
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
        color: '#ff0001'
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
```

## 如何让物品在 `/ia` 界面显示

要让你的玩家能够在 `/ia` 界面看到这个物品，你需要给玩家 `ia.user.ia.seeitem.my_armor_simple` 权限。

{% hint style="info" %}
记住给玩家 `ia.user.ia` 权限，以让玩家能够使用 `/ia` 指令。
{% endhint %}

{% hint style="warning" %}
记住为 `/ia` 界面创建一个[目录](../../ia.md)。
{% endhint %}

## 配方权限

### 示例

**权限**: `ia.user.recipe.iasurvival.cooked_sausage`

```yaml
info:
  namespace: iasurvival
recipes:
  cooking:
    cooked_sausage:
      permission: iasurvival.cooked_sausage
      ingredient:
        item: iasurvival:sausage
      machines:
        - FURNACE
        - BLAST_FURNACE
      exp: 1
      cook_time: 200
      result:
        item: iasurvival:cooked_sausage
        amount: 1
```

## 查看更多权限

{% content-ref url="../../permissions.md" %}
[权限](../../permissions.md)
{% endcontent-ref %}
