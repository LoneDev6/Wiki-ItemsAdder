# Права \(Permission\) для предметов

## Пример

```yaml
permission: myitem
```

## How to allow crafting?

Вы можете разрешить игрокам **создавать** определенные предметы, дав им подобное право: `ia.user.craft.myitem`

## How to make the item visible in the /ia gui on to some users?

Чтобы разрешить игроком **видеть** предмет в меню `/ia`, вы должны дать им право, подобное этому: `ia.user.ia.myitem`

{% hint style="info" %}
Для последнего - не забудьте дать игроку право `ia.user.ia`, чтобы они могли использовать команду `/ia`
{% endhint %}

{% hint style="warning" %}
Remember to create a [category ](../../../../ia.md)for the `/ia` GUI.
{% endhint %}

