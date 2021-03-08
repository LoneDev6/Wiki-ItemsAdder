# Ошибка в работе транспорта с установленным плагином Towny

{% hint style="warning" %}
Если вы столкнулись с проблемой транспорта (машин, самолетов) и вы используйте плагин Towny - откройте файл конфигурации Towny (config.yml) и удалите отсюда слизня (Slime):
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

