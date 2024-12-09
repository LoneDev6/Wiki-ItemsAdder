# ChatControl-Red

[此处下载](https://www.mc-market.org/resources/18217/)

ItemsAdder 表情兼容性:\
查看详情: [https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610](https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610)

## 添加自定义频道前缀

如果你想设置一个在聊天中显示的图片频道前缀，请跟随此指引.

![用于Arcade频道的ARCADE前缀](../../.gitbook/assets/image\_\(94\).png)

你只需要在格式配置中设置如下内容，(比如在 ChatControl Red 的 `format/arcade.yml` 中)：

```yaml
  prefix:
    Message: ':arcade:'
```

显然你需要使用你自己的 [font\_image ](../../plugin-usage/adding-content/font-images/)名称，而非 `arcade` ，这只是示例。

## 文本效果

通常 ItemsAdder 的文本效果不会在 ChatControl Red 中生效。\
但如果你把下方内容添加至 ChatControl Red 的 rules 文件夹中，它们就会生效。（我放到了 `global.rs` 里）。

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
