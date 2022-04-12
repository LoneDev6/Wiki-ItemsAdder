## How to have single Pack in bungee but disable individual features per server?


**STEP 1**
Create the final pack for your server locally which includes everything you would need in your entire network
Make sure to create a pack with /iazip

**STEP 2**
Set host method to no host in IA config and disable extract of items to false

      hosting:
        no-host:
          enabled: true
      extract-default-items: false
      extract-default-resources: false

**STEP 3**
Upload the generated pack to you host or <https://mc-packs.net/> 

**STEP 4**
Use plugin like Force resourcepack <https://www.spigotmc.org/resources/force-resourcepacks.10499/> or similar in your bungee to load the the resource pack when you enter the network

**STEP 5**
Copy IA plugin and plugin folder from local dev server to 1st server (lets say lobby) to your `/plugins` folder **MAKE SURE TO COPY ALL THE FILES**

**STEP 6**
Remove unwanted files from `\plugins\ItemsAdder\data\items_packs` alone (you can leave resource packs folder as it doesn't affect anything)
**DONT REMOVE dictionaries, mcemojis, mcguis, mcicons, realcraft, various_configs FOLDER**
Also you can leave the folders you want this server to have (eg.. custom_esc, rpghuds, etc)

**STEP 7**
Restart the server and try entering
It should as you to download resource pack
When you enter lobby, you should only have the items you have in itemspack enabled
(Some items will look blank... but its something which we can ignore)

**STEP 8**
Add the IA folder and plugin from dev to server 2 (lets say survival)
Here i want all the features to work, so i don't delete anything
Restart the server, and confirm all items are working

**YOU GUYS WILL NEVER NEED ANY PLUGIN LIKE BungeePackFix FOR THIS.... ONLY IA + DEPENDENCIES ARE ENOUGH**

