# Namespace

## Namespace

As you surely noticed ItemsAdder uses **namespaces** to identify most of the things it manages.\
A **namespace** is a **group** of elements, in this case a group of **items**/**blocks**/**mobs**...\
With namespaces you can easily understand where a particular **item**, **sound**, **block**.. comes from.

### Example

All **realcraft** items are under the **realcraft** namespace, so when you use the `/iaget` command you can see all items IDs start with `realcraft:`

![](<../../../.gitbook/assets/image (7).png>)

## How can I define my own namespace?

Now that you see how it works you want to ask me this question: _How can I create my own namespace?_

In order to keep everything organized you have to create **your** own **namespace**.\
First step is to create a subfolder inside: `plugins\ItemsAdder\contents\`

In this example **namespace** will be `myitems` so create a folder named like the namespace: `contents\myitems\`

![](../../../.gitbook/assets/my\_items\_namespace.png)

Open the `myitems` folder and create a new file, you can call it like as prefer, I named it `myswords.yml`.\
`contents\myitems\myswords.yml`

![](../../../.gitbook/assets/my\_swords\_yml.png)

Open the new **.yml** file and paste this:

```yaml
info:
  namespace: myitems
```

As you see I set **namespace** to `myitems`, which is the **namespace** I chose before and it's the same name of the **folder**. Remember to change it based on your **namespace**.

{% hint style="info" %}
You can create as many **namespaces** you want! This allows you to easly organize your packs of items.
{% endhint %}

{% hint style="info" %}
You can create as many as **.yml** files you want in the same namespace!\
This allows you to organize items/things types better.\
For example I divided my items in swords, blocks, food, drinks...
{% endhint %}

{% hint style="warning" %}
**All this "nesting" could seem boring** **but** **trust me**, it reduces errors as much as possible and allows you to find everything easily.
{% endhint %}
