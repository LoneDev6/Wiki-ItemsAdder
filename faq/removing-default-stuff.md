# Removing default stuff

## 如何删除所有的物品和默认的物品

如果你只想做自己的物品,方块,不想要默认添加的物品?  
请按照这个教程来操作.

### 1. Config.yml

打开Itemadder的 `config.yml` 然后把下面内容设置为**false**.

```yaml
  extract-default-items: false
  extract-default-resources: false
```

### 2. 删除不需要的物品配置.可以在这列表中选择.

#### 推特表情包

`plugins\ItemsAdder\data\items_packs\twitteremojis`  
`plugins\ItemsAdder\data\resource_pack\assets\twitteremojis`

#### 神奇工艺

`plugins\ItemsAdder\data\items_packs\magiccraft`  
`plugins\ItemsAdder\data\resource_pack\assets\magiccraft`

#### Minecarft物品表情

`plugins\ItemsAdder\data\items_packs\mcemojis`  
`plugins\ItemsAdder\data\resource_pack\assets\mcemojis`

#### Itemsadder物品

`plugins\ItemsAdder\data\items_packs\itemsadder`  
`plugins\ItemsAdder\data\resource_pack\assets\itemsadder`

#### 例如物品

`plugins\ItemsAdder\data\items_packs\example`  
`plugins\ItemsAdder\data\resource_pack\assets\example`

{% hint style="danger" %}
## 不要删除上面列表中没有列出的其他文件!

如果你删除了minecraft, mcguis或mcicons文件,那么插件的某些部分将可能会报错！
{% endhint %}

