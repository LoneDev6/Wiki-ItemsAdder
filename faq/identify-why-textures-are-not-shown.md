# 🔍 Identify why textures are not shown

### Enable output log

![](<../.gitbook/assets/immagine (135).png>)

### Join the server and read the log

![](<../.gitbook/assets/immagine (139).png>)

### Find out which file is broken

You can clearly see which files failed to load and why, the errors are clear in most of the cases.\
In this example i had two broken files `gem_vending_machine` and `whitebathroom_sink`. \
The error tells me that the json files are broken, they probably have bad characters inside or they are corrupted.
