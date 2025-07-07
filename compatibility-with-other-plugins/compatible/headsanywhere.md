# HeadsAnywhere Compatibility

How to show head of players in chat, signs, books, and more using HeadsAnywhere plugin.

## [Download Here](https://www.spigotmc.org/resources/headsanywhere-use-players-heads-anywhere.109951/)

HeadsAnywhere is a plugin that allows you to use player heads as character in your chat, making it easy to access and display player heads anywhere in the game.

It is compatible with ItemsAdder, allowing you to use custom player heads as well.

You will need to disable their resourcepack in their config.yml and merge its resourcepack with ItemsAdder's resourcepack to use custom player heads.

Editation of their default.json to get more accurate head offsets

```json
{
  "providers": [
    {
      "type": "ttf",
      "file": "minecraft:headsanywhere.ttf",
			"shift": [-2, 2],
			"size": 11.0,
			"oversample": 2.0,
			"skip": ""
    }
  ]
}
```