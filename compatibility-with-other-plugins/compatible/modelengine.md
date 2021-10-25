# ModelEngine

## [Скачать здесь](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

\(бесплатная демонстрация в предыдущей ссылке, в верхней части страницы\)

## Как добавить совместимость?

Это очень просто!

* добавьте все ваши модели мобов и конфигурации в папку плагина **ModelEngine**.
* запустите `/meg reload` для генерации ресурспака **ModelEngine**
* откройте папку `plugins\ModelEngine\resource_pack\`.
* скопируйте содержимое папки `plugins\ItemsAdder\resource_pack\`.
* откройте config.yml ItemsAdder и установите этот параметр:

  ```yaml
  overwrite-vanilla-models: false
  ```

* Запустите `/iazip`\(и следуйте [руководству по хостингу](../../plugin-usage/resourcepack-hosting/), если это необходимо\)

Готово!

