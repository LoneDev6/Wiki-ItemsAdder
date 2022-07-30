# 自定义剑

{% hint style="danger" %}
### 命名空间

如果你不知道该如何创建命名空间 [请阅读该页面](../basic-concepts/namespace/creating-your-namespace.md).
{% endhint %}

{% hint style="danger" %}
### 资源包托管

记得在开始操作前先决定你要适用的托管方式.\
建议你使用 **self-host（主机自托管）** 比较简便快捷,当然你也可以选择第三方托管平台
{% endhint %}

## 我的第一把自定义剑

### 创建自定义剑的文件

{% hint style="warning" %}
该配置为示例（记得将 `myitems` [命名空间 ](../basic-concepts/namespace/)更改为你想的名称
{% endhint %}

例如，我创建了一个 **文件** ，该文件将包含我所有新增的 **自定义剑**：

![](<../../../.gitbook/assets/immagine (16).png>)

在该文件中 (`myswords.yml`) 我创建一个名为 `mysword` 的自定义剑

```yaml
info:
  namespace: myitems
items:
  mysword:
    display_name: My Sword
    permission: mysword
    durability:
      max_custom_durability: 1324
  
```

## 物品材质

### 创建材质文件

这是个有趣的部分，为物品设置材质,因此，你必须将 `.png` 材质文件放入正确的文件夹中.\
在该示例中 **命名空间** 为 `myitems` 所以你需要将材质贴图放在该文件夹中:

![](<../../../.gitbook/assets/immagine (14).png>)

### 应用材质至物品

打开 `myswords.yml` 并添加 `resource` 部分,并为物品设置源材质.\
你可以发现我设置了属性 `generate: true` ，该属性会使插件使用自定义的材质生成模型.\

```yaml
info:
  namespace: myitems
items:
  mysword:
    display_name: My Sword
    permission: mysword
    durability:
      max_custom_durability: 1324
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
```

## 最后一步

现在要使插件加载你刚刚添加的自定义物品
你需要进行如下操作:\
\- 加入服务器\
\- 确认你接受了服务器资源包\
\- 使用指令 `/iazip`\
\- 如果你使用的是 external-host（第三方托管（Dropbox,mcpacks）)请向下继续阅读并按照说明进行操作.\
\- 使用指令 `/iaget mysword` 获取物品\
\- 完成!

### 获取物品

![](<../../../.gitbook/assets/immagine (18).png>)

![](<../../../.gitbook/assets/immagine (19).png>)

## 如果你使用 external-host (Dropbox) 请阅读:

不要忘记上传最新的资源包至云端.
1\. 从 resources_packs 文件夹中找到生成的资源包:

![](<../../../.gitbook/assets/immagine (96) (2) (3) (2) (1) (1) (1) (1) (1) (1) (1) (1).png>)

2\. 上传至托管云端
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

{% content-ref url="../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

