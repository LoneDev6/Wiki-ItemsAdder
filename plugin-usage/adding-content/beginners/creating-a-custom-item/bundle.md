# Bundle

{% hint style="warning" %}
Minecraft 1.17+
{% endhint %}

## Конфигурация

```yaml
items:
  example_bundle:
    display_name: "&6&lExample Bundle"
    permission: example_bundle
    resource:
      material: BUNDLE
      generate: true
      textures:
      - item/bundle_test.png
```

## Файлы изображений

![](<../../../../.gitbook/assets/image (33).png>)

Вы должны создать другой файл с суффиксом `_filled`.

## Результат

![](<../../../../.gitbook/assets/image (34).png>)
