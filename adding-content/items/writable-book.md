---
icon: pen-nib
---

# Writable Book

{% hint style="warning" %}
This tutorial is subject to change in future plugin releases. This feature is experimental.
{% endhint %}

To create a custom writable book you have to declare the written book first.

```yaml
info:
  namespace: iasurvival
items:
  letter_written_letter:
    name: Written Letter
    permission_suffix: iasurvival.items.books.letter_written_letter
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
    permission_suffix: iasurvival.items.books.letter
    resource:
      material: WRITABLE_BOOK
      generate: true
      textures:
        - item/other/letter
    events:
      book_write:
        replace_properties:
          custom_model_data:
            copy_from_item: iasurvival:letter_written_letter
```

<figure><img src="../../.gitbook/assets/image (276).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (277).png" alt=""><figcaption></figcaption></figure>
