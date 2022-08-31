# ModelEngine

## [下载](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)


## 如何进行兼容


* 在 **ModelEngine** 文件夹中导入所有怪物模型以及配置（请阅读 **ModelEngine** 教程）
* 使用命令 `/meg reload` 来生成 **ModelEngine** 资源包
* 打开 `plugins\ModelEngine\resource_pack\assets\` 文件夹
* 复制 `assets` 文件夹放至 `plugins\ItemsAdder\resource_pack\` 文件夹
* 打开 **ItemsAdder** 的 `config.yml` 并设置：

{% code title="config.yml" %}
```yaml
overwrite-vanilla-models: false
```
{% endcode %}

* 使用命令 `/iazip` (请按照你资源包 [托管方式](../../plugin-usage/resourcepack-hosting/) 进行更新

完成!
