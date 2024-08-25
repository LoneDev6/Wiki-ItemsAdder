# 📥 Auto-hébergement

## Tutoriel vidéo

{% embed url="https://www.youtube.com/watch?v=XoTwF4_HztU" %}

## Informations sur l'auto-hébergement

Avec ItemsAdder, vous pouvez héberger le resourcepack directement sur votre serveur !\
Pas besoin de payer pour un hébergeur de site web et **pas besoin de télécharger le pack à chaque fois que vous effectuez un changement !**

{% hint style="warning" %}
**Votre service d'hébergement doit vous permettre d'obtenir des ports supplémentaires pour votre serveur.**\
Si votre service d'hébergement ne vous fournit pas de ports supplémentaires, vous devez utiliser l'une des [méthodes d'hébergement alternatives](./).
{% endhint %}

### Quelle est la différence entre l'auto-hébergement et les autres méthodes ?

La différence est qu'avec l'auto-hébergement, vous pouvez télécharger le pack directement depuis votre serveur sans avoir à le télécharger sur un site web à chaque fois que vous apportez un petit changement.

{% hint style="info" %}
`self-host` est vraiment utile lorsque vous configurez le resourcepack sur votre serveur de test sur votre PC. Vous n'avez qu'à utiliser la commande `/iazip` et vous verrez les changements appliqués en jeu presque instantanément.
{% endhint %}

{% content-ref url="tips-for-fastest-usage.md" %}
[tips-for-fastest-usage.md](tips-for-fastest-usage.md)
{% endcontent-ref %}

## Comment configurer l'auto-hébergement ?

* Vérifiez dans le **panel de votre service d'hébergement** si vous pouvez obtenir un port supplémentaire. Sinon, demandez au support de votre service d'hébergement de vous en fournir un.

Par exemple sur **Pterodactyl** :

![](../../.gitbook/assets/image\_\(104\).png)

![](../../.gitbook/assets/image\_\(101\).png)

* Après avoir obtenu un **nouveau port**, ouvrez `config.yml` et réglez-le comme ceci :

{% code title="ItemsAdder/config.yml" %}
```yaml
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
```
{% endcode %}

* Vous devez remplacer `127.0.0.1` par **l'IP de votre serveur**
* et remplacer `8163` par le nouveau port que vous avez obtenu.

Par exemple, si mon IP est `123.456.789.0` et mon port supplémentaire est `8163`, je le configurerai comme ceci :

{% code title="ItemsAdder/config.yml" %}
```yaml
  self-host:
    enabled: true
    server-ip: '123.456.789.0'
    pack-port: 8163
```
{% endcode %}

{% hint style="warning" %}
**pack-port** n'est pas le même que le port de votre serveur (celui que vos utilisateurs utilisent pour se connecter).
{% endhint %}

{% hint style="info" %}
`127.0.0.1` signifie "**ce PC (localhost)**".\
**Donc si vous testez le plugin sur votre PC**, vous pouvez **laisser la configuration par défaut** afin que le plugin recherche le fichier zip du resourcepack directement sur votre PC.
{% endhint %}

{% hint style="danger" %}
N'oubliez pas d'utiliser `/iazip` **à chaque fois** que vous éditez une **texture**, un **modèle** 3D, un **son**... sinon vous ne verrez évidemment aucun changement.
{% endhint %}

### Dernière étape

Après avoir configuré le fichier `config.yml`, vous n'avez plus qu'à exécuter la commande `/iazip` pour rafraîchir le fichier zip et commencer l'hébergement.

## Continuez l'installation si nécessaire

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}

## Plan payant Cloudflare (ou Proxy inverse)

Lisez cette partie si vous utilisez `Cloudflare` pour protéger votre IP + port (plan payant) et que vous avez une règle spéciale pour rediriger la demande de resourcepack depuis un sous-domaine vers le port de resourcepack.

Par exemple :

* le serveur est hébergé sur `mc.example.com`
* le resourcepack est sur le port `8163`
* vous avez défini une règle **Cloudflare** pour rediriger tout le trafic de `pack.example.com` vers `mc.example.com:8163`

Pour que cela fonctionne, vous devez configurer votre fichier comme ceci :

{% code title="ItemsAdder/config.yml" %}
```yaml
    self-host:
      enabled: true
      server-ip: 'https://pack.example.com' # <-- n'oubliez pas https
      pack-port: 8163
      append-port: false # <-- important
```
{% endcode %}

Cela empêchera ItemsAdder d'ajouter http devant votre URL et d'ajouter le port à la fin de l'URL.
