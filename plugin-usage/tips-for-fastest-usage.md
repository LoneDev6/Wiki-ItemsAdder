# 🏁 Consejos para un uso más rápido

## Lleva demasiado tiempo editar el paquete y subirlo a Internet.

Sí, si lo haces de forma incorrecta ;) Lee esto:

{% hint style="info" %}
Es una buena práctica crear un **servidor de prueba en tu PC** con:

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [LoneLib](https://www.spigotmc.org/resources/lonelibs.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
* [LightAPI Fork](https://www.spigotmc.org/resources/lightapi-fork.48247/)

ItemsAdder con esta configuración de resourcepack:

```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true # <----- HERE, set true
      server-ip: '127.0.0.1'
      pack-port: 8163
    external-host:
      enabled: false
      url: ''
```

Haciendo esto tendrás un entorno de configuración rápido y fácil de usar. Podrás añadir elementos y editar el paquete sobre la marcha.

Cuando se edita una textura/modelo de un elemento y se edita su configuración se utiliza el comando  `/iazip` .\
Al hacer esto, verás los cambios aplicados en tiempo real.

Así que después de terminar de añadir items y configurarlos podrás subir todo a tu servidor online para reflejar los cambios.
{% endhint %}

{% content-ref url="resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

{% hint style="warning" %}
Es una buena práctica no editar las texturas/modelos de ItemsAdder directamente en su servidor online.\
Los jugadores odian el retraso en la recarga de los plugins, los reinicios del servidor, tener que volver a descargar el paquete cuando ya son jugadores... tenlo en cuenta.
{% endhint %}

{% hint style="danger" %}
Es bueno no editar mis items personalizados ya que seguramente en el futuro se podrán editar y te volverás loco manteniendo tanto tu personalización como mis actualizaciones.\
Así que si quieres editar item sólo tienes que hacer tu propio
{% endhint %}
