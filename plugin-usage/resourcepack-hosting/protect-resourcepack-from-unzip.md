description: Comment protéger votre pack de ressources des voleurs
---

# 🚨 Protéger le pack de ressources contre la décompression

{% hint style="warning" %}
## Avertissement

Il n'existe pas de méthode 100% efficace pour protéger un pack de ressources, car le jeu doit être capable de le décompresser correctement pour afficher les textures.

Cette fonctionnalité est une mesure d'atténuation pour éviter que des enfants et des trolls ne volent vos textures.\
Certains utilisateurs expérimentés pourraient être en mesure de contourner ces protections.

ItemsAdder fait de son mieux pour prévenir cela, mais gardez cette éventualité à l'esprit.

Tous les autres plugins ont les mêmes limitations. Ce n'est pas une limitation d'ItemsAdder.
{% endhint %}

{% hint style="info" %}
Avec ItemsAdder, vous pouvez protéger votre pack de ressources contre la décompression et les voleurs.\
Il vous suffit de configurer cette option dans config.yml et d'utiliser à nouveau /iazip.\
Si vous utilisez Dropbox, n'oubliez pas de re-uploader le pack et de mettre à jour le config.yml.

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      protection_1: true
      protection_2: true
```
{% endcode %}
{% endhint %}

## protection\_1

La propriété `protection_1` vous permet de protéger le pack de ressources avec une méthode de base.

## protection\_2

La propriété `protection_2` vous permet de protéger le pack avec une autre couche de protection pour bloquer certaines autres méthodes de décompression du pack.

## Showcase

Voici une présentation amusante de ce que l'utilisateur verra lorsqu'il essaie de voler vos données. Mais en réalité, ce que l'utilisateur verra est un groupe de fichiers et de dossiers corrompus.

{% embed url="https://youtu.be/MhtEhoOuWV8" %}
