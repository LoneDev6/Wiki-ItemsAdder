---
description: Fusionner d'autres packs de ressources (y compris les packs de ressources des plugins personnalisés)
---

# 🗃 Fusionner des packs de ressources

{% hint style="danger" %}
### ItemsAdder 3.3+ uniquement !
{% endhint %}

## Pourquoi fusionner ?

**Minecraft** ne prend en charge **qu'un seul pack de ressources pour le serveur**.\
**Si** vous avez plus d'un pack de ressources, vous devez les fusionner.

## Comment fusionner ?

### Étape 1

Copiez le dossier `assets` de votre pack de ressources.

### Étape 2

Collez le dossier `assets` de votre pack de ressources dans un nouveau sous-dossier `contents`.\
Par exemple `merged_pack_1` : `ItemsAdder/contents/merged_pack_1/resourcepack/`

### Étape 3

Utilisez la commande `/iazip` pour compresser le pack de ressources d'ItemsAdder.\
(Veillez à suivre le [tutoriel d'hébergement](../resourcepack-hosting/) approprié en fonction de la méthode d'hébergement choisie).

### Étape 4 (utilisateurs avancés)

Si vous fusionnez plus d'un pack, vous devrez peut-être définir une priorité de fusion.\
Ouvrez config.yml et indiquez l'ordre de priorité de chargement de vos dossiers `contents`.

{% code title="config.yml" %}
```yaml
    contents-folders-priorities:
      - vanilla
      - _iainternal
      - merged_pack_1
      - merged_pack_2
      - merged_pack_3
      # ... autres packs ici pour lesquels vous souhaitez modifier l'ordre de chargement.
```
{% endcode %}

### C'est fait

## Exemples

{% content-ref url="../../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
