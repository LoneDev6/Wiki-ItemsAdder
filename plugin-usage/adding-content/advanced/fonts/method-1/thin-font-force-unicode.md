# Тонкий шрифт (Насильное использования Юникода)

## Тонкий шрифт

Обычное явление для Minecraft, если вы включили символы юникода (**Force Unicode Font: ON**) чтобы получить _"тонкий шрифт"_.

![](<../../../../../.gitbook/assets/immagine (5).png>)

С плагином **ItemsAdder** это несовместимо, так как это ломает все эмоджи, GUI и т.д. Это баг игры.

{% hint style="warning" %}
Вы должны выключить эту функцию (**Force Unicode Font: OFF**)
{% endhint %}

![](<../../../../../.gitbook/assets/immagine (6).png>)

и **установить** это значение в основном файле конфигурации `config.yml`

```yaml
  thin-font:
    enabled: true
```

Это позволит видеть вам и вашим игрока тонкий шрифт, даже когда он отключен в настройках игры (**Force Unicode Font: OFF**).

{% hint style="warning" %}
Не забывайте обновлять ваш пакет ресурсов `pack.zip` чтобы увидеть изменения.\
Туториал: [настройка пакета ресурсов](../../../../resourcepack-hosting/)
{% endhint %}

### Результат

![](<../../../../../.gitbook/assets/immagine (7).png>)

{% hint style="success" %}
Теперь вы видите тонкий шрифт, но все элементы картинок юникода не сломаны (баг белых квадратов)
{% endhint %}

## Alternative method

If for some reasons your players really want to use the `Force Unicode: On` you can read here, the alternative font file will avoid the `Force Unicode: Off` setting requirement (Note: Minecraft 1.16+ only).

{% content-ref url="../../font-images/alternative-font-file.md" %}
[alternative-font-file.md](../../font-images/alternative-font-file.md)
{% endcontent-ref %}
