# Adding compatibility

Добавить совместимость в элементы ItemsAdder очень просто!\
**API** является **бесплатным** и доступен через пакет maven:

## Как получить элемент

{% content-ref url="../developers/java-api/examples.md" %}
[examples.md](../developers/java-api/examples.md)
{% endcontent-ref %}

{% hint style="warning" %}
### Важно

Пожалуйста, убедитесь, что вы слушаете событие **ItemsAdderFirstLoadEvent**. ItemsAdder загружает свои элементы и другие вещи асинхронно, поэтому вы должны дождаться этого события, прежде чем использовать API.
{% endhint %}
