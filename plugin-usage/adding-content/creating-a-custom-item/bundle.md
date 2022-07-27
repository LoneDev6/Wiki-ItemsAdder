# 收纳袋

如果你将源材质设置为 Bundle（收纳袋） 则需要阅读该页面内容.
{% hint style="warning" %}
Minecraft 1.17+
{% endhint %}

## 配置

```yaml
items:
  example_bundle:
    display_name: "&6&lExample Bundle"
    permission: example_bundle
    resource:
      material: BUNDLE
      generate: true
      textures:
      - item/bundle_test.png
```

## 贴图文件

![](<../../../../.gitbook/assets/image (33).png>)

你需要创建另一个带有 `_filled` 后缀的贴图文件

## 效果

![](<../../../../.gitbook/assets/image (34).png>)
