# Contents folders structure

## Why different folder structures choices?

**ItemsaAdder** allows you to decide which folders structure to use in order to organize your various packs.

The `contents` folder contains "sub-packs", they are used to organize your work better and separate contents for easier organization, assets removal and online sharing.

{% hint style="warning" %}
Each sub-pack must use only one structure at a time.\
**Do not mix them in the same sub-pack!**
{% endhint %}

### Folders structure method 1

This structure is the default and most complete one.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── resourcepack
                └── assets
                    └── my_items
                        ├── models
                        │   └── items
                        │       └── example_item.json
                        └── textures
                            └── items
                                └── example_texture.png
```

### Folders structure method 2

This structure avoids you to create the `assets` folder which is implied and would just add unnecessary complexity.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── resourcepack
                └── my_items
                    ├── models
                    │   └── items
                    │       └── example_item.json
                    └── textures
                        └── items
                            └── example_texture.png
```

### Folders structure method 3

This structure avoids you to create the `resource_pack` folder which is implied and would just add unnecessary complexity.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── assets
                └── my_items
                    ├── models
                    │   └── items
                    │       └── example_item.json
                    └── textures
                        └── items
                            └── example_texture.png
```

### Folders structure method 4

This structure avoids you to create the `assets` folder which is implied and would just add unnecessary complexity.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            └── my_items
                ├── models
                │   └── items
                │       └── example_item.json
                └── textures
                    └── items
                        └── example_texture.png
```

### Folders structure method 5

This is the easier way to create a simple pack with some items without having to create too many sub-folders. This avoids you to create `resourcepack`, `assets`, `NAMESPACE` folders and makes everything cleaner.

This is useful if your sub-pack doesn't use multiple namespaces, or you won't be able to specify them.

```
plugins
└── ItemsAdder
    └── contents
        └── my_items
            ├── configs
            │   ├── example.yml
            │   └── example_1.yml
            ├── models
            │   └── items
            │       └── example_item.json
            └── textures
                └── items
                    └── example_texture.png
```
