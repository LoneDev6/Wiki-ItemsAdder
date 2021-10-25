# Avoid glitched blocks

{% hint style="warning" %}
### Это работает только на [Purpur](https://purpur.pl3x.net). Spigot и Paper не имеют этой функции.
{% endhint %}

Включите эти опции в конфигурации **purpur.yml**:

* [https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates](https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates)
* [https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates](https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates)
* [https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates](https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates)

**Пример:**

```yaml
  blocks:
    disable-mushroom-updates: true
    disable-note-block-updates: true
    disable-chorus-plant-updates: true
```
