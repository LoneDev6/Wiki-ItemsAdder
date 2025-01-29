---
description: How To Use External Hosting With IA
---

# 📤 Automatic external hosting

{% hint style="warning" %}
## This guide is outdated and won't work anymore

PloudOS is shutting down and I sadly have no control over it since I don't own the business.

Please use another hosting method instead since this one won't work anymore.
{% endhint %}

## Video tutorial

{% embed url="https://www.youtube.com/watch?v=fOpB5-80coY" %}

## What is automatic hosting?

**ItemsAdder** allows you to automatically upload your resourcepack on a **free online service** with servers all over the world.

Thanks a lot to [PloudOS ](https://ploudos.com/it/)which provides me their platform to host your resourcepacks for free!

{% embed url="https://ploudos.com/" %}

## What are the advantages?

The main advantage is download speed and availability.\
This service allows your players to download the resourcepack very fast despite the country where they live (cloud based platform).

## I already use self-host, is this better?

Depends.\
It's better to use [self-host](../../plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md) if you're working on the resourcepack and you have to continously run `/iazip`, to avoid losing time (read more [here](../../plugin-usage/fast-resourcepack-tips.md)).

When you've finished working on the pack you can safely start using the `auto-external-host` feature.\
This will make your server traffic lower as the resourcepack won't be hosted on your server anymore.

If your playerbase is all from the same country you can stick with `self-host`.

## How to use it?

You just have to:

* enable `auto-external-host` in `config.yml`
* disable all the other hosting methods.

```yaml
auto-external-host:
  enabled: true
```

### Last step

Run `/iazip` to **compress** the **resourcepack**.\
The **plugin** will **upload it** online **automatically** (you will have to **accept the privacy policy** only the first time).

**You're done!** Nothing else to do, enjoy your **free automated resourcepack hosting**.

## Will my resourcepack be available online to random people?

2021-08-16:\
Your resourcepack won't be indexed on Google and won't be published in a list of resourcepacks.\
Only people who know the link can download the pack.

## Continue installation if you need

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}

