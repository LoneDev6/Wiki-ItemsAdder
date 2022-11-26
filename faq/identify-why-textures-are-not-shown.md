# 🔍 Identify why textures are not shown

### Purpose

* black and purple texture is shown
* your model doesn't load correctly
* the pack failed to load

## Any launcher

Join the server and let the pack load.

Open your Minecraft GAME log file, **not server** logs.\
It is usually in `%appdata%\.minecraft\logs\latest.log` if not please search inside this folder `%appdata%\.minecraft\logs\`

You can clearly see which files failed to load and why, the errors are clear in most of the cases.

## Original launcher

### Enable output log

![](../.gitbook/assets/image\_\(135\).png)

### Join the server and read the log

![](<../.gitbook/assets/json\_errors (1).png>)

### Find out which file is broken

You can clearly see which files failed to load and why, the errors are clear in most of the cases.\
In this example I had two broken files `gem_vending_machine` and `whitebathroom_sink`.\
The error tells me that the JSON files are broken, they probably have bad characters inside or they are corrupted.
