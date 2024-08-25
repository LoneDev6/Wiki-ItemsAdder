# ⚠ Non compatible

_**Est-ce compatible avec le plugin X ?**_

Je ne peux pas répondre avec certitude à cette question, car je ne peux pas connaître le code de chaque plugin existant, mais voici une liste de plugins qui peuvent causer des problèmes :

* Tous les plugins qui utilisent des **resourcepacks personnalisés** (vous pouvez les rendre compatibles si vous avez un minimum de connaissances sur la façon de fusionner des resourcepacks manuellement, assurez-vous de ne pas remplacer les fichiers d'ItemsAdder et le tour est joué)
* [CraftEnhance](https://www.spigotmc.org/resources/custom-recipes-and-crafting-craftenhance.65058/), ce plugin perturbe la logique des recettes personnalisées d'ItemsAdder et crée des bugs de duplication. Veuillez donc ne pas l'utiliser
* Les plugins qui personnalisent le comportement de la table de craft et les recettes
* [LootChest](https://www.spigotmc.org/resources/lootchest.61564/) peut causer des [problèmes](https://github.com/LoneDev6/ItemsAdder/issues/15#issuecomment-512990849)
* Pour l'instant, ce n'est **pas compatible** avec les **plugins** et les générateurs de mondes qui **génèrent des blocs de champignon** avec des faces différentes pour créer des textures personnalisées. À l'avenir, j'ajouterai la compatibilité.