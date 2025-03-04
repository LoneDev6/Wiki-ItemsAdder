---
icon: bolt-lightning
---

# Good Resourcepack Tips

## Fast workflow

It's a good practice to create a **test server on your PC** and do your resourcepack changes there. This allows you to experiment with the pack without having to upload files every time you want to add something to see how it looks ingame.

You can setup a test server on your local machine by installing ItemsAdder and the minimal dependencies (LoneLibs and ProtocolLib). Make sure to read the [install tutorial](../../first-install.md).

You can leave the IP `127.0.0.1` as it's the local PC IP, also the port doesn't matter as soon as it's not used by another process.

<pre class="language-yaml"><code class="lang-yaml"><strong>resource-pack:
</strong>  hosting:
    self-host:
      enabled: true
      server-ip: '127.0.0.1'
      pack-port: 8163
</code></pre>

Doing this you'll have a fast and easy to use configuration environment.\
You can add items and edit the pack on the fly.

{% hint style="warning" %}
Players hate lag on plugins reload, server restarts, having to re-download the pack when they're already playing.\
It's better to do edits and tests on a local test server instead.

This is the best setting for your server as it's the fastest and doesn't require\
any manual operation when uploading the pack.
{% endhint %}

## Maintaining custom content

{% hint style="danger" %}
You shouldn't edit my custom example items, as in the future I might update them and you'll go crazy maintaining both your customization and my updates.

It's advised to create your own items instead.
{% endhint %}

## Assets style

Don't forget that this is a pixelated game not an ultra HD AAA game.\
You don't need HD textures nor very detailed 3D models filled with cubes.

{% embed url="https://www.blockbench.net/wiki/guides/minecraft-style-guide/" %}

## Sounds size

Don't forget to compress your sounds. Do not put big music and sound effects files in your pack. This will make the pack slow to download. Consider compressing your packs using some tools.

{% embed url="https://www.google.com/search?q=ogg+compress+online" %}
