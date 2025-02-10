# 设置

{% hint style="warning" %}
需要 ItemsAdder 3.6.1+
{% endhint %}

## `events_settings`

自定义事件属性的特殊物品属性。

### 冷却时间

你可以设置玩家触发事件的冷却时间。\
有助于防止玩家使用特殊物品刷屏。

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

### 冷却显示

你可以自定义冷却指示器，并选择一种指示器类型：

#### HIDDEN

不会显示指示器

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

使用自定义 HUD 指示

<figure><img src="../../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
`custom_hud` 并非强制, 如果未被指定，会自动使用内建的 `_iainternal:small_cooldown_bar`。

<mark style="color:red;">⚠️</mark> 确保你没有在 `config.yml` 中禁用 `extract_internal_utility_assets`！
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

{% hint style="info" %}
如果你想要创建一个自定义 HUD，但不想花时间着色，你可以查看[本教程](../../../../other/bulk-colorize-images.md)来快速着色。
{% endhint %}

#### TITLE

使用标题栏指示

<figure><img src="../../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

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

使用 BOSSBAR 指示

<figure><img src="../../../../.gitbook/assets/image (2) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
`color` 与 `style` 是非强制性的。若未指定，会使用 `config.yml` 中设定的值。
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
