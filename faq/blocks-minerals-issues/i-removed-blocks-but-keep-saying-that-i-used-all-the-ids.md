# I removed blocks but keep saying that I used all the IDs

If you're really sure you can use this command to cleanup the plugin cache: `/iacleancache`\
It will remove all the cached IDs so that you can reuse the old IDs of removed blocks.

{% hint style="info" %}
### Why does ItemsAdder have a blocks IDs cache?

Cache exists because if you remove a block by mistake and then you want to add it back it will have the same old ID instead of a new one each time.
{% endhint %}
