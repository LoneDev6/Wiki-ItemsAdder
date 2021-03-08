# CMI

{% hint style="info" %}
## Если вы используйте изменения чата при помощи CMI, ознакомьтесь с информацией ниже.
{% endhint %}

## Эмоджи

Откройте основной файл конфигурации config.yml плагина **ItemsAdder** и установите там следующие конфигурации:

```yaml
font_images:
  chat:
    enabled: true
    replace-only-packets: true
```

## Префиксы (ранги)

1. Откройте файл конфигурации config.yml плагина **CMI** и установите следующие конфигурации \(Я установил `%vault_prefix%` заполнитель вместо стандартного заполнителя **CMI** `{prefix}`\)

```yaml
GeneralFormat: '%vault_prefix% &f{displayName}&7: &r{message}'
```

2. Загрузите [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) and [Vault](https://github.com/MilkBowl/Vault/releases/latest)  
3. Установите его и перезагрузите сервер  
4. Используйте команду  `/papi ecloud download Vault`  
5. Используйте команду `/papi reload`

Готово

