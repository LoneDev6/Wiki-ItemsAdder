---
icon: earth-africa
---

# Minecraft 语言文件

使用 ItemsAdder，您可以轻松覆盖 Minecraft 默认的翻译文件。

### 使用示例：自定义 ESC 菜单

在这个示例中，我将更改 ESC 菜单中的返回游戏文本。

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

### languages

languages 属性用于列出您希望更改文本的所有语言。\
您应该将其设置为仅包含您的玩家群体使用的语言，但我决定将其设置为 ALL，这样您可以确保每个人都能看到自定义文本，无论他们选择的客户端语言是什么。

### entries

这是翻译文本的列表。\
您可以在此处找到完整列表（将 `1.19.3` 更改为您的版本）：

[https://github.com/InventivetalentDev/minecraft-assets/blob/1.19.3/assets/minecraft/lang/en\_us.json](https://github.com/InventivetalentDev/minecraft-assets/blob/1.19.3/assets/minecraft/lang/en\_us.json)
