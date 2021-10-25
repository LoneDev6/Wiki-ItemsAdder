# 🎹 Музыкальные пластинки

## Шаг 1

{% content-ref url="sounds/" %}
[sounds](sounds/)
{% endcontent-ref %}

## Шаг 2

Создайте новый предмет в вашей папке, это будет вашей пластинкой:

```yaml
  music_disc_cdk_sunday:
    display_name: display-name-music_disc_cdk_sunday
    permission: music_disc_cdk_sunday
    lore:
    - '&7Cdk - Sunday'
    resource:
      material: STICK
      generate: true
      textures:
      - item/music_disc_cdk_sunday.png
    behaviours:
      music_disc:
        song:
          name: itemsadder:music_disc.cdk_sunday
          description: Cdk - Sunday
```

Как вы можете заметить я указал специальное поведение предмету - "music\_disc". Это строчка заставит сервер понимать предмет как пластинку.  
Строка **name** - название проигрываемого звука, который вы добавили в **Шаге 1**
