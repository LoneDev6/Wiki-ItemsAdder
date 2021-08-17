# ChatControl-Red

[下载](https://www.mc-market.org/resources/18217/)

ItemsAdder Emojis 兼容性： 更多信息: [https://github.com/kangarko/ChatControl-Red/issues/853\#issuecomment-818497610](https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610)

## Adding custom channel prefix in chat

If you want to create a graphical prefix for your channels and show it in chat you have to follow this tutorial.

![An example that shows the ARCADE prefix for the Arcade channel](../../.gitbook/assets/immagine%20%2863%29.png)

You just have to set this in your format configuration, \(for example in the `format/arcade.yml` file of ChatControl Red\):

```yaml
  prefix:
    Message: ':arcade:'
```

Obviously you have to use your own [font\_image ](../../plugin-usage/adding-content/advanced/font-images/)name instead of `arcade`, this is just an example.

