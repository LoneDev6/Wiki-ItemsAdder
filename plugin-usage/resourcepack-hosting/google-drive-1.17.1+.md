# 📤 Google Drive (1.17.1+)

## Comment utiliser Google Drive

{% hint style="warning" %}
Cette méthode présente des problèmes sur certains PC dans les versions de Minecraft avant 1.17 en raison d'un bug de Minecraft. En savoir plus ici : [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

Cette méthode fonctionne à 100 % avec Minecraft 1.17.1 et les versions les plus récentes.
{% endhint %}

### Étape 1

Cliquez avec le bouton droit sur votre fichier zip de pack de ressources et appuyez sur "Obtenir le lien"

![](<../../.gitbook/assets/image\_(153) (1).png>)

### Étape 2

Important : définissez la permission sur "Toute personne ayant le lien"

![](../../.gitbook/assets/image\_\(145\).png)

Appuyez sur "Copier le lien"

![](../../.gitbook/assets/image\_\(149\).png)

### Étape 3

Visitez ce site : [http://a.devs.beer/gdrive-direct](http://a.devs.beer/gdrive-direct)

Collez le lien et appuyez sur "Get direct link"

<img src="../../.gitbook/assets/image_(144).png" alt="" data-size="original">

### Étape 4

Le site ajoute automatiquement le lien généré dans votre presse-papiers.

![](../../.gitbook/assets/image\_\(147\).png)

Vous pouvez maintenant coller le lien dans le fichier de configuration **ItemsAdder** : `config.yml`, puis utiliser la commande `/iareload`.

{% code title="config.yml" %}
```yaml
external-host:
  enabled: true
  url: 'http://drive.google.com/uc?export=view&id=10g3whim95Hab40KZNjUkwY9FUuqKMGh5'
```
{% endcode %}

### C'est fait !

Vous pouvez maintenant voir que le pack est correctement chargé par le jeu.

## Problèmes courants

### Longtemps sur "En cours de demande... 100%"

### ![](../../.gitbook/assets/image\_\(141\).png)

C'est normal. Cela se produit parce que Google Drive fait certaines opérations avant d'autoriser le téléchargement du pack de ressources.

Cela se produit uniquement lorsque le joueur télécharge le pack de ressources pour la première fois et cela prendra de 5 à 10 secondes.

### Pack de ressources ne se charge pas du tout

Cette méthode présente des problèmes sur certains PC dans les versions de Minecraft avant 1.17 en raison d'un bug de Minecraft. En savoir plus ici : [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

Cette méthode fonctionne à 100 % dans Minecraft 1.17.1 et les versions les plus récentes.

## Continuez l'installation si nécessaire

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}
