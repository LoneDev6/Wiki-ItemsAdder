# 📤 DropBox

## Tutoriel textuel

* Ouvrez [DropBox](https://dropbox.com/), enregistrez-vous/connectez-vous
* Utilisez la commande `/iazip` (**c'est important** car `/iazip` recharge les configs et met à jour le fichier **generated.zip**)
* Ouvrez le dossier : `plugins/ItemsAdder/output/`
* **Faites glisser et déposez** le fichier **generated.zip** sur **DropBox**
* Cliquez sur **Partager**

![](../../.gitbook/assets/image\_\(20\).png)

* Cliquez sur **Créer**

![](../../.gitbook/assets/image\_\(21\).png)

* Cliquez sur **Copier le lien**
* Par exemple, si votre lien est [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)
* Ouvrez le `config.yml` de **ItemsAdder**
* Configurez-le comme ceci (**J'ai utilisé l'URL d'exemple, veuillez utiliser la vôtre**)

{% code title="ItemsAdder/config.yml" %}
```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```
{% endcode %}

* **C'EST VRAIMENT IMPORTANT** : **Utilisez la commande** `/iareload` pour **recharger** le **plugin après** avoir **modifié** quelque chose dans `config.yml` (dans ce cas pour recharger le lien de téléchargement du resourcepack)
* **Utilisez la commande** `/iatexture` dans votre jeu pour rafraîchir la texture actuelle en jeu ou utilisez `/iatexture all` pour la rafraîchir pour tous les joueurs

{% hint style="danger" %}
VEUILLEZ utiliser `/iazip` **à chaque fois** que vous éditez une **texture**, un **modèle** 3D, un **son**... puis **re-téléversez** le pack sur **Dropbox** et utilisez **/iareload** ou vous ne verrez évidemment aucun changement.
{% endhint %}

{% hint style="warning" %}
**Changez** le **nom du fichier à chaque fois** que vous **téléversez** une **nouvelle version** du **resourcepack** pour **forcer** le jeu à **re-télécharger** la **nouvelle version**.\
Si vous **re-téléversez** le fichier **zip** avec le même nom et gardez la **même URL**, il **ne sera pas mis à jour** pour chaque joueur.
{% endhint %}

## Mais c'est tellement lent ! Je dois re-télécharger sur DropBox trop souvent !

Oui, c'est le cas, c'est pourquoi vous devriez utiliser la fonctionnalité d'auto-hébergement plutôt que **DropBox**. Mais certains hébergements (bon marché) ne fournissent pas l'ouverture de ports, donc vous devez utiliser **DropBox**.

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}

## Continuez l'installation si nécessaire

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}
