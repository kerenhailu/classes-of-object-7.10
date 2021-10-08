// צרו מחלקה של כלב, עם שדות של שם, גיל וסוג
// class Car{};
// class Dog{
//     Name;
//     Age;
//     sog;
// };

// צרו מחלקה של חתול, עם שדות של שם, גיל וסוג, הוסיפו בנא
// class Cat{
//     Name;
//     Age;
//     Sog;
//     constructor(name,age,sog){
//         this.Name=name;
//         this.Age=age;
//         this.Sog=sog;
//     }
// }

// const cat1=new Cat("mimi",10,"street")

// צרו מחלקה של תלמיד, עם שדות של שם, כיתה וגובה, הוסיפו בנא

// class Puple{
//     Name;
//     Class;
//     Hight;
//     constructor(name,kita,hight){
//         this.Name=name;
//         this.Class=kita;
//         this.Hight=hight;
//     }
// }
// צרו מופע של סטודנט, כלומר, המחלקה שבניתן/ם בסעיף הקודם.
// const student1=new Puple("keren",5,200)
// const student2=new Puple("yossi",3,100)
// console.log(student1);
// console.log(student2);

// צרו מחלקה של עובד, עם שדות של שם פרטי, שם משפחה, שנת לידה וטלפון, הוסיפו בנאי, צרו 3 אובייקטים
// class Working{
//     Name;
//     FamName;
//     Year;
//     Phone;
//     constructor(name,famName,year,phone){
//         this.Name=name;
//         this.FamName=famName;
//         this.Year=year;
//         this.Phone=phone;
//     }
// }
// const ManWork1=new Working("gila","levi",2000,054347)
// const ManWork2=new Working("sapir","dan",1990,025555)
// const ManWork3=new Working("sara","levi",2002,0505)
// console.log(ManWork1);
// console.log(ManWork2);
// console.log(ManWork3);

// --------------------------------------------------------?
// 8.	צרו טופס של משתמש:
// a.	שם פרטי
// b.	שם משפחה
// c.	גיל
// לחיצה על שלח יוצרת מופע של משתמש, עם אותם שדות.
// האובייקט יודפס ללוג.
// האובייקט יודפס למסך.
// הציגו טבלה עם הנתונים.

// class User{
//     Name;
//     FamName;
//     Age;
//     constructor(name,famName,age){
//         this.Name=name;
//         this.FamName=famName;
//         this.Age=age;
//     }
//     printUser(){
//             console.log(user1);
//     }
// }
// btn.onclick=()=>{
//     const user1=new User(inputName.value, inputFamName.value, inputAge.value)
//     sec.innerHTML+=`<table>
//     <tr><td>${user1.Name}</td>
//     <td>${user1.FamName}</td>
//     <td>${user1.Age}</td></tr>
//     </table>
//     <button id="btnShow" onclick="${User.printUser()}">${user1.Name}</button>`
// console.log(user1);
// user1.alertUser()
// }
// btnShow.onclick=()=>{
//     console.log(user1);
// }

// =====================================================
// 9.	צרו טופס של תלמיד:
// a.	שם פרטי
// b.	שם משפחה
// c.	גיל
// d.	אימייל
// e.	כיתה
// f.	שנת לידה
// g.	תמונה
// לחיצה על שלח יוצרת מופע של תלמיד, עם אותם שדות.
// האובייקט יודפס ללוג.
// האובייקט יודפס למסך.
// בעת לחיצה תלמיד נוסף לטבלה עם הנתונים.
// צרו פונקציה במחלקה שמחזירה את הנתונים של התלמיד כסטרינג.
// צרו פונקציה במחלקה שמדפיסה את הנתונים ללוג.
// כאשר לוחצים על שלח, נוסף כפתור עם השם של התלמיד שנוצר, ובעת לחיצה מודפס ללוג המידע של האובייקט.
// הוסיפו עיצוב.
// FirstnameInput LastnameInput AgeInput EmailInput ClassInput YearInput PicInput sectionInput buttonSend
class Pupils {
  Firstname;
  Lastname;
  Age;
  Email;
  ClassP;
  Year;
  Pic;
  constructor(
    FirstnameInput,
    LastnameInput,
    AgeInput,
    EmailInput,
    ClassInput,
    YearInput,
    PicInput
  ) {
    this.Firstname = FirstnameInput;
    this.Lastname = LastnameInput;
    this.Age = AgeInput;
    this.Email = EmailInput;
    this.ClassP = ClassInput;
    this.Year = YearInput;
    this.Pic = PicInput;
  }
  PupilPrint(){
    console.log(this.Firstname,
        this.Lastname,
        this.Age,
        this.Email,
        this.ClassP,
        this.Year,
        this.Pic,);
    }
  PupilString(){
    toString(this.Firstname,
    this.Lastname,
    this.Age,
    this.Email,
    this.ClassP,
    this.Year,
    this.Pic)
  }
}
buttonSend.onclick=()=>{
let pupil1=new Pupils(FirstnameInput.value,LastnameInput.value,AgeInput.value,EmailInput.value,ClassInput.value,YearInput.value,PicInput.value)
table.innerHTML+=`<tr><td>${pupil1.Firstname}</td>
<td>${pupil1.Lastname}</td>
<td>${pupil1.Age}</td>
<td>${pupil1.Email}</td>
<td>${pupil1.ClassP}</td>
<td>${pupil1.Year}</td>
<td><button onclick="${pupil1.PupilPrint()}">${pupil1.Firstname}</button</td>
<td><img src="${pupil1.Pic}" width=100px height=80px></td></tr>
`

console.log(pupil1);
// pupil1.PupilPrint()

console.log(pupil1.PupilString())


  // for (const key in pupil1) {
//     if(pupil1[key]==pupil1[PicInput]){
//         sectionInput.innerHTML+=`<img src="${pupil1[PicInput]}">`
//     }
//     console.log(pupil1[key]);
//      sectionInput.innerHTML+=`<table><tr><td>${pupil1[key]}</td></tr></table>` 
//     }  
}