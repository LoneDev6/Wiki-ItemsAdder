# 📓Skript API

## Примеры

{% tabs %}
{% tab title="Команда: выдать предмет IA" %}
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

{% tab title="Команда: если игрок держит предмет IA" %}
```yaml
command /iaskriptiscustomitem:
  trigger:
    if player's tool is a customitem:
      message "it's a custom item"
    else:
      message "it's not a custom item"
```
{% endtab %}

{% tab title="Картинка из юникода \(эмоджи, GUI..\)" %}
```yaml
command /emojitest:
    trigger:
        set {iconConfirm} to fontimage "twitteremojis:confirm"
        message "Good: %{iconConfirm}%"
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Если вы считаете, что я упустил какой либо метод - не переживайте. Я добавлю новые фичи для скриптов позже, будьте терпеливы.
{% endhint %}

