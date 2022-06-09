# ↪ Örnek izinler

## Örnek kurulum:

* `ia.user.ia` (/ia menüsünü aç)
* `ia.user.ia.*` (/ia menüsündeki tüm eşyaları gör)
* `ia.user.iarecipe` (/iarecipe komutunu kullan)
* `ia.user.craft.*` (tüm itemleri craftla)
* `ia.menu.*` (/ia menüdeki tüm kategorileri gör)
* `ia.user.image.gui` (emoji kitabını görmek için /e kullan)
* `ia.user.image.hints` (/e ve tab kullanırken emojileri öner)
* `ia.user.image.chat` (enoji yazısı :smile: yazarken yeniden yerleştir)
* `ia.user.image.command` (komutlarda emoji :smile: metnini değiştirin 
* `ia.user.image.sign` (replace emoji text :smile: etc in signs)
* `ia.user.image.book` (replace emoji text :smile: etc in books)
* `ia.user.image.use.*` (access to all emojis)

## Where can I get categories permissions?

{% hint style="info" %}
### ItemsAdder default categories

Open this file to read all the permissions to see categories: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`

For example if you want to make players see ALL the categories of default ItemsAdder you just have to give `ia.menu.*` permission.
{% endhint %}

{% hint style="info" %}
### Addons categories

If you're installing an [addon ](https://addons.plugin.ga/itemsadder/)you may search for a `categories.yml` file inside `ItemsAdder\data\items_packs\ADDON`, usually they put the categories there, so you can find also their **permissions**.
{% endhint %}

{% hint style="info" %}
### Creating my categories

To create your categories just read the tutorial
{% endhint %}



