# Adding compatibility

啥?你要给你的插件兼容ia?劳资告诉你,这tm有手就行\
**API**是**自由[免费]的**而且你可以在maven包得到:

{% content-ref url="../developers/java-api/" %}
[java-api](../developers/java-api/)
{% endcontent-ref %}

## 如何获得物品

{% content-ref url="../developers/java-api/examples.md" %}
[examples.md](../developers/java-api/examples.md)
{% endcontent-ref %}

{% hint style="warning" %}
## 重要事项

请确保监听**ItemsAdderFirstLoadEvent** 事件. \ItemsAdder会以异步的方式加载物品和其他东西,所以你一定要在使用API之前监听该事件.
{% endhint %}
