---
描述: 隐藏计分板右侧的数字
---

# 隐藏计分板右侧的数字 (1.17+)

## 计分板数字

许多服务器都有使用计分板插件，但是其右侧的红色数字对于整体效果来说非常不美观，我们可以将其隐藏

![Without ItemsAdder](<../../.gitbook/assets/immagine (131).png>)

![With ItemsAdder](<../../.gitbook/assets/immagine (130).png>)

## 局限性

{% hint style="danger" %}
### 该特性只适用于 **Minecraft 1.17+** 客户端，与服务器核心版本无关
{% endhint %}

{% hint style="warning" %}
### 提醒:

使用 <mark style="color:red;">**红色**</mark> (<mark style="color:red;">**\&c**</mark>) 颜色代码会导致 **某些错误**.\
当计分板右侧有红色文本，并且将界面比例（客户端视频设置中）设置为1或3时，就会出现如下图错误.\


### 如何避免出现错误的使用 <mark style="color:red;">`&c`</mark> 颜色代码

你可以将 <mark style="color:red;">`&c`</mark> 颜色代码换另一种方式表达，与 `&c` 相同的颜色代码为 <mark style="color:red;">`{#ff5546}`</mark>, 该方式不会出现图中错误.


或者你可以在 **使用 `&c` 的文本后加一些空格**，来避免该问题的出现.
{% endhint %}

![](<../../.gitbook/assets/immagine (140).png>)

## 如何隐藏

ItemsAdder **2.4.19+** 支持一键隐藏计分板数字

你只需要打开 `config.yml` 进行如下设置并且使用 **/iazip** 即可

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
### 提醒

该选项无法在游戏中进行更改.\
要想关闭隐藏计分板数字，你需要重新在 `config.yml` 中设置并且使用 **/iazip**

{% endhint %}
