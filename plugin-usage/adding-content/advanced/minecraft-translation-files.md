# Minecraft标题返回修改

{% hint style="info" %}
通过ItemsAdder,你可以简单地覆盖Minecraft的默认翻译文件\(version 2.1.35+\)
{% endhint %}

## 使用实例

在这个栗子中,我改变了ESC菜单的返回游戏内容.

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

## 语言

语言属性用于列出你想改变内容的所有语言. 你只需把它设置为你的玩家群体的语言,但我决定把它设置为所有语言,这样你就能确保每个人都能看到自定义内容,尽管他们决定了客户端的语言.

## 列表

这是翻译内容的列表.你可以在这里找到[完整的列表](https://gist.github.com/LoneDev6/1df03fd853b2b244a7348216c8fa909d).

