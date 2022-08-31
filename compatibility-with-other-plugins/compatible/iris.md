# Iris

## [下载](https://www.spigotmc.org/resources/iris-world-gen-custom-biome-colors.84586/)

## 开始兼容

### 步骤 1

下载并安装 [ItemsAdderBlocksInjector](https://www.spigotmc.org/resources/itemsadderblocksinjector.102078/) 并且 <mark style="color:red;">在安装后请勿删除！</mark>

### 步骤 2 

创建一个由 Iris 生成的世界（查看Iris Wiki）并使用 ItemsAdder 新增的自定义方块 ID

\
例如：打开 `overworld` 预设包的文件：`plugins\Iris\packs\overworld\biomes\mountain\mountain.json`
然后编辑世界层（layers）设置以使用自定义方块，此示例中所使用的为自定义方块 **Amethyst Block** （为Itemsadder 预设包中新增的自定义方块）：

```json
"layers": [
    {
        "minHeight": 1,
        "maxHeight": 1,
        "slopeCondition": {
            "minimumSlope": 0,
            "maximumSlope": 2.6
        },
        "palette": [
            {
                "block": "itemsadder:amethyst_block"
            }
        ]
    },
```

这将会使其生成如图中类似的效果：

![](<../../.gitbook/assets/image (49).png>)

![](<../../.gitbook/assets/image (96).png>)

## 兼容性问题

* FastAsyncWorldEdit 会失效（无法解决）
* WorldEdit 中的 `//undo` ， `//copy` 指令 将无法对 `Iris` 生成的自定义方块进行更改，会使其恢复为原本的方块 `NOTE_BLOCK` ( `mushroom`, `TRIPWIRE`, `CHORUS_PLANT`)