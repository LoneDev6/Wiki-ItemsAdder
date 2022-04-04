# ModelEngine

## [הורידו כאן](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

(הדגמה חינם בקישור הקודם, בחלק העליון של העמוד)

## איך מוסיפים תאימות?

זה קל מאוד!

* הוסיפו את כל הדגמים והתצורות של המודל שלכם בתוך תיקיית הפלאגין **ModelEngine**
* עשו `/mag reload` כדי ליצור את הטקסטורה **Model Engine**
* פתחו את התיקיה `plugins\ModelEngine\resource_pack\assets\`
* העתיקו את תיקיית `asses` בתוך תיקיית `plugins\ItemsAdder\resource_pack\`
*   פתחו את 'config.yml' של **ItemsAdder** והגדר את האפשרות הזו:

    ```yaml
    overwrite-vanilla-models: false
    ```
* עשו  `/iazip` (ופעלו לפי [מדריך האחסון](../../plugin-usage/resourcepack-hosting/) במידת הצורך)

סיימתם!
