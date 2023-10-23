# Settings

{% hint style="warning" %}
Available on ItemsAdder 3.6.1+
{% endhint %}

## `events_settings`

Special item attribute to customize some properties of events.

### Cooldown

You can set a cooldown which won't allow the player to trigger any of the actions for this item.\
Useful to avoid players to spam a special item.&#x20;

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
    cooldown:
      indicator: HUD
      ticks: 120
    events:
    ## .... your events
```

### Cooldown indicator

You can customize the cooldown indicator and decide from some different indicator types:

#### HIDDEN

Won't show any indicator.

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: HIDDEN
        ticks: 120
    events:
    ## .... your events
```

#### HUD

Shows a custom HUD on-screen.



<figure><img src="../../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
`custom_hud` property is not mandatory, `_iainternal:small_cooldown_bar` will be used instead if not specified, which is the built-in custom hud.

<mark style="color:red;">⚠️</mark> Make sure you didn't disable `extract_internal_utility_assets` in `config.yml`!
{% endhint %}

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
    cooldown:
      indicator: HUD
      ticks: 120
      custom_hud: my_items:custom_hud_1
    events:
    ## .... your events
```

#### TITLE

Shows a big on-screen title indicator.

<figure><img src="../../../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: TITLE
        ticks: 120
    events:
    ## .... your events
```

#### BOSSBAR

Shows a bossbar on-screen.

<figure><img src="../../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
`color` and `style` properties are not mandatory, the ones from `config.yml` will be used instead if not specified.
{% endhint %}

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: BOSSBAR
        ticks: 120
        bossbar:
          color: WHITE
          style: SOLID
    events:
    ## .... your events
```

