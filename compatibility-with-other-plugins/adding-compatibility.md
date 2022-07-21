# Adding compatibility

你要给你的插件兼容ia?其实很简单\
Ia的**API**是**免费的**而且你可以在maven包中得到:

{% content-ref url="../developers/java-api/" %}
[java-api](../developers/java-api/)
{% endcontent-ref %}

## 如何获得物品

{% content-ref url="../developers/java-api/examples.md" %}
[examples.md](../developers/java-api/examples.md)
{% endcontent-ref %}

{% hint style="warning" %}
## 重要事项

请确保监听 **ItemsAdderFirstLoadEvent** 事件. \ItemsAdder会以异步的方式加载物品和其他东西,所以你一定要在使用API之前监听该事件.
{% endhint %}
