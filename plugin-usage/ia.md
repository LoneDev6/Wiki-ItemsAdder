---
description: /ia command menu
icon: square-list
---

# Recipes Menu

## Menu settings and "All" category

`ia_gui.yml` contains settings about the `/ia` command GUI.\
It also contains the **"all"** category which shows every ItemsAdder item.

{% hint style="info" %}
Default ItemsAdder pack categories are inside `categories.yml` files on each `namespace` folder.\
For example: `contents/iasurvival/configs/categories.yml`
{% endhint %}

## Creating a custom category

If you want to create your own category you have to create and add it to your own `.yml` file in your [namespace](beginners/configs-and-resourcepack.md#what-is-a-namespace).\
<mark style="color:red;">Do not add your categories into the</mark> <mark style="color:red;"></mark><mark style="color:red;">`ia_gui.yml`</mark> <mark style="color:red;"></mark><mark style="color:red;">file!</mark>\
This is an example:

```yaml
info:
  namespace: my_items
categories:
  swords:
    enabled: true
    icon: "my_items:custom_item"
    name: 'Swords'
    permission: "ia.menu.seecategory.swords"
    # THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    # THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    title_position_pixels: 0
    items:
      - "my_items:custom_item"
      - "my_items:custom_item_2"
      - "my_items:custom_item_3"
```

Remember to give your users permission for each category if you want them to see the categories.\
This example category permission is: `ia.menu.seecategory.swords`

{% hint style="info" %}
**`font_image` and `title_position_pixels` are optional.**\
Plugin will take the one in `ia_gui.yml` if not set.

This option is good if you want to have a different background for each category.
{% endhint %}

{% hint style="success" %}
**Categories** with the **same name** and different namespace **will be merged**, this is **helpful** if you have two "swords" categories.\
This allows you to open **`/ia`** menu and see all swords organized in the same category instead of having 2 swords categories.
{% endhint %}

## Add bulk items to categories

### Wildcard

Matches any item which has `example` namespace.

```yml
categories:
  test:
    enabled: true
    skip_if_already: false
    icon: example:my_item
    name: TEST
    permission: ia.menu.seecategory.test
    items:
      - "example:*"
```

Matches any namespace which has `some_item` item.

```yml
categories:
  test:
    enabled: true
    skip_if_already: false
    icon: example:my_item
    name: TEST
    permission: ia.menu
```

### Regex (advanced users)

Matches any armor item of the `iasurvival` namespace.

{% hint style="info" %}
Use [this website](https://regex101.com/) to test your regex.
{% endhint %}

```yml
  armors:
    enabled: true
    skip_if_already: false
    icon: iasurvival:ruby_helmet
    name: display-category-armors
    permission: ia.menu.seecategory.armors
    items:
      - "iasurvival\:(.*)_helmet"
      - "iasurvival\:(.*)_chestplate"
      - "iasurvival\:(.*)_leggings"
      - "iasurvival\:(.*)_boots"
```

## Reorder categories

{% hint style="warning" %}
Requires ItemsAdder 4.0.15+
{% endhint %}

In `ItemsAdder/ia_gui.yml` you can set a custom order for the categories of your plugin.\
This is a global setting that applies to all the namespaces.

### Automatic alphabetical order

Set `alphabetical: true`.

{% code title="ItemsAdder/ia_gui.yml" %}
```yaml
order:
  alphabetical: true
  force_override:
    enabled: false
```
{% endcode %}

### Force custom ordering

Set `alphabetical: false` and customize `force_override`.

Categories that are not in the list will be appended to the end of the listed categories, in alphabetical order (if `alphabetical: true`).

{% code title="ItemsAdder/ia_gui.yml" %}
```yaml
order:
  alphabetical: true
  force_override:
    enabled: true
    list:
      - armors
      - swords
      - blocks
      - minerals
```
{% endcode %}

### Customize `all` category position

You can make the `all` category the first category by just adding it to the list

{% code title="ItemsAdder/ia_gui.yml" %}
```yaml
order:
  alphabetical: true
  force_override:
    enabled: true
    list:
      - all
      - armors
      - swords
      - blocks
      - minerals
```
{% endcode %}
