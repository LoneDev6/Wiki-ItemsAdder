# Compatibility issue

## ModelEngine compatibility issue

This test was done spawning more than 50 custom entities which have a total of \~2000 bones.

## With ModelEngine installed

{% embed url="https://www.youtube.com/watch?v=JsMgVohMHlo" %}

<mark style="color:red;">ModelEngine is interfering with my highly optimized entities system.</mark>\
This is what happens if I disable my optimizations to make ItemsAdder work: \
A complete messy slow system.\
As you can see entities look very slow and can't even keep up following the player. This is because the packets system is broken by ModelEngine slowness.

## Without ModelEngine installed

{% embed url="https://www.youtube.com/watch?v=mGA0D4k2Kzo" %}

This is what happens if I uninstall ModelEngine: \
<mark style="color:green;">A very optimized and fast entities system.</mark>
