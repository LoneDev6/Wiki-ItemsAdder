---
icon: gavel
---

# Smithing

<figure><img src="../../.gitbook/assets/image (275).png" alt=""><figcaption></figcaption></figure>

```yaml
info:
  namespace: my_items
recipes:
  smithing:
    my_sword_modified_recipe:
      enabled: true
      permission_suffix: recipes_group_1.my_sword_modified_recipe
      base: my_sword
      addition: DIAMOND
      template: EMERALD
      result:
        item: my_sword_modified
        amount: 1
```

{% hint style="info" %}
`base`, `addition` and `template` are all mandatory. Specify all 3 items.
{% endhint %}

## Properties

#### `template`

The first slot item.

#### `base`

The second slot item.

#### `addition`

The third slot item.

#### `result`

The resulting item.

#### `permission_suffix`

This option defines the required permission.\
It represents only the **suffix** of the permission.

The full permission format is: `ia.user.recipe.<permission_suffix>`.

**Example:**\
`ia.user.recipe.recipes_group_1.my_sword_modified_recipe`

**Advanced usage:**\
You can assign `ia.user.recipe.recipes_group_1.*` to grant access to all recipes within that group.
