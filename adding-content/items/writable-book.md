---
icon: pen-nib
---

# Writable Book

{% hint style="warning" %}
This tutorial is subject to change in future plugin releases. This feature is experimental.
{% endhint %}

{% tabs %}
{% tab title="Modern (Recommended)" %}
To create a custom writable book you have to declare the written book first.

```yaml
info:
  namespace: test
items:
  written_letter:
    name: Written Letter
    material: WRITTEN_BOOK
    graphics:
      texture: item/other/written_letter
```

Then declare the writable book and specify which properties to copy from the written book, in this case the `item_model`, so that it inherits the texture on write.

```yaml
  letter:
    name: Letter
    material: WRITABLE_BOOK
    graphics:
      texture: item/other/letter
    events:
      book_write:
        replace_properties:
          item_model:
            copy_from_item: test:written_letter
```
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
To create a custom writable book you have to declare the written book first.

```yaml
info:
  namespace: test
items:
  letter_written_letter:
    name: Written Letter
    resource:
      material: WRITTEN_BOOK
      generate: true
      textures:
        - item/other/written_letter
```

Then declare the writable book and specify which properties to copy from the written book, in this case the `custom_model_data`, so that it inherits the texture on write.

```yaml
  letter:
    name: Letter
    resource:
      material: WRITABLE_BOOK
      generate: true
      textures:
        - item/other/letter
    events:
      book_write:
        replace_properties:
          custom_model_data:
            copy_from_item: test:letter_written_letter
```
{% endtab %}
{% endtabs %}

<figure><img src="../../.gitbook/assets/image (276).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (277).png" alt=""><figcaption></figcaption></figure>