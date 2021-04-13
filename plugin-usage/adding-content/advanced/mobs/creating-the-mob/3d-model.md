# 3D model

## Creating the animated model \(idle animation\)

To create the models I use [BlockBench](https://blockbench.net/), it's very easy to use and fast.  
BlockBench [tutorials ](https://www.youtube.com/results?search_query=blockbench+tutorial)are available on YouTube.

{% hint style="danger" %}
You have to make sure to create your model as Java Block/Item model! Don't use Bedrock Model or Entity model!

![](../../../../../.gitbook/assets/immagine%20%2875%29.png)
{% endhint %}

### Creating a very simple idle animation

For example I created this model, it's made of some cubes as you can see.

![](../../../../../.gitbook/assets/immagine%20%2855%29.png)

Now we want to animate it!  
For example I want to make it float up and down.

**1.Save** the **current model** in a temporary folder \(anywhere on your PC\)

![](../../../../../.gitbook/assets/immagine%20%2886%29.png)

![](../../../../../.gitbook/assets/immagine%20%2866%29.png)

![](../../../../../.gitbook/assets/immagine%20%2881%29.png)

Ok I saved it as **1.json** inside the **idle** folder. This is the first frame of the **animation**.

**2.**Return to **BlockBench** and select all pressing **CTRL+A**

![](../../../../../.gitbook/assets/immagine%20%2877%29.png)

**Hold left mouse button** while cliking on the **GREEN** arrow, **hold CTRL** and **move** the mouse **up** a little bit

![](../../../../../.gitbook/assets/immagine%20%2861%29.png)

**3.Save** the file again but change the name to **2.json**

**4.**Do the same thing 3 times \(move the mob a little bit up\) and save the file again increasing the number in its file name.

**5.**Now we have finished creating the needed frames for our animation. Open [this website](https://lonedev6.github.io/animated-models/)

![](../../../../../.gitbook/assets/immagine%20%2879%29.png)

**6.**Now click on the icon to load our json frames

![](../../../../../.gitbook/assets/immagine%20%2858%29.png)

![](../../../../../.gitbook/assets/immagine%20%2871%29.png)

**7.**Click on "**Choose files...**" and select your json files and the png texture

![](../../../../../.gitbook/assets/immagine%20%2814%29.png)

![](../../../../../.gitbook/assets/immagine%20%2882%29.png)

**8.**Click again on "**Choose files...**" and select the .png textures of your mob.

![](../../../../../.gitbook/assets/immagine%20%2887%29.png)

![](../../../../../.gitbook/assets/immagine%20%2878%29.png)

**10.**Click on **LOAD**

![](../../../../../.gitbook/assets/immagine%20%2860%29.png)

**11.Click** the **second icon** and **drag** and **drop** the **4 files** to the bottom line



![](../../../../../.gitbook/assets/immagine%20%2883%29.png)

**12.**You should have them like that

![](../../../../../.gitbook/assets/immagine%20%2873%29.png)

![](../../../../../.gitbook/assets/immagine%20%2868%29.png)

**13.**Drag and drop them again but in reverse \(3-2**, I skipped 1 and 4 because they would be useless for the animation**\)

![](../../../../../.gitbook/assets/immagine%20%2884%29.png)

![](../../../../../.gitbook/assets/immagine%20%2876%29.png)

**14.**Press the **play** button \(on the **bottom left**\) to **preview** the animation

![](https://i.imgur.com/zslbD0G.gif)

**15.** Press "**Export**" button \(top right of the screen\) and configure it like in the screenshot, then press "**Export**" again.

![](../../../../../.gitbook/assets/immagine%20%2862%29.png)

![](../../../../../.gitbook/assets/immagine%20%2859%29.png)

**16.**Now you will have a **zip** file with the animation, **download** it and **open** it.

**17.Extract** the zip inside your **ItemsAdder** folder `data\resource_pack\`

**17.**Open the file and change the texture name like this \(to include your **namespace,** in this example it's ****`creaturesplus`\)

```yaml
"main": "creaturesplus:mob/soul/idle"
```

**18.Extract** the .**png** file and the .**mcmeta** file from `assets\minecraft\textures\mob\soul\` to `data\resource_pack\assets\creaturesplus\textures\mob\soul\`

**18.**Set your mob configuration like this, to use the idle animation and not the stuck one: `"mob/soul/idle"`

```yaml
items:
  soul:
    display_name: display-name-soul
    permission: creaturesplus
    click_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/idle"
```

**19.**Use the command `/iazip` \(if you're using external-host please follow the [tutorial ](../../../../resourcepack-hosting/)carefully\)

**20.**spawn the mob using `/iasummon soul`

![](https://i.imgur.com/1tljgbv.gif)

{% hint style="warning" %}
Do not open the animated model \(exported from the website\) with BlockBench or any other editing program or it will probably break and stop working.
{% endhint %}

{% hint style="info" %}
You can delete the 1-2-3-4.json files, you don't need them anymore \(but you can backup them for future usage\), you only need the idle.json file and the png+mcmeta files which are the animated files.
{% endhint %}

## More advanced animations:

{% embed url="https://www.youtube.com/watch?v=DflNQjB0Okk" %}

## Full addon download

{% embed url="https://www.spigotmc.org/resources/mobs-creaturesplus-itemsadder-addon.84384/" %}



