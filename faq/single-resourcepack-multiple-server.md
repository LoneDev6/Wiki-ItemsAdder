---
描述: >-
  在群组服务器中使用一个资源包，并且允许在子服中保留特定的自定义内容
---

# 使用一个资源包且在群组中的每个子服拥有不同的特色**（保留某些自定义内容）**

该教程由 [@itsmemac](https://github.com/LoneDev6/Wiki-ItemsAdder/pull/35) 编写

{% hint style="info" %}
在阅读该教程之前，请确保您已完成了 [**首次安装**](https://itemsadder.devs.beer/first-install)  的所有步骤，并且 Itemsadder 正常运行
{% endhint %}

**步骤 1**

创建一个本地服务器来制作你 **整个群组服务器** 的所需要的资源包（物品，GUI，怪物，表情，等等...）.\

**步骤 2**

在所有子服中将 ItemsAdder 的 hosting 设置为 `no-host`，并将默认预置包生成关闭

<br>设置如下：

{% code title="config.yml" %}
```yaml
  hosting:
    no-host:
      enabled: true
  extract-default-items: false
  extract-default-resources: false
```
{% endcode %}

**步骤 3**

使用 `/iazip` 将生成的资源包上传至云端

**步骤 4**

使用类似 [**Force resourcepack**](https://www.spigotmc.org/resources/force-resourcepacks.10499/) 的资源包加载插件

**步骤 5**

将 `ItemsAdder.jar` 和整个 `ItemsAdder` 文件夹从本地服务器复制到登录服（例如 `lobby`）的 `/plugins` 文件夹中

**步骤 6**

打开 ItemsAdder 的 config.yml 并禁用不需要的功能.\
并且删除 `plugins/ItemsAdder/data/items_packs` 中不需要的文件.

{% hint style="danger" %}
请不要删除 **dictionaries, mcemojis, mcguis, mcicons, realcraft, various\_configs** 文件夹.\
<br>（此为预置内容，你也可以选择自行创建）
<br>更多详情请阅读: [删除默认内容](removing-default-stuff/)
{% endhint %}

你需要保留你想留在该子服的自定义内容的文件夹（items_packs文件夹中的内容）
<br>(`lobby` 为本次示例的子服).

**步骤 7**

重启服务器并进入游戏.接受服务器资源包后，你会发现就只剩下你留在 `items_packs` 文件夹中的物品

**步骤 8**

将群组中的每个子服重复 5,6,7 步骤

{% hint style="info" %}
使用 **BungeePackFix**  插件不需要阅读此教程
{% endhint %}
