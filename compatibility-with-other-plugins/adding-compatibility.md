# Adding compatibility

Adding compatibility to ItemsAdder items is very easy!\
**API** is **free** and available via maven package:

{% content-ref url="../developers/java-api/" %}
[java-api](../developers/java-api/)
{% endcontent-ref %}

## How to get an item

{% content-ref url="../developers/java-api/examples.md" %}
[examples.md](../developers/java-api/examples.md)
{% endcontent-ref %}

{% hint style="warning" %}
## Important

Please make sure to listen to the **ItemsAdderFirstLoadEvent** event. ItemsAdder loads its items and other stuff async, so you have to wait for this event before using the API.
{% endhint %}
