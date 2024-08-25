---
description: Menu de la commande /ia
---

# 📃 Menu des recettes

## Paramètres du menu et catégorie "Tous"

Le fichier `ia_gui.yml` contient les paramètres pour l'interface graphique de la commande `/ia`.\
Il contient également la catégorie **"all"** qui affiche tous les articles d'ItemsAdder.

{% hint style="info" %}
Les catégories par défaut d'ItemsAdder se trouvent dans les fichiers `categories.yml` dans chaque dossier `namespace`.\
Par exemple : `contents/iasurvival/configs/categories.yml`
{% endhint %}

## Création d'une catégorie personnalisée

Si vous souhaitez créer votre propre catégorie, vous devez la créer et l'ajouter à votre propre fichier `.yml` dans votre [namespace](broken-reference).\
<mark style="color:red;">Ne pas ajouter vos catégories dans le fichier</mark> <mark style="color:red;"></mark><mark style="color:red;">`ia_gui.yml`</mark> <mark style="color:red;"></mark><mark style="color:red;">!</mark>\
Voici un exemple :

```yaml
info:
  namespace: my_items
categories:
  swords:
    enabled: true
    icon: "my_items:custom_item"
    name: 'Épées'
    permission: "ia.menu.seecategory.swords"
    # CECI EST OPTIONNEL. Le plugin prendra celui dans ia_gui.yml si non défini.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    # CECI EST OPTIONNEL. Le plugin prendra celui dans ia_gui.yml si non défini.
    title_position_pixels: 0
    items:
      - "my_items:custom_item"
      - "my_items:custom_item_2"
      - "my_items:custom_item_3"
```

N'oubliez pas de donner à vos utilisateurs la permission pour chaque catégorie s'ils doivent la voir.\
La permission de la catégorie exemple est : `ia.menu.seecategory.swords`

{% hint style="info" %}
**`font_image` et `title_position_pixels` sont optionnels.**\
Le plugin prendra ceux définis dans `ia_gui.yml` s'ils ne sont pas définis ici.

Cette option est utile si vous souhaitez avoir un arrière-plan différent pour chaque catégorie.
{% endhint %}

{% hint style="success" %}
**Les catégories** avec le **même nom** et des namespaces différents **seront fusionnées**, ce qui est **utile** si vous avez deux catégories "épées"..\
Cela vous permet d'ouvrir le menu **`/ia`** et de voir toutes les épées organisées dans la même catégorie au lieu d'avoir deux catégories d'épées.
{% endhint %}

## Ajouter des éléments en masse aux catégories

{% hint style="warning" %}
Nécessite ItemsAdder 3.5.1+.
{% endhint %}

### Wildcard

Correspond à tout élément ayant le namespace `example`.

```yml
categories:
  test:
    enabled: true
    skip_if_already: false
    icon: example:my_item
    name: TEST
    permission: ia.menu.seecategory.test
    items:
      - example:*
```

Correspond à tout namespace ayant l'item `some_item`.

```yml
categories:
  test:
    enabled: true
    skip_if_already: false
    icon: example:my_item
    name: TEST
    permission: ia.menu
```

### Regex (utilisateurs avancés)

Correspond à tout élément d'armure du namespace `iasurvival`.

{% hint style="info" %}
Utilisez [ce site web](https://regex101.com/) pour tester votre regex.
{% endhint %}

```yml
  armors:
    enabled: true
    skip_if_already: false
    icon: iasurvival:ruby_helmet
    name: display-category-armors
    permission: ia.menu.seecategory.armors
    items:
      - iasurvival\:(.*)_helmet
      - iasurvival\:(.*)_chestplate
      - iasurvival\:(.*)_leggings
      - iasurvival\:(.*)_boots
```
