# ⚡ Conseils pour une utilisation plus rapide

## Ça prend trop de temps d'éditer le pack et le télécharger en ligne !

Oui, si vous faites cela de la mauvaise manière. Lisez ceci :

{% hint style="info" %}
Il est recommandé de créer un **serveur de test sur votre PC** avec :

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [LoneLib](https://www.spigotmc.org/resources/lonelibs.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)

ItemsAdder avec cette configuration de resourcepack :

{% code title="ItemsAdder/config.yml" %}
```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true # <----- ICI, mettez true
      server-ip: '127.0.0.1' # <----- ICI, tapez l'adresse IP de votre serveur sans le port !
      pack-port: 8163 # <----- ICI, tapez l'un de vos ports libres/additionnels/ouverts !
    external-host:
      enabled: false
```
{% endcode %}

En faisant cela, vous aurez un environnement de configuration rapide et facile à utiliser.\
Vous pouvez ajouter des objets et éditer le pack en temps réel.

Lorsque vous éditez une texture/modèle d'objet et que vous modifiez sa configuration, utilisez la commande `/iazip`.\
En faisant cela, vous verrez les changements appliqués en temps réel.

Ainsi, après avoir terminé l'ajout et la configuration des objets, vous pourrez tout télécharger sur votre serveur en ligne pour refléter les changements.
{% endhint %}

{% hint style="warning" %}
Il est recommandé de ne pas éditer les textures et modèles d'ItemsAdder directement sur votre serveur en ligne.\
Les joueurs détestent le lag lors des rechargements de plugins, les redémarrages de serveur, devoir re-télécharger le pack lorsqu'ils jouent déjà...\
Il est préférable de faire des modifications et des tests sur un serveur de test local.
{% endhint %}

{% hint style="warning" %}
N'oubliez pas ! C'est le meilleur réglage pour votre serveur car il est le plus rapide et ne nécessite\
aucune maintenance lors du téléchargement du pack.
{% endhint %}

{% hint style="danger" %}
Il est préférable de ne pas modifier mes objets personnalisés.\
À l'avenir, je les modifierai et vous deviendrez fou à maintenir à la fois vos personnalisations et mes mises à jour.\
Il est conseillé de créer vos propres objets à la place.
{% endhint %}
