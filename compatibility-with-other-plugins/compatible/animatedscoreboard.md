# AnimatedScoreboard

## [Download here](https://www.spigotmc.org/resources/animatedscoreboard.20848/)

{% hint style="warning" %}
Please refer to the plugin page tutorials before asking for help, I'm not the developer of this plugin and this info might become outdated at some point.
{% endhint %}

## Creating a scoreboard

Create a new file in `plugins/AnimatedScoreboard/scoreboards` and name it `example_itemsadder.yml`

Copy this content inside the file and save it:

```
// Some code
```

Use the following commands:

`/animatedsb reload`

`/animatedsb switch example_itemsadder`

## Font images in the scoreboard

You can use [font\_images ](../../plugin-usage/adding-content/font-images/)(emojis and symbols) in the scoreboard if you install **PlaceholderAPI**.

### Example

`%img_smile%` will show like that:

![](<../../.gitbook/assets/immagine (95).png>)

## Hide the scoreboard background

With ItemsAdder you can hide the scoreboard background, just use this trick.

(works with every scoreboard plugin)

{% tabs %}
{% tab title="Before" %}
​

<figure><img src="https://files.gitbook.com/v0/b/gitbook-legacy-files/o/assets%2F-M28TcKgSDvuFN510qye%2F-MhOfUmIRJYMhFZM2AQy%2F-MhOgJ6DpHjDR8dc9NYc%2Fimmagine.png?alt=media&#x26;token=1a5efcc3-27a5-49b4-80c9-c98ebcb197d2" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="After" %}
​\\

<figure><img src="https://files.gitbook.com/v0/b/gitbook-legacy-files/o/assets%2F-M28TcKgSDvuFN510qye%2F-MhOfUmIRJYMhFZM2AQy%2F-MhOg9VxfKvE2ZGZ3QE6%2Fimmagine.png?alt=media&#x26;token=c4ee2fd0-2aa9-46e2-a8dd-0025dcc64f7e" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

### How to hide the background

You just have to add `%img_offset_-500%` in front of <mark style="color:yellow;">**each line**</mark>\*\* \*\* of your scoreboard configuration, <mark style="color:yellow;">even in empty lines!</mark>

{% hint style="danger" %}
#### Warning!

Not compatible with special attributes of **AnimatedScoreboard** like these and similar!

`<health full=&4 half=&c empty=&f update=5>❤</health>`

`<repeat times=10>|</repeat>`

`<stay ticks=100>&lAnimated Scoreboard</stay>`

<mark style="color:red;">Please do not ask me for support</mark>, I cannot fix this, I'm not the author of **AnimatedScoreboard**.

If you want to use `<stay>` you have to put the `%img_offset_-500%` after the first `>`.\
Example:

`<stay ticks=100>%img_offset_-500%&lAnimated Scoreboard</stay>`
{% endhint %}

<details>

<summary>&#x3C;--- Click here to get the YML configuration file</summary>

{% code title="defaultscoreboard.yml" %}
```yaml
display:
    title:
      text:
      - "%img_offset_-500%&lA"
      - "%img_offset_-500%&lAn"
      - "%img_offset_-500%&lAni"
      - "%img_offset_-500%&lAnim"
      - "%img_offset_-500%&lAnima"
      - "%img_offset_-500%&lAnimat"
      - "%img_offset_-500%&lAnimate"
      - "%img_offset_-500%&lAnimated"
      - "%img_offset_-500%&lAnimated "
      - "%img_offset_-500%&lAnimated S"
      - "%img_offset_-500%&lAnimated Sc" 
      - "%img_offset_-500%&lAnimated Sco"
      - "%img_offset_-500%&lAnimated Scor"
      - "%img_offset_-500%&lAnimated Score"
      - "%img_offset_-500%&lAnimated Scoreb"
      - "%img_offset_-500%&lAnimated Scorebo"
      - "%img_offset_-500%&lAnimated Scoreboa"
      - "%img_offset_-500%&lAnimated Scoreboar"
      - "%img_offset_-500%&lAnimated Scoreboard"
      - "%img_offset_-500%&c&lAnimated Scoreboard"     
      - "%img_offset_-500%&lAnimated Scoreboard"
      - "%img_offset_-500%&c&lAnimated Scoreboard"
      - "%img_offset_-500%&lAnimated Scoreboard"
      - "%img_offset_-500%&c&lAnimated Scoreboard"
      - "<stay ticks=100>%img_offset_-500%&lAnimated Scoreboard</stay>"
      random: false
      interval: 2
    line-1:
      text:
      - "%img_offset_-500%"
      random: false
      interval: 200
      score: 99   
    line-2:
      text:
      - "%img_offset_-500%&a&lWelcome %player_name%"
      - "%img_offset_-500%&b&lWelcome %player_name%"
      - "%img_offset_-500%&c&lWelcome %player_name%"   
      random: false
      interval: 5
      score: 98
    line-3:
      text:
      - "%img_offset_-500%"
      random: false
      interval: 20
      score: 97
    line-4:
      text:
      - "%img_offset_-500%&aYour gamemode:"
      - "%img_offset_-500%&aYour location:"
      - "%img_offset_-500%&aYour world:"    
      random: false
      interval: 60
      score: 96
    line-5:
      text:
      - "%img_offset_-500% &b%player_gamemode%"
      random: false
      interval: 60
      score: 95
    line-6:
      text:
      - "%img_offset_-500% &bX:%player_x% Y:%player_y% Z:%player_z%"
      random: false
      interval: 1
      score: 95
    line-7:
      text:
      - "%img_offset_-500% &b%player_world%"    
      random: false
      interval: 60
      score: 95
    line-8:
      text:
      - "%img_offset_-500%"
      random: false
      interval: 200
      score: 95
    line-9:
      text:
      - "%img_offset_-500%&1Random Rotation"
      - "%img_offset_-500%&2Random Rotation"
      - "%img_offset_-500%&3Random Rotation"
      - "%img_offset_-500%&4Random Rotation"
      - "%img_offset_-500%&5Random Rotation"
      - "%img_offset_-500%&6Random Rotation"
      - "%img_offset_-500%&7Random Rotation"
      - "%img_offset_-500%&8Random Rotation"
      - "%img_offset_-500%&9Random Rotation"
      - "%img_offset_-500%&aRandom Rotation"
      - "%img_offset_-500%&bRandom Rotation"
      - "%img_offset_-500%&cRandom Rotation"
      - "%img_offset_-500%&dRandom Rotation"
      - "%img_offset_-500%&eRandom Rotation"
      - "%img_offset_-500%&kRandom Rotation" 
      - "%img_offset_-500%&lRandom Rotation" 
      - "%img_offset_-500%&mRandom Rotation" 
      - "%img_offset_-500%&nRandom Rotation"
      - "%img_offset_-500%&oRandom Rotation"
      - "%img_offset_-500%&rRandom Rotation"       
      random: true
      interval: 1
      score: 94
    line-10:
      text:
      - "%img_offset_-500%"       
      random: true
      interval: 1
      score: 93
```
{% endcode %}

</details>

## Hide the red numbers from Scoreboard

{% content-ref url="../../plugin-usage/scoreboard/hide-scoreboard-numbers-1.17+.md" %}
[hide-scoreboard-numbers-1.17+.md](../../plugin-usage/scoreboard/hide-scoreboard-numbers-1.17+.md)
{% endcontent-ref %}
