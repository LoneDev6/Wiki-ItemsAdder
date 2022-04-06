# Compatibility issue

## ModelEngine compatibility issue

This test was done spawning more than 50 custom entities which have a total of \~2000 bones.

## With ModelEngine installed

{% embed url="https://www.youtube.com/watch?v=QfKd8V2QRLc" %}

ModelEngine is interefering with my highly optimized entities system.\
This is what happens if I disable my optimizations to make ItemsAdder work: \
A complete messy slow system.\
As you can see entities look very slow and can't even keep up following the player. This is because the packets system is broken by ModelEngine slowness.

## Without ModelEngine installed

{% embed url="https://youtu.be/x_J3iHiFhps" %}

This is what happens if I uninstall ModelEngine: \
A very optimized and fast entities system.
