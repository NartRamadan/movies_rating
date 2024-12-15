// טוען את מודול express, שהוא פריימוורק לאפליקציות ווב
const express = require('express');

// קובע את מספר הפורט שבו השרת יאזין לבקשות (port 3791)
const port = 3791;

// יוצר מופע חדש של אפליקציה Express
const app = express();

// משתמש במידלואר express.json() כדי לעבד בקשות שמכילות מידע בפורמט JSON
app.use(express.json());

// טוען את מודול body-parser כדי לעבד נתונים שמגיעים בבקשות POST או PUT עם פורמט URL-encoded
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// משתנים לאחסון הנתונים
let curr_id = 1;  // מזהה ייחודי לכל ביקורת
let reviews = [];  // מערך שיאחסן את כל הביקורות
let r1 = {id: curr_id, title: "LOTR", content: "one to rule"};  // יצירת ביקורת ראשונה
curr_id++;  // הגדלת curr_id כך שהביקורת הבאה תקבל מזהה חדש
reviews.push(r1);  // הוספת הביקורת הראשונה למערך reviews

// אפליקציה מקבלת בקשה מסוג POST לנתיב "/Review"
app.post("/Review", (req, res) => {
    // יצירת אובייקט חדש לאחסון הביקורת החדשה
    let item = {};

    // מקצה את המזהה הנוכחי לביקורת החדשה
    item.id = curr_id;

    // מקבל את כותרת הביקורת מהגוף של הבקשה (req.body.title)
    item.title = req.body.title;

    // מקבל את תוכן הביקורת מהגוף של הבקשה (req.body.content)
    item.content = req.body.content;

    // הגדלת curr_id כדי שלביקורת הבאה יהיה מזהה חדש
    curr_id++;

    // הוספת הביקורת החדשה למערך הביקורות
    reviews.push(item);

    // הדפסת המערך של כל הביקורות לקונסול (למטרת פיתוח ובדיקה)
    console.log(reviews);

    // מחזיר תשובה בהצלחה עם קוד סטטוס 200 (OK)
    res.status(200).json("ok");
});

// אפליקציה מקבלת בקשה מסוג GET לנתיב "/Review"
app.get('/Review', (req, res) => {
    // מחזיר את כל הביקורות כתגובה בפורמט JSON
    res.status(200).json(reviews);
});

// אפליקציה מקבלת בקשה מסוג GET לנתיב הראשי "/"
app.get('/', (req, res) => {
    // שולח את הקובץ HTML 'review_main.html' שנמצא בתיקיית 'views'
    res.status(200).sendFile(path.join(__dirname, "/views/review_main.html"));
});

// מתחיל להאזין לבקשות שעולות לשרת בכתובת http://localhost:3791
app.listen(port, () => {
    // מודיע לקונסול שהשרת פועל ומאזין לבקשות
    console.log(`Now listening on port http://localhost:${port}`);
});
