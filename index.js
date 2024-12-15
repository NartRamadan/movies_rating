const express = require('express'); // ייבוא המודול express - משמש לבניית אפליקציות רשת ב-JS
const port = 3791; // הגדרת מספר פורט שבו השרת יאזין לבקשות
const app = express(); // יצירת מופע של אפליקציית Express

// Middleware עבור נתונים ב-JSON (כדי שהשרת יוכל להבין ולהגיב לבקשות JSON)
app.use(express.json());

// Middleware עבור נתונים URL-encoded (כמו נתונים שנשלחים ממסמכי HTML)
app.use(express.urlencoded({ extended: false }));

// הגדרת משתנים עבור מזהה כרגע והביקורות
let curr_id = 1; // הגדרת מזהה חדש - יתחיל מ-1
let reviews = []; // מערך שיאחסן את כל הביקורות
let r1 = { id: 1, title: "LOTR", content: "one to rule them all" }; // יצירת ביקורת ראשונה עם מזהה, כותרת ותוכן
curr_id++; // הגדלת מזהה הביקורת הבא
reviews.push(r1); // הוספת הביקורת לרשימת הביקורות

// הפעלת השרת שיאזין לפניות על פורט 3791
app.listen(port, () => {
    console.log(`Listening on port ${port}`); // הצגת הודעה שמציינת שהשרת מאזין על הפורט
});
