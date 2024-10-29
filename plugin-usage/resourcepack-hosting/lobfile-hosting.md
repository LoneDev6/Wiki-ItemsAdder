# LobFile hosting

{% hint style="warning" %}
This feature requires **ItemsAdder 3.6.3** or greater.
{% endhint %}

## What is LobFile?

**ItemsAdder** allows you to automatically upload your resourcepack on a **free online service** with servers all over the world.

Thanks a lot to **LobFile**[ ](https://ploudos.com/it/)which provides us their platform to host files for free!

{% embed url="https://lobfile.com/" %}

{% hint style="warning" %}
### Warning

File size limit is 100MB for this hosting method.
{% endhint %}

## What are the advantages?

* download speed
* availability
* security: your server IP address is not exposed
* no high bandwidth usage

## I already use `self-host`, is this better?

Depends.

It's better to use [self-host](resourcepack-self-hosting.md) if you're working on the resourcepack and you have to continuously run `/iazip`, to avoid losing time (read more [here](tips-for-fastest-usage.md)).

When you've finished working on the pack you can safely start using this other hosting feature instead of `self-host`, in this case **LobFile**.\
This will make your server traffic lower as the resourcepack won't be hosted on your server anymore.\
Anyway your playerbase is all from the same country you can stick with `self-host`.

## Setup

#### Step 1

Create an account on [LobFile here](https://lobfile.com/create-account).

#### Step 2

Open your [account settings here](https://lobfile.com/my-account) and check _**"Continuous uploading"**_

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

#### Step 3

Hover the `API Key` text and copy your key.

<figure><img src="../../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>

#### Step 4

Enable `lobfile` in `config.yml` and disable all the other hosting methods.

{% code title="ItemsAdder/config.yml" %}
```yaml
lobfile:
  enabled: true
```
{% endcode %}

Open `secret.yml` and paste your `API Key`.

{% code title="ItemsAdder/secret.yml" %}
```yaml
lobfile:
  api_key: xxxxxxxxxx
```
{% endcode %}

#### Step 5

Run `/iazip.`

Wait for the Privacy policy message to appear.\
Run `/acceptprivacy` to accept the policy (will be asked only the first time).

### Done

The **plugin** will **upload it** online **automatically**.\
Nothing else to do, enjoy your **free automated resourcepack hosting**.

## Will my resourcepack be available online to random people?

2023-12-21:\
Your resourcepack won't be indexed on Google and won't be published in a list of resourcepacks.\
Only people who know the link can download the pack.

