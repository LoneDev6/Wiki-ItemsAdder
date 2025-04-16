# ChatControl-Red

[Download here](https://www.mc-market.org/resources/18217/)

ItemsAdder Emojis compatibility:\
More info here: [https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610](https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610)

## Adding custom channel prefix in chat

If you want to create a graphical prefix for your channels and show it in chat you have to follow this tutorial.

![An example that shows the ARCADE prefix for the Arcade channel](<../../.gitbook/assets/immagine (10).png>)

You just have to set this in your format configuration, (for example in the `format/arcade.yml` file of ChatControl Red):

```yaml
  prefix:
    Message: ':arcade:'
```

Obviously you have to use your own [font\_image ](../../plugin-usage/adding-content/font-images.md)name instead of `arcade`, this is just an example.

## Text effects

Normally the ItemsAdder text effects don't work with ChatControl Red.\
But if you add this to your `rules` folder of ChatControl Red, they will work. (I put this in `global.rs`).

```
match <r\s([^>]+)>
require perm ia.user.text_effect.use.r
strip colors false
then replace #FFFFFE$1&r
    
match <w\s([^>]+)>
require perm ia.user.text_effect.use.w
strip colors false
then replace #FFFFFD$1&r
    
match <j\s([^>]+)>
require perm ia.user.text_effect.use.j
strip colors false
then replace #FFFFFB$1&r
    
match <rw\s([^>]+)>
require perm ia.user.text_effect.use.rw
strip colors false
then replace #FFFFFC$1&r
    
match <rj\s([^>]+)>
require perm ia.user.text_effect.use.rj
strip colors false
then replace #FFFEFE$1&r
```
