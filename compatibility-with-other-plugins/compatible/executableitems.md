# ExecutableItems

## [下载插件](https://www.spigotmc.org/resources/custom-items-free-executable-items-1-12-1-17.77578/)

## 如何将ExecutableItem运用到ItemsAdder的自定义物品上

{% hint style="warning" %}
更新 **ITEMSADDER** 为 **2.2.20+**\
****更新 **ExecutableItems** 为 4.2.3.5+
{% endhint %}

## 创建Ia物品

### 创建.yml文件并修改ItemsAdder物品

我将把一个名为 `executableitem_test` 的 **ItemsAdder** 物品运用到ExecutableItem示例文件中的 `spit` 项

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
我设置了一个新项,叫做 **`executableitem`** 里面还有 **`id`**.\
{% endhint %}

### 获得物品

使用 `/iaget executableitem_test` 去获得该物品

![](<../../.gitbook/assets/immagine (152).png>)
