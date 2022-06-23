# 📓 Skript API

## Örnekler

{% tabs %}
{% tab title="Command: give custom item" %}
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
{% endtab %}

{% tab title="Command: is holding custom item" %}
```yaml
command /iaskriptiscustomitem:
  trigger:
    if player's tool is a customitem:
      message "it's a custom item"
    else:
      message "it's not a custom item"
```
{% endtab %}

{% tab title="FontImage (emojis, GUIs..)" %}
```yaml
command /emojitest:
	trigger:
		set {iconConfirm} to fontimage "twitteremojis:confirm"
		message "Good: %{iconConfirm}%"
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Eksik bir yöntem olduğunu düşünüyorsanız endişelenmenize gerek yok. Skript API'ye daha fazla özellik ekleyeceğim, sabırlı olmanız yeterli.
{% endhint %}
