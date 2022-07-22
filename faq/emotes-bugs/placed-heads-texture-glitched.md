---
描述: 某些放置的玩家头颅材质出现故障
---

# 放置玩家头颅时出现材质故障

![](<../../.gitbook/assets/image (51) (2) (2).png>)

{% embed url="https://youtu.be/Gn7uzcSmjmU" %}

该故障
This bug happens if you have more than 1 player head of the same player in front of you.\
This doesn't happen if you have different player heads in front of you or if you have only 1 head in front of you.

This bug is also reproducible in **OriginRealms** server and will be reproducible with any other custom emotes system that will be released by other developers.\
I probably can't fix this bug in any way because it's how the game rendering system works.

I'll do my best to find a workaround but I doubt this game allows me to identify placed heads in order to fix that.

解决该问题的唯一方法是在 **ItemsAdder** 的 `config.yml` 中禁用表情系统。
