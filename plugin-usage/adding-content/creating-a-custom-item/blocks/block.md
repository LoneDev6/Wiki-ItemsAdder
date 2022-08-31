# 自定义方块

## 第一个自定义方块

### 创建方块文件

{% hint style="warning" %}
该配置为示例（记得将 `myitems` [命名空间 ](../../basic-concepts/namespace/) 更改为你想的名称）
{% endhint %}

例如，我创建了一个 **文件** ，该文件将包含所有的 **自定义方块**

在该文件中 (`blocks.yml`) 我创建一个名为 `red_block` 的自定义方块

![](<../../../../.gitbook/assets/immagine (90).png>)

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      material: PAPER
```

{% hint style="warning" %}
自定义方块的 **源材质** ，请使用 **不可放置** 的原版物品，例如： **纸**.\
如果你使用了可放置的物品为源材质，在放置自定义方块的时候会出现错误.
{% endhint %}

## 方块材质

### 创建方块贴图

这是个有趣的部分，为方块设置材质,因此，你必须将 `.png` 材质文件放入正确的文件夹中.\
在该示例中 **命名空间** 为 `myitems` 所以你需要将材质贴图放在该文件夹中:

![](<../../../../.gitbook/assets/image (52) (1) (1).png>)

### 应用材质至方块

打开 `blocks.yml` 并添加 `resource` 部分,并为方块设置源材质.\
你可以发现我设置了属性 `generate: true` ，该属性会使插件使用自定义的材质生成模型.\

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
```

### 每个面使用不同的材质

{% hint style="warning" %}
**重要提醒**：保持正确的方向顺序，如下所示
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
```

### 每个面使用相同的材质

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
```

## 添加方块放置功能

添加 `specific_properties` 属性，如下例所示：

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```

{% hint style="info" %}
如果你想要指定 破坏该方块的工具、设置该方块的 **硬度** 以及 **其他属性**. [请阅读此页面](../specific-properties/blocks.md)
{% endhint %}

## 最后一步

重新压缩最新的资源文件

### 如果你使用 [self-host](../../../resourcepack-hosting/resourcepack-self-hosting.md) 或 [auto-external-host](../../../resourcepack-hosting/automatic-upload-hosting.md):

* 使用指令 `/iazip`.

### 如果你使用 [external-host](../../../resourcepack-hosting/resourcepack-on-dropbox.md) (Dropbox) read here:

不要忘记上传最新的资源包至云端.
1\. 从 resources_packs 文件夹中找到生成的资源包:

![](<../../../../.gitbook/assets/immagine (96) (2) (3) (2) (1) (1) (1) (1) (1) (1) (1) (1) (1).png>)

2\. 将其上传至托管主机 (Dropbox)\
3\. 打开 ItemsAdder 的 `config.yml` 并更新 `external-host` 属性中的链接.

```yaml
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

其他关于资源包托管的疑问，请在此处阅读完整的 **external-host** 教程：

{% content-ref url="../../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

## 在游戏中获取方块

使用指令 `/iaget red_block` 来获取物品

![](<../../../../.gitbook/assets/immagine (92).png>)

![](<../../../../.gitbook/assets/immagine (91).png>)

![](<../../../../.gitbook/assets/immagine (93).png>)
