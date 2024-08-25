# 📎 Placeholders spéciaux

## PlaceholderAPI

### FontImage (emoji, etc.)

Voici le code : `%img_NAME%`, remplacez `NAME` par le nom de l'image de police.\
Par exemple : `%img_smile%`

### Décalages

Vous pouvez décaler le texte ou les images de police en avant ou en arrière.\
Par exemple :

* vous pouvez le décaler de 16 pixels en arrière en écrivant `%img_offset_-16%`
* vous pouvez le décaler de 16 pixels en avant en écrivant `%img_offset_16%`

### ItemsAdder PlayerStats (valeurs HUD)

Ce sont des statistiques utilisées par ItemsAdder, ce ne sont pas des statistiques vanille.

Voici le code : `%iaplayerstat_NAME%`, remplacez `NAME` par le nom de la statistique du joueur.\
Par exemple : `%iaplayerstat_mana%` ou `%iaplayerstat_thirst%`

Vous pouvez utiliser cette commande pour tester :\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`

{% hint style="info" %}
#### En savoir plus sur les playerstats
{% endhint %}

## Placeholders intégrés d'ItemsAdder (sans PlaceholderAPI)

### FontImage (emoji, etc.)

Voici le code : `:img_NAME:`, remplacez `NAME` par le nom de l'image de police.\
Par exemple : `:img_smile:`

### Décalages

Vous pouvez décaler le texte ou les images de police en avant ou en arrière.\
Par exemple :

* vous pouvez le décaler de 16 pixels en arrière en écrivant `:img_offset_-16:`
* vous pouvez le décaler de 16 pixels en avant en écrivant `:img_offset_16:`

### ItemsAdder PlayerStats (valeurs HUD)

Ce sont des statistiques utilisées par ItemsAdder, ce ne sont pas des statistiques vanille.

Voici le code : `:iaplayerstat_NAME:`, remplacez `NAME` par le nom de la statistique du joueur.\
Par exemple : `:iaplayerstat_mana:` ou `:iaplayerstat_thirst:`
