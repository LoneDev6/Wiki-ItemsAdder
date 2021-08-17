# Self hosting

## Info about self-hosting

С версии ItemsAdder 2.0 \(и выше\) вы можете использовать собственную хост-машину в качестве хоста пакета ресурсов, прямиком из папки вашего сервера!  
Не нужно платить за внешний хостинг для текстур и **не нужно постоянно перезаливать набор ресурсов на левые сервисы!**

{% hint style="warning" %}
**Your hosting service must let you get additional ports for your server.**  
If your hosting service doesn't provide you additional ports you have to use one of the alternative methods:
{% endhint %}

{% page-ref page="automatic-upload-hosting.md" %}

{% page-ref page="resourcepack-on-dropbox.md" %}

### What is the difference between self-host and the other methods?

Главное отличие в том, что скачивание пакета ресурсов со своей машины производится моментально, прямиком с папки сервера, без разрыва волос на заднице с постоянным перезаливом пакета ресурсов при малейшем изменении.

{% hint style="info" %}
`Свой хост текстур, или self-host`, очень полезен, когда вы только начали настраивать и тестировать возможности плагина на своем локальном ПК. Так как вам достаточно использовать одну команду - `/iazip`, и все изменения сразу же будут загружены к вам в клиент игры.
{% endhint %}

{% page-ref page="../tips-for-fastest-usage.md" %}

## Как настроить свой хост текстур \(self host\)?

* Проверьте, открыты ли у вас дополнительные порты на вашей машине или хостинге, если нет - попросите вашего провайдера или хост-менеджера выделить вам один.
* После того, как вы заполучили порт - откройте основной файл конфигурации `config.yml` и выставьте следующие строки подобным образом:

```yaml
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
```

* you have to replace `127.0.0.1` with ... your server IP
* and replace `8163` with the additional port you obtained.
* So for example if my ip is `123.456.789.0` and my additional port is `8163`I will set it like this:

```yaml
  self-host:
    enabled: true
    server-ip: '123.456.789.0'
    pack-port: 8163
```

{% hint style="warning" %}
**Открытый порт** не должен совпадать с портом сервера \(он нужен для подключения к вам игроков\) и не должен ничем использоваться.
{% endhint %}

{% hint style="info" %}
Если вы пользуетесь плагином на чисто тестовом сервере на вашем компьютере, то вы можете оставить классические настройки, так как 127.0.0.1 \(или по другому localhost\) это IP "данного компьютера", который доступен только внутри локальной сети, и таким образом плагин загружает \(перезагружает\) пакет ресурсов прямиком из вашего компьютера вашему же компьютеру \(моментально\).
{% endhint %}

{% hint style="danger" %}
Не забывайте использовать команду `/iazip` **каждый раз**, когда вы внесли изменения в файлы **текстур**, в 3D **модель**, в **звуках**... _\*\*_или вы не увидите никаких изменений.
{% endhint %}

### Last step

After you configured the `config.yml` file you just have to run `/iazip` command.

