---
icon: person-running
---

# Animations

## How to create an animation

You can animate your models normally, like you would do with normal Blockbench models.\
You can find a lot of tutorials on YouTube.

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## Configure animation type

You have to specify animations types in order to let ItemsAdder play animations based on the entity state.\
The ItemsAdder Blockbench extension does that automatically on conversion, but sometimes you might have strange animation names and it could not automatically recognize them.

Right click an animation and make sure the animation type is correct.

![](<../../../.gitbook/assets/image (101).png>)

You can set some special animations by settings their name instead, as some new features are not avilable in the dropdown menu.

Rename your animations to this.

* `idle`
* `idle_angry`
* `walk`
* `walk_angry`
* `jump` (used by Slime for example)&#x20;
* `attack`
* `death`
* `fly`

## Notes

{% hint style="info" %}
* This extension supports animated scale of bones. Make sure to avoid scaling when it's not needed. Check your keyframes.
* Avoid adding too many rotation, details and movements, don't forget this is a blocky pixelated game, use [its style](broken-reference).
{% endhint %}
