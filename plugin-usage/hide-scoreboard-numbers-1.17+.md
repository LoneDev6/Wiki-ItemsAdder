# ⬜ Masquer le fond et les nombres du scoreboard

## Masquer les nombres du scoreboard

{% tabs %}
{% tab title="Après" %}
![Avec ItemsAdder](../.gitbook/assets/image\_\(130\).png)
{% endtab %}

{% tab title="Avant" %}
![Sans ItemsAdder](../.gitbook/assets/image\_\(131\).png)
{% endtab %}
{% endtabs %}

### Clients 1.20.3+

{% hint style="warning" %}
* Fonctionne uniquement sur les clients **Minecraft 1.20.3+**
* **Fonctionne uniquement sur les serveurs Minecraft 1.20.3+ !**
* N'édite pas les fichiers shader `rendertype_text`, il ne fait appel à aucun shader
{% endhint %}

{% code title="config.yml" %}
```yaml
effects:
  hide-scoreboard-numbers: true
```
{% endcode %}

{% hint style="info" %}
Cette option ne nécessite pas que `/iazip` soit exécuté.\
Vous pouvez changer cette valeur et simplement exécuter `iareload` pour appliquer les modifications.
{% endhint %}

### Toutes les versions de clients

{% hint style="warning" %}
* Cette fonctionnalité fonctionne uniquement sur les clients **Minecraft 1.17+**
* **La version du serveur n'a pas d'importance**
* Édite les fichiers shader `rendertype_text`
{% endhint %}

{% code title="config.yml" %}
```yaml
effects:
  hide-scoreboard-numbers-old-clients: true
```
{% endcode %}

{% hint style="warning" %}
### **Avertissement**

Cette option est définitive et ne peut pas être activée/désactivée en jeu.\
Vous devez la désactiver dans `config.yml` et régénérer le pack pour l'activer/désactiver (en utilisant `/iazip`).
{% endhint %}

## Masquer le fond

{% hint style="success" %}
* **Fonctionne dans toutes les versions de Minecraft**
* **N'édite pas** le shader `rendertype_text` **pour fonctionner.**
{% endhint %}

### Plugin : AnimatedScoreboard

{% content-ref url="../compatibility-with-other-plugins/compatible/animatedscoreboard.md" %}
[animatedscoreboard.md](../compatibility-with-other-plugins/compatible/animatedscoreboard.md)
{% endcontent-ref %}

### Plugin : Scoreboard-revision <mark style="color:orange;">(obsolète)</mark>

{% content-ref url="../compatibility-with-other-plugins/compatible/scoreboard.md" %}
[scoreboard.md](../compatibility-with-other-plugins/compatible/scoreboard.md)
{% endcontent-ref %}
