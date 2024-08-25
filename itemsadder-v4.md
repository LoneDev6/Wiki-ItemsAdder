# ⚡ ItemsAdder v4

## Introduction

Maintenir une compatibilité pour 6 versions du jeu est devenu une tache vraiment compliquée qui impactait trop la qualité du produit et ses delais de mise à jour.

J'ai décidé d'arrêter la compatibilité pour les versions de la 1.15 à la 1.20.4 en faveur d'une meilleure expérience avec la 1.20.5+

## Ce que la communauté en pense

La communauté Discord a voté pour arrêter la compatibilité avec les anciennes versions, donc cette décision ne viens pas de nulle part.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>



## ViaVersion madness

ViaVersion est un cancer s'il est utilisé incorrectement. Le but de ViaVersion était de permettre aux clients de se connecter à un lobby multi-version où les joueurs peuvent décider quel serveur ils souhaitent rejoindre.

Chaque serveur a sa propre version, par exemple, le serveur de survie est en 1.20.5 et le serveur PVP est en 1.8. Cela permet aux gens de se connecter au même serveur de lobby qui est le hub principal de la communauté du serveur.

Les administrateurs de serveurs abusent de ce pouvoir en permettant aux joueurs de jouer sur des serveurs survie en se connectant via les versions 1.8, 1.9, 1.13, 1.18, 1.20 sur des serveurs en 1.20.x. Cela cause de multiples incompatibilités, instabilités, bugs, et glitches.
La raison pour laquelle cela se produit est que les clients (et serveurs) ont subi ÉNORMÉMENT de changements entre leurs versions, dont la plupart sont cruciaux.

S'attendre à un gameplay sans faille est impossible en raison du nombre de changements introduits entre les versions.

Un exemple clair d'un serveur réussi qui permet uniquement une version de se connecter est [OriginRealms](https://originrealms.com/), qui est l'une des expériences de survie multijoueur Minecraft les plus personnalisées, personne ne peut dire le contraire.

Je ne vois aucune raison de continuer cette absurdité d'attendre un gameplay stable tout en permettant à d'anciennes versions du jeu de se connecter à votre serveur, ou pire, de maintenir une ancienne version du serveur et de permettre aux nouvelles versions des clients de se connecter.

ItemsAdder a des tonnes d'astuces codées pour vérifier la version du client et la version du serveur, puis activer des correctifs spéciaux pour éviter les crashs/glitches (disons) sur les clients 1.18 qui se connectent à des serveurs 1.20. Je veux arrêter d'avoir à maintenir ce genre de trucs qui sont instables et n'introduisent rien d'autre que du stress pour moi et pour le client.

Alors s'il vous plaît, envisagez d'arrêter de permettre à plusieurs versions de se connecter à votre serveur de survie/gamemode.


## Donc pourquoi abandonner la compatibilité avec les anciennes versions ?

* moins de bugs grâce à moins de code bancal
* mises à jour plus rapides, plus besoin de maintenir à jour 6 implémentations de versions
* nouvelles fonctionnalités comme les [item displays](https://github.com/PluginBugs/Issues-ItemsAdder/issues/2458) et d'autres fonctionnalités intéressantes pour les [itemstacks](https://github.com/PluginBugs/Issues-ItemsAdder/issues/3536)
* processus d'application des resourcepacks plus fiable grâce aux récents [changements en 1.20.3+](https://github.com/PluginBugs/Issues-ItemsAdder/issues/3585)
* beaucoup des anciennes astuces pour ajouter la compatibilité avec les vieilles versions seront supprimées pour rendre le plugin plus stable


## Derniers mots

{% hint style="info" %}
Vous devriez vraiment envisager de migrer votre ancien serveur vers la version 1.20.5 et arrêter **d'ab-user** de ViaVersion. Les joueurs, les administrateurs, et moi-même n'obtenons aucun avantage à utiliser ViaVersion pour permettre à plusieurs versions de rejoindre votre serveur, cela ne fait qu'introduire énormément de stress et de frustration.
{% endhint %}

{% hint style="success" %}
Old versions will still be downloadable so you can keep using legacy ItemsAdder versions and don't update to the new versions.
Les anciennes versions seront toujours téléchargeables donc vous pouvez continuer d'utiliser l'"ancien" ItemsAdder et ne pas mettre à jour vers les nouvelles versions.
{% endhint %}
