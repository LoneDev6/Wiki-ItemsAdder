# 简单用法

## 示例

### 资料你个：给予玩家自定义物品

```yaml
command /iaskriptgetitem <text> [<number=1>]:
  trigger:
    set {%player%.item} to null
    set {%player%.item} to customitem arg 1
    if {%player%.item} is null:
      message "Custom item %arg 1% not found"
    else:
      give player arg 2 of {%player%.item}
      message "Obtained custom item %arg 1%"
```

### 指令：是否手持自定义物品

```yaml
command /iaskriptiscustomitem:
  trigger:
    if player's tool is a customitem:
      message "it's a custom item"
    else:
      message "it's not a custom item"
```

### 字体图像（标签，GUI 等）

```yaml
command /emojitest:
	trigger:
		set {iconConfirm} to fontimage "twitteremojis:confirm"
		message "Good: %{iconConfirm}%"
```
