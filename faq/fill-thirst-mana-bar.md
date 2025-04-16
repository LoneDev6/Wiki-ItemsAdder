---
icon: droplet
---

# Thirst/mana bar

## Fill the bars

To fill the thirst bar use `/iaplayerstat write LoneDev thirst float 10`

![](<../.gitbook/assets/immagine (60).png>)

To fill the manabar use `/iaplayerstat write LoneDev mana float 5`

![](<../.gitbook/assets/immagine (95).png>)

## Disable thirst

* open `contents/iasurvival/configs/thirst/hud_thirst.yml`
* set `enabled: false`
* use `/iareload` command

## Disable mana

* open `contents/iaalchemy/configs/huds/huds.yml`
* set `enabled: false`
* use `/iareload` command
