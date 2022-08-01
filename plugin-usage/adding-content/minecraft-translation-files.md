# 快捷的更改 Minecraft 的语言文件

{% hint style="info" %}
使用 Itemsadder 可以使你更快捷的覆盖 Minecraft 的语言文件
\(version 2.1.35+\)
{% endhint %}

### 用法示例

在该示例中，我将更改 ESC 菜单中的 **返回游戏** 文本

![](../../../.gitbook/assets/image%20%2831%29.png)

```yaml
info:
  namespace: ia_various_configs
minecraft_lang_overwrite:
  esc_menu_texts:
    entries:
      "menu.returnToGame": "Return to &aSurvival &fGamemode"
    languages:
      - ALL
```

### 语言文件


`languages` 用于列出你想要覆盖的语言文件，你可以只设置玩家群体所在地区的语言，当然你也可以设置为 `ALL` 这样子可以确保覆盖所有的语言文件.

### 条目

[完整的 Minecraft 语言文件条目](https://gist.github.com/LoneDev6/1df03fd853b2b244a7348216c8fa909d).



