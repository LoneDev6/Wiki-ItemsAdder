# Размер мебели

{% hint style="warning" %}
### Рекомендуется использовать маленькую мебель \(маленький бронестенд\)
{% endhint %}

## Как отрегулировать положение мебели при установке?

Если вы хотите настроить его, вам просто нужно использовать [Blockbench](../item-properties/resource/creating-3d-models.md) как обычно и:

![](../../../../.gitbook/assets/immagine%20%289%29.png)

1. нажмите на **display** справа
2. нажмите на значок **стойки** слева
3. нажмите на **улыбающееся лицо** \(**голову**\) слева
4. **переместите** вашу модель на подставку **внизу** \(это **земля**\)

### Слишком маленькая мебель

Если ваша мебель **слишком маленькая**, но вы хотите, чтобы она была **больше** и с большим **хитбоксом**, просто установите значение **false**.  
Если вы хотите **маленькую мебель** с маленьким хитбоксом, просто установите значение true.

{% tabs %}
{% tab title="Big furniture" %}
```yaml
behaviours:
  furniture:
    small: false
```
{% endtab %}

{% tab title="Small furniture" %}
```yaml
behaviours:
  furniture:
    small: true
```
{% endtab %}
{% endtabs %}

#### и установить это [BlockBench](../item-properties/resource/creating-3d-models.md)

{% tabs %}
{% tab title="Big furniture" %}
![](../../../../.gitbook/assets/immagine%20%288%29.png)
{% endtab %}

{% tab title="Small furniture" %}
![](../../../../.gitbook/assets/immagine%20%2810%29.png)
{% endtab %}
{% endtabs %}

