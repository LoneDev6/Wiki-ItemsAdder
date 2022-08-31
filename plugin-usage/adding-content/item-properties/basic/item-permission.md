# 物品权限

### 这是一个栗子

```yaml
permission: myitem
```

## 如何允许玩家合成指定物品?

请给予权限: `ia.user.craft.myitem`\


## 如何在 /ia 界面中能看见指定的物品?

若要允许玩家在 `/ia` 界面中能看见指定的物品，请给予权限: `ia.user.ia.myitem`

{% hint style="info" %}
记得给予玩家 `ia.user.ia` 权限, 以使用命令 `/ia` 打开界面
{% endhint %}

{% hint style="warning" %}
记得在 `/ia` 界面中创建一个 [分类](../../../ia.md).
{% endhint %}
