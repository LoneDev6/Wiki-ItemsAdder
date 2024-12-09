# ExecutableItems

## [此处下载](https://www.spigotmc.org/resources/custom-items-free-executable-items-1-12-1-17.77578/)

## 如何将 ExecutableItem 物品与 ItemsAdder 物品连接

{% hint style="warning" %}
更新 **ITEMSADDER** 版本至 **2.2.20+**\
更新 **ExecutableItems** 版本至 **4.2.3.5+**
{% endhint %}

## 创建 ItemsAdder 物品

### 正常创建.yml文件，并添加 ItemsAdder 物品的所需属性

本例中我会将名为 `executableitem_test` 的 **ItemsAdder** 物品与来自 ExecutableItem 示例文件的 `split` 物品连接。

```yaml
info:
  namespace: example
items:
  executableitem_test:
    display_name: executableitem_test
    permission: executableitem_test
    executableitem:
      id: Free_Spit
    resource:
      material: IRON_INGOT
      generate: true
      textures:
      - item/executableitem_test.png
    durability:
      max_custom_durability: 1324
```

{% hint style="success" %}
如你所见，我设置了叫做 \*\*`executableitem`\*\*与 **`id`** 的新属性。\
它们用于**连接**这**两个物品**。
{% endhint %}

### 获得物品

运行 `/iaget executableitem_test` 以获得目标物品！

![](<../../.gitbook/assets/image\_(140) (1) (1).png>)
