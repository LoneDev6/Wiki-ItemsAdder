# Animations

## How to create an animation

You can animate your models normally, like you would do with normal Blockbench models.\
You can find a lot of tutorials on YouTube.

{% embed url="https://www.youtube.com/results?search_query=blockbench+animation+tutorial" %}

## Lock the player movement

You can specify if the player can move while playing one specific animation or not.

![](<../../../.gitbook/assets/image (76).png>)

## Looping animations

You can create animations which would play `start` -> `loop` -> `end` sub-animation.\
This allows you to create complex looping animations, for example a sleep animation where your player would lay and stay there until the player presses SHIFT.

### Step 1

Create the animation, in this example a death animation.

![](<../../../.gitbook/assets/image (96).png>)

Right click it and mark it as `Loop`.

![](<../../../.gitbook/assets/image (92).png>)

### Step 2

Now place the cursor on the frame where you want the loop to start, in this case when the player is on the ground.

![](<../../../.gitbook/assets/image (75).png>)

### Step 3

Click on the `Add Loop Start/End marker` icon to add a `start loop` marker.

![](<../../../.gitbook/assets/image (60).png>)

Now place the animation cursor on the frame where you want the loop to stop and press again on the `Add Loop Start/End marker` icon.

![](<../../../.gitbook/assets/image (46).png>)

The result will be like this:

![](<../../../.gitbook/assets/image (93).png>)
