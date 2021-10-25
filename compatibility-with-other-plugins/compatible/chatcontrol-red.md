# ChatControl-Red

[Скачать здесь](https://www.mc-market.org/resources/18217/)

ItemsAdder с Emojis:\
Больше информации здесь: [https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610](https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610)

## Добавление пользовательского префикса канала в чате

Если вы хотите создать графический префикс для ваших каналов и показывать его в чате, вам нужно следовать этому руководству.

![Пример, показывающий префикс ARCADE для канала Arcade](<../../.gitbook/assets/immagine (94).png>)

Вы просто должны установить это в конфигурации формата,(например, в файле `format/arcade.yml` ChatControl Red):

```yaml
  prefix:
    Message: ':arcade:'
```

Очевидно, что вы должны использовать собственное [font\_image](../../plugin-usage/adding-content/advanced/font-images/) имя вместо `arcade`, это просто пример.
