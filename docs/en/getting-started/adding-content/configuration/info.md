---
title: "Info"
description: "All settings found under 'info:'"
---


### namespace

> **Format:**
> 
> ```yaml
> namespace: <string>
> ```

Sets the custom namespace to use for the items listed in the file. The namespace is most prominently used in commands of ItemsAdder and in its API.  
Please only use lowecased, alphanummeric letters and underscores for the namespace.

Example:  
Setting the namespace to `example` and creating an item named `magic_sword` will result in `example:magic_sword` being suggested in the `/iaget` command.

### dictionary-lang

> **Format:**
> 
> ```yaml
> dictionary-lang: <string>
> ```

When set will allow you to define translatable Strings for the items to use.  
The provided value should be a valid language code such as `en`, `fr`, `de`, etc.