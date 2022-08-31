# 使插件与Itemsadder进行兼容

与 Itemsadder 进行兼容非常容易

**API** 可通过添加 maven 依赖免费获取

{% content-ref url="../developers/java-api/" %}
[java-api](../developers/java-api/)
{% endcontent-ref %}

## 如何获得物品

{% content-ref url="../developers/java-api/examples.md" %}
[examples.md](../developers/java-api/examples.md)
{% endcontent-ref %}

{% hint style="warning" %}
## 重要事项

请确保监听 **ItemsAdderFirstLoadEvent** 事件. 
ItemsAdder会以异步的方式加载物品和其他东西,所以你一定要在使用API之前监听该事件.
{% endhint %}
