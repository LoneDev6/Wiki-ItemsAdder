# Блок

## Мой первый пользовательский блок

### Создание файла блоков

{% hint style="warning" %}
Это пример блока \(не забудьте изменить `myitems` [namespace ](../../basic-concepts/namespace.md)на тот, который вы хотите\).
{% endhint %}

Например, я создал **файл**, который будет содержать все мои **пользовательские блоки**:

В этом файле \(`blocks.yml`\) Я начинаю создавать простой блок под названием `red_block`

![](<../../../../../.gitbook/assets/immagine (91).png>)

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      material: PAPER
```

{% hint style="warning" %}
Очень важно использовать **не подлежащий размещению** ванильный **материал**. Например **БУМАГА**.
Если вы используете блок \(например, КАМЕНЬ или ГРЯЗЬ\), это приведет к небольшим сбоям при размещении.
{% endhint %}

## Текстуры блоков

### Создание файлов текстур

Теперь самое интересное, давайте установим текстуры!
Для этого вам нужно поместить файл текстур `.png` в нужную папку.
В этом случае ваше **namespace** - `myitems`, поэтому вы должны разместить их здесь:

![](<../../../../../.gitbook/assets/immagine (101).png>)

### Applying the textures files to your item

Теперь откройте `blocks.yml` снова и добавьте часть `resource`, как сделал это я.
Как вы можете видеть, я установил `generate: true` и установил текстуры для предметов.
Это говорит плагину автоматически генерировать 3D-модель, используя вашу текстуру.

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
```

### Использование разной текстуры для каждого лица

{% hint style="warning" %}
**Важно**: соблюдайте правильный порядок сторон света, как показано в примере.
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
```

### Использование одной и той же текстуры для каждого лица

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
```

## Добавление функции размещения блоков

Вы должны добавить атрибут `specific_properties`, как в этом примере:

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```

{% hint style="info" %}
Нажмите на нижнюю ссылку, если вы хотите указать **инструменты**, которые могут разбить блок, добавить **твердость** и **другие атрибуты**.

{% page-ref page="../../../advanced/item-properties/specific-properties/blocks.md" %}
{% endhint %}

## Заключительная часть

Теперь вам просто нужно сказать плагину, чтобы он загрузил ваш только что добавленный блок.

### Если вы используете [self-host](../../../../resourcepack-hosting/resourcepack-self-hosting.md) или [auto-external-host](../../../../resourcepack-hosting/automatic-upload-hosting.md):

* Введите `/iazip`.

### Если вы используете [external-host](../../../../resourcepack-hosting/resourcepack-on-dropbox.md) \(Dropbox\) читайте здесь:

Не забудьте загрузить новый сгенерированный .zip файл на свой хостинг \(Dropbox\)!
1. Достаньте его из этой папки:

![](<../../../../../.gitbook/assets/immagine (96) (2) (3) (2) (12).png>)

1. Загрузите его на свой хостинг \(Dropbox\)
2. Откройте `config.yml` от ItemsAdder и обновите URL-адрес `внешнего хоста` своей новой ссылкой.

```yaml
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

Если у вас есть еще вопросы, прочитайте полный урок по **external-host** здесь:

{% content-ref url="../../../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

## Получение блока в игре

Введите `/iaget red_block`, чтобы получить предмет.

![](<../../../../../.gitbook/assets/immagine (95).png>)

![](<../../../../../.gitbook/assets/immagine (72).png>)

![](<../../../../../.gitbook/assets/immagine (94).png>)
