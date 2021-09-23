# 物品权限

## Example

```yaml
permission: myitem
```

## How to allow crafting?

为了让你的玩家能**制作**这件物品,你必须得给他们合成的权限:`ia.user.craft.myitem`  

## How to make the item visible in the /ia gui on to some users?

要让你的玩家在`/ia`的GUI中看到这个自定义物品,你必须得给他们查看的权限:`ia.user.ia.myitem`

{% hint style="info" %}
别忘记给玩家权限`ia.user.ia`让他们使用`/ia`命令
{% endhint %}

{% hint style="warning" %}
Remember to create a [category ](../../../../ia.md)for the `/ia` GUI.
{% endhint %}

