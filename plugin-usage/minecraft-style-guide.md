# 🎨 מדריך סגנונות מיינקראפט

## מדריך סגנונות מיינקראפט <a href="#minecraft-style-guide" id="minecraft-style-guide"></a>

סט הנחיות זה מכסה את המאפיינים של סגנון האמנות של Minecraft. זה נועד לעזור לכם ליצור מודלים וטקסטורת שמתאימים ישירות למשחק הרגיל ולאחד את הטרמינולוגיה לקהילה כדי לתת משוב יעיל ובונה יותר. זיכורו שלא כל העקרונות שהוזכרו חלים באופן אוניברסלי על סגנונות אמנות שאינם מהמשחק הרגיל או על אמנות שאינה קשורה למיינקראפט. אם אתם מתכננים ליצור אמנות מיינקראפט ולא מכירים את ההיבטים הטכניים של זה לגמרי, קראו את המדריך [Blockbench סקירה וטיפים](https://www.blockbench.net/wiki/guides/blockbench-overview-tips) מומלץ מאוד לדעת. המדריך מכיל חומרים כיצד להשתמש נכון ב- Blockbench ולנצל את מלוא היתרונות של התכונות שלו. 
### מודלים <a href="#modeling" id="modeling"></a>

#### ספירת אלמנטים <a href="#element-count" id="element-count"></a>

סגנון האמנות של Minecraft מבוסס בפשטות. הצורה הכללית של אובייקט צריכה להיות מוגדרת על ידי הדגם ואת רוב הפרטים על ידי הטקסטורה. זה תמיד צריך להיות מטרה לשמור על ספירת האלמנטים נמוכה ככל האפשר תוך הצגת האובייקט בצורה מדויקת. עם זאת, פישוט צורות לא צריך ללכת רחוק מדי, עד לנקודה שבה כבר לא ניתן לזהות אותן.

#### תיאור צורה <a href="#shape-depiction" id="shape-depiction"></a>

לכן, יש להימנע מלתאר אלכסונים ועיקולים כמדרגות. עדיף לסובב אלמנט כדי ליצור נטייה במקום. ניתן למצוא אלמנטים מסתובבים בדגמי Minecraft רבים, אך השימוש בהם צריך להיות מוצדק. לדוגמה, סיבוב אלמנטים זה ליד זה כדי ליצור עקומה לא תואם את האסתטיקה של Minecraft.

![Rotations](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/rotations.png)

עצם כדורי או גלילי יתורגם לאלמנט בודד. דוגמאות לעיקרון זה ניתן למצוא לאורך כל המשחק (חבית, עוגה, בול עץ, דלעת, מלון, תרמיל קקאו...).

![Round Shapes](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/round\_shapes.png)

דגמי Minecraft משתמשים בפאות (אלמנטים עם 2 פנים בלבד) ובשקיפות, לעתים קרובות ביחד. חלקים קטנים של אובייקט יכולים להיות מתוארים על ידי אלמנט אחד גדול כאשר פיקסלים מסוימים מבחינה אסטרטגית שקופים לחלוטין. בסגנון האמנות של Minecraft, פתרון זה עדיף על פני שימוש באלמנטים קטנים רבים כדי לתאר את אותו אובייקט/חלקים של אובייקט.

![Planes](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/planes.png)

#### מיפוי VU <a href="#uv-mapping" id="uv-mapping"></a>

מפת ה-UV מגדירה כיצד טקסטורה מיושמת על המודל. במיינקראפט, פיקסל בטקסטורה תואם לפיקסל בדגם (יחידת קנה מידה אחת ב-Blockbench). חשוב מאוד שיחס הפיקסלים יישמר גם בדגם, כלומר הטקסטורה לא תמעך או תמתח.

![UV Ratio](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/uv\_ratio.png)

במיפוי UV פר-פנים, Blockbench מציעה את תכונת ה-UV האוטומטית, המדרגת נכון את מיפוי הפנים.

![Auto UV](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/auto\_uv.png)

במיפוי UV תיבת, המפה של האלמנטים מתפרקת אוטומטית ופועלת עבור כל הפאות כברירת מחדל. בתמונה למטה, ניתן לראות דוגמה למפת UV לא עטופה (כחול = צפון, צהוב = דרום, ורוד = מערב, ירוק = מזרח, לבן = למעלה, אפור = תחתון). הצפון הוא בדרך כלל בחזית (למשל, זה המקום שבו יהיו הפנים של דמות או דלת של ארון).

![Box UV](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/box\_uv.png)

#### מיקסלים <a href="#mixels" id="mixels"></a>

בדומה לפיקסלים הם אלמנטים של תמונה (פיקס + el), מיקסלים הם אלמנטים של רזולוציות מעורבות, בין אם זה דו-ממד או תלת-ממד. רוב האמנות עם מפרט נמוך (אמנות מגבילה דיגיטלית) נמנעת לחלוטין ממיקסים. אמנות מיינקראפט, באופן כללי, אינה מאפשרת מיקסים (למעט אלמנטים מנופחים מעט בחלק מהדגמים). מיקסים בדגמים באים לידי ביטוי כאלמנטים קטנים מ-1 פיקסלים (או יחידת קנה מידה אחת ב-Blockbench) או אלמנטים מנופחים מדי.

![Model Mixels](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/model\_mixels.png)

#### גודל ופרופורציות <a href="#size--proportions" id="size--proportions"></a>

הממדים של בלוק Minecraft הם 16x16x16 פיקסלים, המייצגים 1m³, כלומר פיקסל בודד הוא באורך 6.25 ס"מ. יש לקחת בחשבון יחס זה, אך הוא לא תמיד תקף. אובייקטים קטנים הניתנים לזיהוי מקבלים עדיפות על פני קנה מידה (למשל, דבורה הייתה צריכה להיות קטנה מ-1 פיקסלים אם היא הייתה פרופורציונלית לחלוטין).

יתר על כן, ייתכן שפונקציונליות בתוך הפרופורציות של המשחק עצמו לא תתורגם ישירות מהחיים האמיתיים. הדוגמה החשובה ביותר לכך היא מודל השחקן. הוא מגושם משמעותית מאדם רגיל, כך שאובייקטים שהשחקן מקיים איתם אינטראקציה צריכים להיווצר מתוך מחשבה על כך.

![Human Proportions](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/human\_proportions.png)

כמו בכל צורת אמנות, שינוי הפרופורציות של חלקים מסוימים במודל משפיע על האופן שבו המשתמש מפרש את מה שמתואר ותפקודו. לדוגמה, ראש גדול על גוף קטן יכול להפוך את הדמות לחמודה, בעוד פלג גוף עליון וזרועות מוגזמות מעידים על חוזק.

![Character Proportions](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/golem\_proportions.png)

### טקסטורינג <a href="#texturing" id="texturing"></a>

#### מרחב צבע HSV <a href="#hsv" id="hsv"></a>

הגוון הוא משפחת הצבעים שנקבעת על ידי אורך הגל (למשל חום נופל לאדום או כתום, תרשיש נופל לכחול וכו'). ניתן להתייחס אליו כעל נקודה בספקטרום של הקשת. הטווח שלו הוא 0°-360° (קשת עטופה במעגל).

רוויה היא עוצמת הצבע, כלומר נוכחות של גוון נתון. ככל שהרוויה גבוהה יותר, הגוון חזק יותר. הטווח שלו הוא 0-100 (על הציר האופקי).

ערך הוא בהירות הצבע. ערך גבוה יותר פירושו צבע בהיר יותר. הטווח שלו הוא 0-100 (על הציר האנכי).

![HSV](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/hsv.png)

#### רמפות צבע ופלטות <a href="#color-ramps--palettes" id="color-ramps--palettes"></a>

רמפת צבע היא ליין-אפ של כל הגוונים של צבע בודד לפי בהירות. פלטת צבעים היא הסט של כל רמפות הצבע המשמשות בקובץ טקסטורה. עדיף להתחיל ביצירת רמפה עם גוון הביניים. מפה לשם, רצוי ליצור רק צללית אחת והדגשה אחת ולהחיל הצללה בסיסית. לאחר מכן, ניתן להוסיף גוונים נוספים.

שינוי הגוון, הרוויה והערך בין גוונים נקרא הסטת (הסטת גוון, שינוי רוויה, שינוי ערך). חשוב לשמור על איזון השלב בין הגוונים.

רמפה ישרה היא רמפה צבעונית שכל גווניה שונים רק בערכם (בהירות). קל מאוד ליצור רמפות ישרות ולעיתים קרובות אינן בשימוש בגלל המראה המשעמם שלהן, אבל הן יכולות להתאים לחומרים וצבעים מסוימים. בתמונה למטה, הרמפה הישרה נמצאת משמאל והרמפה המוסטת בגוון מימין.

![Hue Shifting](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/hue\_shifting.png)

#### הצללה <a href="#shading" id="shading"></a>

באמנות פיקסלים, ולכן באמנות מיינקראפט, הצבת פיקסלים צריכה להיות מכוונת. על מנת להשיג זאת, יש צורך בשימוש בפלטות מוגבלות במטרה ובסט כלים ללא חלקות (עיפרון, כלי צורות, דלי מילוי ומחק). יש להגדיר בבירור את תכונות החומר.

אנטי-aliasing או AA היא שיטה להחלקה ידנית של המעבר בין צורות על ידי הצבת פיקסלים בצבעים שונים על הגבול. הביצה משמאל מכילה AA, זו מימין לא.

![Anti-Aliasing](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/anti\_aliasing.png)

ניתוק היא שיטה למעבר בין אשכולות של שני פיקסלים על ידי הצלבת הפיקסלים שלהם בתבנית מסוימת. שיוף משובץ הוא הסוג הנפוץ ביותר.

![Dithering](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/dithering.png)

שימוש במברשת יכול לייצר מרקם רועש. רעש אינו מוסיף מידע למרקם, ובמקרה הגרוע, הופך אותו לבלתי ניתן לזיהוי ללא הקשר.

![Noisy Texture](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/noisy\_texture.png)

ישנן דרכים רבות אפשריות להצללה ללכת בכיוון הלא נכון, לעתים קרובות בטעות. פסים, במובן הרחב, הוא חפץ של פיקסלים המתיישרים ברצף מהבהיר ביותר לכהה ביותר, בין אם בקווים ישרים (המכונה קווים שמנים או פיקסלים שמנים), קווים אלכסוניים (המכונה פסי מדרגות), או בפינות (הידוע גם בחיבוק). ). הסיבה שצריך להימנע מכך היא שהוא חושף את רשת הפיקסלים, מסיח את דעתו של הצופה והצורה מוטעית. פסים מופיעים בדרך כלל כאשר האמן מנסה ליצור אנטי-aliasing או מתקשה לפזר את הגוונים על פני משטח.

![Banding](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/banding.png)

הצללת כרית היא חפץ הדומה לפס, שבו האמן מחיל גוונים באופן קונצנטרי מהכהה ביותר לבהיר ביותר בניסיון לכסות איכשהו את פני השטח.

![Pillow Shading](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/pillow\_shading.png)

הצללה של פנקייק היא חפץ של הצבת הדגשים בצד אחד והצללים בצד הנגדי של המשטח. זה מתעלם מהצורה של פני השטח.

![Pancake Shading](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/pancake\_shading.png)

תנועות מיותרות מגיעות בצורות שונות, כשהבסיסית שבהן היא שימוש יתר בתנועות במקום שבו מתחיל המעבר, המכסה שטח פנים גדול מדי. מקרים אחרים הם כאשר אין צורך בהתערבות כלל או כאשר נעשה בו שימוש לא עקבי (באופן אקראי, רק במקומות מסוימים) בתוך הטקסטורה.

![Unnecessary Dithering](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/unnecessary\_dithering.png)

ערבובים על הטקסטורה יכולים להתרחש רק אם האמן מגדיל בכוונה את הטקסטורה שלו וממשיך לצייר עליו. זה נעשה בדרך כלל על מנת להוסיף פרטים נוספים. אם אין מקום לפרטים נוספים ברזולוציית 16x16, או שצריך להעריך מחדש את הטקסטורה כולה או שהפרטים אינם נחוצים. אלמנטים של החלטות סותרות גורמים למרקם להיראות לא מאוזן ופחות מושך. זה בדרך כלל נראה כאילו הוא הוגדל או הורד בצורה לא נכונה.

![Texture Mixels](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/texture\_mixels.png)

#### קווים וצורות <a href="#lines--shapes" id="lines--shapes"></a>

Jaggies הם צורות (פינות לא מכוונות) באמנות הפיקסלים המופיעות עקב קווים/קצוות שאינם מלוטשים או חסרי אנטי-aliasing. לקווים ישרים צריך צעד עקבי כדי שהם לא ייראו לא מלוטשים. זה קשור לתכונות הגיאומטריות של אלכסונים. עקומות יכולות להכיל גם ג'גיות, הנראות בדרך כלל כפינות או קווים אלכסוניים (נועדו לייצג צורות עגולות).

![Jaggies](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/jaggies.png)

#### טקסטורות של פריט <a href="#item-textures" id="item-textures"></a>

כל הפריטים המצוירים נכנסים לרשת של 16x16.

1. התחילו בציור צורת הפריט באמצעות גוון ביניים. תנו לו קו מתאר כהה משמעותית.
2. הוסיפו הדגשה וצללית. טקסטורות פריט מוצללות עם מקור האור המדמיין כמגיע מהפינה השמאלית העליונה. הצל את המתאר בהתאם.
3. הוסיפו את שאר הפלטה (עוד הדגשות והצללות).
4. הוסיפו את מאפייני משטח. בדוגמה זו, הפריט שקוף וחלק. במקרים אחרים, המאפיינים יכולים להיות חספוס, סדקים, קפלים, לכלוך...

![Item Creation](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/item\_creation.png)

#### טקסטורות בלוק <a href="#block-textures" id="block-textures"></a>

טקסטורות בלוקים צריכות להיראות טוב בפני עצמן, כמו גם כשהן מונחות אחת ליד השנייה. הצבת כמה בלוקים מאותו סוג זה ליד זה נקראת ריצוף. אם חלק מהטקסטורה חוזרת על עצמה, וחושפת את תבנית הריצוף, זה נקרא חפץ ריצוף ויש לתקן אותו.

ניתן להשתמש ב-Blockbench כדי ליצור את טקסטורת הבלוק ישירות (במצב Paint) או סתם כתצוגה מקדימה תלת מימדית חיה של הטקסטורה שנוצרה בעורך תמונות חיצוני. הדרך הטובה ביותר לתצוגה מקדימה של ריצוף היא על ידי יצירת קיר של 3x3 בלוקים.

חשוב לבדוק ריצוף לפני שעושים יותר מדי הצללה. מספיקה גרסה מוקדמת של הטקסטורה עם שניים או שלושה גוונים. לאחר בדיקת ריצוף, ניתן להמשיך בהצללה, אך עדיין לבדוק באופן קבוע אם יש ריצוף תוך כדי הצללה.

![Block Tiling](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/block\_tiling.png)

#### טקסטורות של ישות <a href="#entity-textures" id="entity-textures"></a>

טקסטורות של ישות משתמשות במיפוי UV של תיבת ועוקבים אחר קבוצה מיוחדת של הנחיות טקסטורה. החלק העליון והקדמי של הישות צריכים להיות בהירים יותר מהחלק התחתון והאחורי. זה חל על הצללת הפנים בנפרד, כמו גם על האופן שבו הפנים מוצללות זה ביחס לזה (למשל, הפנים העליונות יהיו בהירות יותר באופן ניכר מהפנים התחתונות).

1. עשו תבנית טקסטורה כדי להקל על התהליך. Blockbench ממפה אוטומטית גם את האלמנטים.
2. שרטטו את חלוקת הצבע, והוסיפו צל והדגשה.
3. הוסיפו עוד גוונים לפלטה.
4. הגדירו את החומר על ידי עריכת המיקום היחסי של אשכולות של גוונים מסוימים. היפטרו מהרצועות וכל חפצי הצללה אחרים מהשלבים הקודמים.

![Entity Creation](https://www.blockbench.net/images/wiki/guides/minecraft\_style\_guide/entity\_creation.png)

## **מחברים**

****[![](https://avatars.githubusercontent.com/u/85763346?v=4) MasterianoX](https://github.com/MasterianoX)

[https://www.blockbench.net/wiki/guides/minecraft-style-guide](https://www.blockbench.net/wiki/guides/minecraft-style-guide)
