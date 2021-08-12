# 物品权限

## Example

```yaml
permission: myitem
```

为了让你的玩家能**制作**这件物品,你必须得给他们合成的权限:`ia.user.craft.myitem`  
要让你的玩家在`/ia`的GUI中看到这个自定义物品,你必须得给他们查看的权限:`ia.user.ia.myitem`

{% hint style="info" %}
别忘记给玩家权限`ia.user.ia`让他们使用`/ia`命令
{% endhint %}

