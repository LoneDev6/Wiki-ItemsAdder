# Fix blocks problem

{% hint style="warning" %}
**MMOItems** blocks are not compatible with **ItemsAdder** and vice versa.
{% endhint %}

## How to use MMOItems blocks?

You have to open the `config.yml` file of **ItemsAdder** and disable **REAL** blocks (mushroom).

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

{% hint style="info" %}
After applying this change you won't be able to create ItemsAdder blocks with type: REAL.

Other ItemsAdder custom block types will still work (for example REAL\_NOTE).
{% endhint %}
