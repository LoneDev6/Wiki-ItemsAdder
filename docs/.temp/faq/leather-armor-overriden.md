---
title: Leather Armor gets overriden by ItemsAdder
description: How you can fix ItemsAdder overriding the Leather Armor.
---

# Leather Armor gets overriden by ItemsAdder

ItemsAdder uses Leather Armor with specific HEX color values to create custom Armor.

To disable this, first make sure you're using ItemsAdder 2.5.2 or newer. Next, open the `config.yml` of ItemsAdder and update the following setting:

```yaml
disable-override-leather-armor-layers-textures: true
```

--8<-- "iazip.md"