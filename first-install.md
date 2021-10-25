---
description: How to install the plugin
---

# ⚙ Первая установка плагина

{% hint style="info" %}
**Вы должны сделать** эту первую настройку **на** вашем **тестовом сервере** на вашем ПК, чтобы **избежать ошибок** и слишком много перезагрузок... игроки не любят, когда сервер не работает ;\)  
Вы можете загрузить файлы на ваш реальный сервер после того, как закончите здесь.
{% endhint %}

{% hint style="danger" %}
Вы **должны** выполнить ВСЕ шаги по установке. Не только первый.
{% endhint %}

## Шаг 1 - установка плагина и API

* установите [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* установите [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* установите [**LightAPI**](https://www.spigotmc.org/resources/lightapi-fork.48247/) **\(**⚠️**не устанавливайте его, если вы на 1.17.1 Paper/Tuinity/Purpur**⚠️ [пока что он не работает](https://www.spigotmc.org/threads/lightapi-fork.278321/page-10#post-4237787).**\)***.
  *\(необязательно\) установите [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/), если вы планируете создавать пользовательских мобов в будущем.
* поместите файл **ItemsAdder.jar** в папку plugins.
* запустите сервер
* дайте ItemsAdder завершить загрузку **всего**.

Первый шаг выполнен. Теперь вы должны выполнить шаг 2 для настройки ресурспака\\(не волнуйтесь, это не очень сложно\).

## Шаг 2 - первая установка ресурспака

#### Определите способ размещения ресурспака:

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## Необязательные шаги

### Удаление элементов по умолчанию

{% hint style="info" %}

Если вам не нужны заводские блоки, предметы, а так же другие вещи из заводского списка и вы хотите использовать только собственные предметы и настройки - воспользуйтесь этой статьей.

{% page-ref page="faq/removing-default-stuff.md" %}

### Избегайте глючных блоков\(если у вас установлен Purpur\)

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
