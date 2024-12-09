---
icon: terminal
---

# Denizen API

{% hint style="warning" %}
需要 ItemsAdder 3.2.4+
{% endhint %}

## 下载最新构建

{% embed url="https://ci.citizensnpcs.co/job/Denizen/" %}

## 功能

<pre class="language-yaml"><code class="lang-yaml"><strong># 检查物品是否为自定义物品
</strong><strong>player.item_in_hand.is_ia_item
</strong># 检查物品是否为自定义方块
player.item_in_hand.is_ia_block
# 获取物品命名空间 ID
player.item_in_hand.ia_namespaced_id

# 放置自定义方块。
# 语法 set_custom_block [&#x3C;location>|...] [&#x3C;namespaced_id>]
set_custom_block &#x3C;context.location> ruby_block 
# 检查方块是否为自定义方块
context.location.is_ia_block
# 获取方块命名空间 ID
context.location.ia_namespaced_id
</code></pre>

## 示例

```yaml
my_world_script:
    type: world
    events:
        after player left clicks block:
            - narrate " "
            - if <player.item_in_hand.is_ia_block>:
                - narrate "Left click item is a custom block! <&6><player.item_in_hand.ia_namespaced_id>"
            - else:
                - narrate "Left click item is NOT a custom block! <&7><player.item_in_hand.material>"
            - narrate " "
        after player right clicks block:
            - if <player.is_sneaking>:
                - set_custom_block <context.location> ruby_block 
            - else:
                - narrate " "
                - if <player.item_in_hand.is_ia_item>:
                    - narrate "Right click item is a custom item! <&6><player.item_in_hand.ia_namespaced_id>"
                - else:
                    - narrate "Right click item is NOT a custom item! <&7><player.item_in_hand.material>"

                - if <context.location.is_ia_block>:
                    - narrate "Interacted block is a custom block! <&6><context.location.ia_namespaced_id>"
                - else:
                    - narrate "Interacted block is NOT a custom block!"
                - narrate " "
```
