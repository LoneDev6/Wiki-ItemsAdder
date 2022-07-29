# 物品权限

### 栗子

```yaml
permission: myitem
```

## 如何允许玩家合成指定物品?

请给予权限: `ia.user.craft.myitem`\


## 如何让玩家在 /ia 界面中能看见指定的物品?

若要允许玩家在 `/ia` 界面中能看见指定的物品，请给予权限: `ia.user.ia.myitem`

{% hint style="info" %}
Remember to give them permission `ia.user.ia` to let them use `/ia` command
{% endhint %}

{% hint style="warning" %}
Remember to create a [category ](../../../ia.md)for the `/ia` GUI.
{% endhint %}
