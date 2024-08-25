---
description: Animations de texte spéciales et effets de couleur
---

# 🎆 Effets de texte

{% hint style="warning" %}
* **Nécessite Minecraft 1.17+**
* Ne fonctionne pas dans les [fichiers de langue Minecraft](adding-content/minecraft-language-files.md) (limitation du jeu)
* Modifie les fichiers de shader `rendertype_text`
{% endhint %}

## Quels sont les effets de texte ?

Ce sont des effets décoratifs de texte que vous pouvez utiliser sur votre serveur pour le rendre plus professionnel.

{% hint style="warning" %}
Vous devez exécuter `/iazip` pour activer/désactiver cette fonctionnalité.\
Assurez-vous également de l'activer dans le `config.yml`.

```yaml
effects:
  text-effects:
    enabled: true # Cette option nécessite /iazip lors de son changement.
    customitem-name-and-lore:
      enabled: true
    chat:
      enabled: true
    sign:
      enabled: true
    book:
      enabled: true
    anvil:
      enabled: true
```
{% endhint %}

## Permissions

* Utiliser les **effets de texte** dans le **chat**
  * `ia.user.text_effect.chat`
* Utiliser les **effets de texte** sur les **pancartes**
  * `ia.user.text_effect.sign`
* Utiliser les **effets de texte** dans les **livres**
  * `ia.user.text_effect.book`
* Utiliser les **effets de texte** dans le champ "renommer" des **enclumes**
  * `ia.user.text_effect.anvil`
* Utiliser un **effet de texte**
  * `ia.user.text_effect.use.<effect>`

## Liste des effets

### Arc-en-ciel

![](../.gitbook/assets/rainbow.gif)

![](../.gitbook/assets/image\_\(128\).png)

![](../.gitbook/assets/image\_\(129\).png)

![](../.gitbook/assets/rainbow\_item.gif)

Permission: `ia.user.text_effect.use.r`\
Utilisation: `<r text>`

### Vague

![](../.gitbook/assets/wobble.gif)

![](../.gitbook/assets/wobble\_item.gif)

Permission: `ia.user.text_effect.use.w`\
Utilisation: `<w text>`

### Saut

![](../.gitbook/assets/jump\_chat.gif)

![](../.gitbook/assets/jump.gif)

![](../.gitbook/assets/jump\_boss.gif)

Permission: `ia.user.text_effect.use.j`\
Utilisation: `<j text>`

### Arc-en-ciel + Vague

![](../.gitbook/assets/rw\_chat.gif)

Permission: `ia.user.text_effect.use.rw`\
Utilisation: `<rw text>`

### Arc-en-ciel + Saut

![](../.gitbook/assets/rj.gif)

Permission: `ia.user.text_effect.use.rj`\
Utilisation: `<rj text>`

## Où puis-je utiliser ces effets ?

* Nom d'objet personnalisé (dans le fichier .yml)
* Description d'objet personnalisé (dans le fichier .yml)
* Chat
* Pancarte
* Livre
* Bossbar
* Préfixe/Suffixe (par exemple avec Luckperms)
* _Bientôt plus...._

![](../.gitbook/assets/rainbow\_wobble\_lore.gif)

## Comment créer un préfixe animé (Luckperms)

![](../.gitbook/assets/image\_\(133\).png)

`/lp group admin meta setprefix "<rw ADMIN >"`

![](../.gitbook/assets/prefix.gif)

Cliquez ici pour lire les [Tutos officiels de LuckPerms](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) si vous ne savez pas comment fonctionne les préfixes.

## Utiliser les effets de texte sans les placeholders

Si, pour une raison quelconque, vous souhaitez utiliser des effets de texte dans des zones qui ne prennent pas en charge les placeholders d'ItemsAdder (comme `<r TEXT>`), vous pouvez utiliser une autre méthode.

Ces effets sont déclenchés en fonction d'**une couleur HEX spéciale**.\
Donc, si la zone où vous souhaitez afficher un effet de texte prend en charge les couleurs HEX, vous pouvez le faire.

### Couleurs spéciales

#### Arc-en-ciel

`#FFFFFE`

#### Vague

`#FFFFFD`

#### Saut

`#FFFFFB`

#### Arc-en-ciel + Vague

`#FFFFFC`

#### Arc-en-ciel + Saut

`#FFFEFE`

### Utilisation dans la notation JSON vanilla de Minecraft

Cela déclenche l'effet arc-en-ciel :\
`/tellraw @a {"text":"exemple de texte personnalisé", "color":"#FFFFFE"}`

Remplacez `FFFFFE` par l'effet que vous souhaitez.

### Utilisation dans les plugins qui supportent _MiniMessage_

{% embed url="https://docs.advntr.dev/minimessage/format.html#color" %}

(par exemple ItemsAdder lui-même et [ChatFormatter](https://www.spigotmc.org/resources/102212/))

Cela déclenche l'effet arc-en-ciel : `<#FFFFFE>exemple de texte personnalisé`

Remplacez `FFFFFE` par l'effet que vous souhaitez.

### Utilisation dans les plugins qui supportent la notation HEX legacy

#### Arc-en-ciel

`&X&F&F&F&F&F&E`

#### Vague

`&X&F&F&F&F&F&D`

#### Saut

`&X&F&F&F&F&F&B`

#### Arc-en-ciel + Vague

`&X&F&F&F&F&F&C`

#### Arc-en-ciel + Saut

`&X&F&F&F&F&F&E`

Cela a été testé sur [EpicRename](https://www.spigotmc.org/resources/epicrename.4341/) et devrait fonctionner dans tout plugin ou endroit où Spigot gère le remplacement des couleurs en utilisant son propre code de couleurs legacy.

Exemple: `/rename &x&F&F&F&F&F&ETest`
