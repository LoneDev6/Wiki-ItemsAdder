---
description: VisualStudio Code extension
icon: file
---

# Files editor

## How to install

* [Download Visual Studio Code (vs-code)](https://code.visualstudio.com/download)
* [Download the extension here](https://marketplace.visualstudio.com/items?itemName=LoneDev.ia-vscode)

### Preview

<div align="left"><figure><img src="../../.gitbook/assets/image (93).png" alt="" width="397"><figcaption></figcaption></figure></div>

### How to enable the descriptions on fields/suggestions

<figure><img src="../../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

## FTP

Download the FTP VSCode extension [from here](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp).

Create an empty folder anywhere on your PC, for example in the `Downloads` folder.\
This folder will contain a copy of your server files which will be synced on each saving.\
For example `remote_itemsadder_contents`.

Press `CTRL+SHIFT+P` and run **Config**.

<figure><img src="../../.gitbook/assets/image (240).png" alt=""><figcaption></figcaption></figure>

Change `host`, `port`, `username` and `password` (and `protocol` if needed).\
`uploadOnSave` allows you to automatically upload the files on saving.

```json
{
    "name": "My Server",
    "host": "eux1.humbleservers.com",
    "protocol": "sftp",
    "port": 2022,
    "username": "username",
    "password": "password",
    "remotePath": "/plugins/ItemsAdder/",
    "uploadOnSave": true,
    "useTempFile": false,
    "openSsh": false
}
```

Press `CTRL+SHIFT+P` and run **Download Project**.

<figure><img src="../../.gitbook/assets/image (242).png" alt=""><figcaption></figcaption></figure>
