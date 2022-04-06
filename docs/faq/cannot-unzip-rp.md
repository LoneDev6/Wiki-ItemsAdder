---
title: Cannot unzip the Resource pack
description: How you can unzip the generated Resource pack
---

# Cannot unzip the Resource pack.

By default does ItemsAdder protect your Resource pack from unwanted unzipping.  
You can disable this by opening the `config.yml` of ItemsAdder and update the following settings:

```yaml
zip:
  protect-file-from-unzip:
    enabled: false
    extreme: false
```

--8<-- "iazip.md"