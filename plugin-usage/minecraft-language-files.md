---
icon: earth-africa
---

# Minecraft 语言文件

你可以轻松覆写 Minecraft 的默认翻译文件。

### 示例用法：自定义esc菜单

在这个例子中，我将更改ESC菜单的“回到游戏”文本。

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

### `languages`

`languages` 属性用于列出要更改文本的所有语言。\
你应该只将其设置为玩家基础的语言，但我决定将其设置成 ALL，这样你就可以确保每个人都能看到自定义文本，尽管他们决定使用客户端语言。

### `entries`

这是所有的翻译文本。您可以在[此处](https://github.com/InventivetalentDev/minecraft-assets/blob/1.21.4/assets/minecraft/lang/en_us.json)找到完整列表。