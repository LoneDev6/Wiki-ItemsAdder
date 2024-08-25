# 🔢 Statistiques de joueur personnalisées

## Qu'est-ce que les statistiques des joueurs ?

Ce sont des attributs personnalisés ajoutés par ItemsAdder. Vous pouvez les ajouter et les lire en utilisant une commande spéciale : `/iaplayerstat`.

Vous pouvez ensuite utiliser **PlaceholderAPI** pour les afficher n'importe où ou les lier à un HUD.\
J'ai utilisé cela pour créer la soif et la mana. Consultez mes [configs par défaut](https://github.com/search?q=repo%3AItemsAdder%2FDefaultPack+player_stat_name&type=code) pour des exemples.

### Exemple :

`/iaplayerstat write LoneDev thirst 6`\
`/iaplayerstat read LoneDev thirst float`

## Sauvegarde des statistiques des joueurs

### Fichier NBT personnalisé

Les statistiques sont sauvegardées dans un fichier NBT personnalisé géré par ItemsAdder, qui peut être supprimé facilement par la suite.\
Ce fichier est sauvegardé dans le dossier `plugins\ItemsAdder\storage\players\stats\`.

```yaml
player_stats:
  save_type: CUSTOM_NBT
```

<figure><img src="../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

### Fichier player.dat

Les sauvegarder dans le fichier `player.dat` vanilla.\
C'est utile si vous voulez synchroniser votre serveur et que vous synchronisez deja ce fichier.

```yaml
player_stats:
  save_type: PLAYER_DAT
```

<figure><img src="../.gitbook/assets/image (55).png" alt=""><figcaption></figcaption></figure>
