# CMI
## Ranks

1. Open the `Settings/Chat.yml` file in your CMI folder and set `GeneralFormat` (I use the `%vault_prefix%` placeholder instead of CMI's `{prefix}`) to:

```yaml
GeneralFormat: '%vault_prefix% &f{displayName}&7: &r{message}'
```

2\. Download [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) and [Vault](https://github.com/MilkBowl/Vault/releases/latest).\
3\. Install them and restart your server.\
4\. Type `/papi ecloud download Vault`.\
5\. Finally, type `/papi reload`.

ItemsAdder should now work properly with CMI's chat feature.
