# 📤 Hébergement LobFile

{% hint style="warning" %}
Cette fonctionnalité nécessite **ItemsAdder 3.6.3** ou une version ultérieure.
{% endhint %}

## Tutoriel vidéo

Bientôt disponible

## Qu'est-ce que LobFile ?

**ItemsAdder** vous permet de télécharger automatiquement votre resourcepack sur un **service en ligne gratuit** avec des serveurs à travers le monde.

Merci beaucoup à **LobFile**[ ](https://ploudos.com/)qui nous fournit leur plateforme pour héberger des fichiers gratuitement !

{% embed url="https://lobfile.com/" %}

## Quels sont les avantages ?

* vitesse de téléchargement
* disponibilité
* sécurité : l'adresse IP de votre serveur n'est pas exposée
* pas de consommation élevée de bande passante

## J'utilise déjà `self-host`, est-ce mieux ?

Cela dépend.

Il est préférable d'utiliser [self-host](resourcepack-self-hosting.md) si vous travaillez sur le resourcepack et devez exécuter continuellement `/iazip`, afin d'éviter de perdre du temps (lisez plus [ici](tips-for-fastest-usage.md)).

Une fois que vous avez terminé de travailler sur le pack, vous pouvez commencer à utiliser cette autre fonctionnalité d'hébergement au lieu de `self-host`.\
Cela réduira le trafic de votre serveur puisque le resourcepack ne sera plus hébergé sur votre serveur.

Si votre base de joueurs est principalement dans le même pays, vous pouvez rester avec `self-host`.

## Configuration

#### Étape 1

Créez un compte sur [LobFile ici](https://lobfile.com/create-account).

#### Étape 2

Ouvrez vos [paramètres de compte ici](https://lobfile.com/my-account) et cochez _**"Téléchargement continu"**_

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

#### Étape 3

Survolez le texte `API Key` et copiez votre clé.

<figure><img src="../../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>

#### Étape 4

Activez `lobfile` dans `config.yml` et désactivez toutes les autres méthodes d'hébergement.

{% code title="ItemsAdder/config.yml" %}
```yaml
lobfile:
  enabled: true
```
{% endcode %}

Ouvrez `secret.yml` et collez votre `API Key`.

{% code title="ItemsAdder/secret.yml" %}
```yaml
lobfile:
  api_key: xxxxxxxxxx
```
{% endcode %}

#### Étape 5

Exécutez `/iazip.`

Attendez que le message de la politique de confidentialité apparaisse.\
Exécutez `/acceptprivacy` pour accepter la politique (cela sera demandé uniquement la première fois).

### Terminé

Le **plugin** **téléversera** le resourcepack en ligne **automatiquement**.\
Il n'y a rien d'autre à faire, profitez de votre **hébergement gratuit et automatisé de resourcepack**.

## Mon resourcepack sera-t-il disponible en ligne pour des personnes aléatoires ?

21-12-2023 :\
Votre resourcepack ne sera pas indexé sur Google et ne sera pas publié dans une liste de resourcepacks.\
Seules les personnes connaissant le lien pourront télécharger le pack.
