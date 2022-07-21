# ExecutableItems

## [下载插件](https://www.spigotmc.org/resources/custom-items-free-executable-items-1-12-1-17.77578/)

## 如何将 ExecutableItems 的物品与 Itemsadder 关联

{% hint style="warning" %}
将 **ITEMSADDER** 更新到 **2.2.20+**
将 **ExecutableItems** 更新到 **4.2.3.5+**
{% endhint %}

## 创建一个新的 Itemsadder 物品

### 创建.yml文件并配置 ItemsAdder 物品

在该示例中，我创建了一个名为 `executableitem_test` 的 **ItemsAdder** 物品 并且将其与 **ExecutableItem** 示例文件中的 `spit`物品进行关联


```yaml
info:
  namespace: example
items:
  executableitem_test:
    display_name: executableitem_test
    permission: executableitem_test
    # ↓ ↓ ↓ 关键属性
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
如配置所见，我设置了一个新的属性 **`executableitem`** 其中包括其 **`id`** 将新建的物品与 **ExecutableItem** 中的 `spit`进行了关联.\
{% endhint %}

### 获取物品

使用 `/iaget executableitem_test` 获取该物品

![](<../../.gitbook/assets/immagine (152).png>)
