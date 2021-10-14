# ☕ Java API

## How to get the API

You just have to use **maven **or **gradle**, you can get the **API **here

{% embed url="https://github.com/LoneDev6/ItemsAdder-API#-packages" %}

## Description

ItemsAdder includes an easy to use API for Java developers.\
To access it just include **dev.lone.itemsadder.api.ItemsAdder** in your code.

## Important notes

{% hint style="warning" %}
It's very important to listen to the [ItemsAdderLoadDataEvent ](events.md#itemsadderloaddataevent)event in order to make sure items are correctly loaded before accessing them.

ItemsAdder loading is async that's why.
{% endhint %}
