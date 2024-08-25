---
description: Comment installer le plugin
---

# ⚙ Première installation

{% hint style="info" %}
**Vous devriez suivre** cette première configuration **sur** votre **serveur de test** sur votre PC pour **éviter les erreurs** et trop de redémarrages... les joueurs n'aiment pas quand le serveur est hors ligne.\
Vous pouvez télécharger les fichiers sur votre vrai serveur après avoir terminé ici.
{% endhint %}

{% hint style="danger" %}
**Assurez-vous** que tous vos plugins et logiciels de serveur sont à jour !\

**Vérifiez toujours** la version d'ItemsAdder que vous téléchargez !\
<mark style="color:red;">**V3 est uniquement pour 1.20.4-(inférieur)**</mark>
<mark style="color:red;">**V4 est uniquement pour 1.20.6+(supérieur)**</mark>
{% endhint %}

## Étape 1 - Installation du plugin et des bibliothèques

* arrêtez le serveur
* installez [**ProtocolLib**](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/)
* installez [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* placez le fichier `ItemsAdder.jar` dans votre dossier plugins
* démarrez le serveur
* laissez ItemsAdder finir de **tout** charger

La première étape est terminée.


{% hint style="warning" %}
Maintenant, vous devez terminer **l'étape 2** pour configurer le pack de ressources (ne vous inquiétez pas, ce n'est pas très difficile).\
<mark style="color:red;">**NE SAUTEZ PAS CETTE ÉTAPE !**</mark>
{% endhint %}

## Étape 2 - Première installation du pack de ressources

{% hint style="warning" %}
Cette étape est importante, le plugin <mark style="color:red;">**NE FONCTIONNERA PAS**</mark> si vous ne terminez pas cette étape !
{% endhint %}

Avant d'utiliser le plugin, vous devez choisir la méthode d'hébergement du pack de ressources. \
Cliquez ci-dessous pour choisir une méthode d'hébergement pour le pack de ressources (meilleure méthode : `auto-hébergement`).

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## Étape 3 - (facultatif) Ajouter du contenu personnalisé officiel d'ItemsAdder

![](.gitbook/assets/items\_showcase\_gif.apng)

**ItemsAdder** est livré avec beaucoup de contenu personnalisé déjà créé pour vous.\
Il n'est pas automatiquement inclus dans le plugin téléchargé car certaines personnes pourraient ne pas vouloir que chaque objet/fonctionnalité soit automatiquement ajouté à leur serveur.

### Pack par défaut (facultatif)

![](<.gitbook/assets/image (47).png>)

* Téléchargez la dernière version du **DefaultPack**: [TÉLÉCHARGER](https://github.com/ItemsAdder/DefaultPack/releases/latest)
* Extrayez le contenu dans le dossier `ItemAdder` et écrasez les fichiers si demandé
* Exécutez la commande `/iazip` (et suivez votre [méthode d'hébergement](plugin-usage/resourcepack-hosting/) si vous n'utilisez pas **l'auto-hébergement**).

### Autre pack (facultatif)

![](<.gitbook/assets/image (50).png>)

* Si vous le souhaitez, vous pouvez télécharger les **OtherPacks** qui ajoutent encore plus de contenu : [TÉLÉCHARGER](https://github.com/ItemsAdder/OtherPacks/releases/latest)
* Extrayez le contenu dans le dossier `ItemAdder` et écrasez les fichiers si demandé
* Exécutez la commande `/iazip` (et suivez votre [méthode d'hébergement](plugin-usage/resourcepack-hosting/) si vous n'utilisez pas **l'auto-hébergement**).

Si vous êtes sur 1.17 ou inférieur, vous devez modifier la génération des minerais :

* Ouvrez ces fichiers et définissez `enabled: true`.
  * `contents\iaalchemy\configs\worlds_populators_old.yml`
  * `contents\iasurvival\configs\ores\configs\worlds_populators_old.yml`
* Ouvrez ces fichiers et définissez `enabled: false`.
  * `contents\iaalchemy\configs\worlds_populators_1_18.yml`
  * `contents\iasurvival\configs\ores\configs\worlds_populators_1_18.yml`

### Suppression des objets par défaut (facultatif)

{% content-ref url="faq/removing-default-stuff/" %}
[removing-default-stuff](faq/removing-default-stuff/)
{% endcontent-ref %}
