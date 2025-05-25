const containerDiv = document.getElementById("container");
const form = document.getElementById("myForm");
const errorSpan = document.getElementById("email-error");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const successDiv = document.getElementById("success");
const userEmailDisplay = document.getElementById("userEmailDisplay");
const dismissBtn = document.getElementById("dismissBtn");




form.addEventListener("submit", function (event) {
    event.preventDefault();  //رفتار های پیش فرض تابع را از بین ببر

    const email = emailInput.value.trim();  //محتویات ایمیل را میگیره و فاصله های اضافی قبل و بعدش را حذف میکنه
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   //الگوی صحیح بودن ایمیل

    if (emailPattern.test(email)) {  //emailPattern را روی email تست کن اگر صحیح بود
        errorSpan.innerText = ""; //پیام خطا (اگر قبلاً نمایش داده شده باشد) پاک می‌شود.
        emailInput.classList.remove("invalid"); //کلاس invalid از فیلد ایمیل حذف می‌شود

        containerDiv.classList.add("success-hidden");  //با افزودن کلاس success-hidden، این بخش مخفی می‌شود
        successDiv.classList.remove("success-hidden"); //نمایش بخش پیام موفقیت
        userEmailDisplay.innerText = email; //ایمیل وارد شده توسط کاربر در یک span دیگر نمایش داده می‌شود 
    } else {  //اگر معتبر نبود
        errorSpan.innerText = "Valid email required"; //پیام خطا به کاربر نشان داده می‌شود
        emailInput.classList.add("invalid"); //کلاس invalid به فیلد ایمیل اضافه می‌شود

        // از نمایش success جلوگیری می‌کنیم
        successDiv.classList.add("success-hidden");
    }
});

dismissBtn.addEventListener("click", () => {
    successDiv.classList.add("success-hidden");
    containerDiv.classList.remove("success-hidden");
    emailInput.value = "";
    emailInput.classList.remove("invalid");
    errorSpan.innerText = "";
});

