---
title: Languages
description: Available languages for GUIs and Items in ItemsAdder.
---

# Languages

## Available languages

ItemsAdder currently offers and supports the following languages.

### GUIs

| Language   | Code                         |
| ---------- | ---------------------------- |
| Chinese    | `zh_cn`                      |
| Czech      | `cz`                         |
| Dutch      | `nl`                         |
| English    | `en`[*](#__default-language) |
| French     | `fr`                         |
| German     | `de`                         |
| Italian    | `it`                         |
| Japanese   | `jp`                         |
| Korean     | `ko`                         |
| Polish     | `pl`                         |
| Portuguese | `pt`                         |
| Russian    | `ru`                         |
| Spanish    | `es`                         |
| Thai       | `th`                         |
| Turkish    | `tr`                         |

### Items

| Language   | Code                         |
| ---------- | ---------------------------- |
| Chinese    | `zh_cn`                      |
| English    | `en`[*](#__default-language) |
| French     | `fr`                         |
| Italian    | `it`                         |
| Portuguese | `pt`                         |
| Spanish    | `es`                         |
| Turkish    | `tr`                         |

<small id="__default-language">*This is the default language</small>

## Change language

To change the language, open the `config.yml` of ItemsAdder and update the following settings:

```yaml
config_files:
  lang: 'en' # (1)
  dictionaries-lang: 'en' # (2)
```

1.  Replace `en` with a code from the [available GUI languages](#guis).
2.  Replace `en` with a code from the [available Item languages](#items).