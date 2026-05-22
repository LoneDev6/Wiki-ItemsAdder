---
icon: bag-shopping
---

# Bundle

## Configuration

{% tabs %}
{% tab title="Modern (1.21.4+)" %}
```yaml
items:
  example_bundle:
    display_name: "&6&lExample Bundle"
    permission: example_bundle
    material: BUNDLE
    graphics:
      texture: item/bundle_test
```
{% endtab %}

{% tab title="Legacy (1.21.3 and lower)" %}
```yaml
items:
  example_bundle:
    display_name: "&6&lExample Bundle"
    permission: example_bundle
    resource:
      material: BUNDLE
      generate: true
      textures:
      - item/bundle_test.png
```
{% endtab %}
{% endtabs %}

<div align="left"><img src="../../../.gitbook/assets/image (203).png" alt=""></div>

You have to create another file with `_filled` suffix, in this example `bundle_test_filled.png`.

## Result

![](<../../../.gitbook/assets/image%20(200).png>)
