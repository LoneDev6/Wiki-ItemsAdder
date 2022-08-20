---
description: Preview chat messages before they are sent
---

# Chat preview (1.19+)

## Chat preview

ItemsAdder **3.2.0c** allows you to enable the 1.19+ chat preview feature of Minecraft.

{% hint style="danger" %}
### This feature works only on **Minecraft 1.19** client, it also wasn't tested on old servers.
{% endhint %}

### Announcement shown to the player on join

![](<../.gitbook/assets/image (51) (2).png>)

![](<../.gitbook/assets/image (92).png>)

### Chat preview feature in action

![](../.gitbook/assets/chat\_preview\_gif.gif)

### Enabling the chat preview

Open `config.yml` of ItemsAdder and set this option, then run `/iareload` and join the server.

{% code title="config.yml" %}
```yaml
chat-preview: true
```
{% endcode %}

{% hint style="warning" %}
### Warning

<mark style="color:red;">The</mark> <mark style="color:red;"></mark><mark style="color:red;">`chat-preview`</mark> <mark style="color:red;"></mark><mark style="color:red;">setting disables messages signature!</mark>\
Do not use `chat-preview` if you need messages signature (which is a 1.19+ new feature).

This might be changed in the future, for now it's not possible to have both chat-preview and messages signature enabled at the same time, it's a Spigot limitation I can't bypass.
{% endhint %}
