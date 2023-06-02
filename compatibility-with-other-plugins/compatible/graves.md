# Graves

## [Şuradan İndir](https://www.spigotmc.org/resources/graves.74208/)

## uyumluluk nasıl eklenir?

uyumluluğu etkinleştir

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # Should ItemsAdder integration be enabled.
```

Varsayılan seçeneği düzenleyin. Gerekirse öğeleri de özelleştirebilirsiniz (doğru türde olduklarından emin olun, mobilyalarda mobilya kullanın ve blok özelliğinde blok kullanın).
```yaml
  ##############
  # ItemsAdder #
  ##############
  # The option requires ItemsAdder, you must have this installed to use models.
  itemsadder:
    furniture:
      enabled: true # Should we use ItemsAdder Furniture?
      name: "itemsadder:mysterious_stone" # Furniture name.
    block:
      enabled: true # Should we use ItemsAdder Blocks?
      name: "itemsadder:nice_stone" # Block name
```
