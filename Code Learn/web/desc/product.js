// ✌ :))

var $ = document;

$.querySelector('button').addEventListener('click' , ()=>{
    history.back()
})

var shoz = [
    {id:1 , h1: 'API for Node.js' , img : 'https://sabzlearn.ir/wp-content/uploads/2022/06/gbnfjjjjj.png' , price:'260000'},
    {id:2 , h1: 'JS creative Projects' , img : 'https://cdn.karlancer.com/assets/programming-landing/chapter-1-3.png' , price:'140000'},
    {id:3 , h1: 'Css Grid' , img : 'https://files.virgool.io/upload/users/1493150/posts/ce3q6mznaaxn/ixexhhizz1z6.png' , price:'20000'},
    {id:4 , h1: 'Flex Box' , img : 'https://files.virgool.io/upload/users/1183847/posts/zbh3v5mmt84q/vnxyhdvwfuwi.webp' , price:'!رایگان'},
    {id:5 , h1: 'Css3' , img : 'https://mona.media/wp-content/uploads/2021/07/css.png' , price:'100000'},
    {id:6 , h1: 'Html5' , img : 'https://cdn.karlancer.com/assets/programming-landing/programming-banner.png' , price:'!رایگان'},
    {id:7 , h1: "JS master's" , img : 'https://www.iraniancyber.com/wp-content/uploads/2022/02/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA.jpg' , price:'4000000'},
    {id:8 , h1: 'Java' , img : 'https://blog.faradars.org/wp-content/uploads/2021/02/Java-Programs.jpg' , price:'2100000'},
    {id:9 , h1: 'Payton 2022' , img : 'https://faradars.org/wp-content/uploads/2016/09/fvpht950-png.png' , price:'3500000'},
    {id:10 , h1: 'React.Js' , img : 'https://reactjs.org/logo-og.png' , price:'2200000'},
    {id:11 , h1: 'Android' , img : 'https://th.bing.com/th/id/R.6032775e95569a36b36a9f7be3b141c9?rik=6qU2v5CA7vYRJQ&pid=ImgRaw&r=0' , price:'400000'},
    {id:12 , h1: 'php' , img : 'https://th.bing.com/th/id/R.0f47a45c1cf9e6ab3cc67131a34a5fbc?rik=GK%2b%2bk3PCM%2fWd8Q&pid=ImgRaw&r=0' , price:'4700000'},
]
var locationSer = new URLSearchParams(location.search);
var id  =  locationSer.get('id')



shoz.forEach(function (shoes){
    if(id == shoes.id){
        $.querySelector('.hello').innerHTML=shoes.h1
        var divdete = $.querySelector('.details')



var divdesc = $.createElement('div')
divdesc.classList.add('desc')

var h1elem = $.createElement('h1')
h1elem.innerHTML=shoes.h1

var pelem = $.createElement('p')
pelem.classList.add('lopp')




var divimg = $.createElement('div')
divimg.classList.add('image')
divimg.style.backgroundImage="url("+shoes.img+")"


divdete.append(divimg , divdesc);
divdesc.append(h1elem , pelem);


if(shoes.price.includes('0')){
    $.getElementById('h2').innerHTML="مبلغ:"+shoes.price+"تومان"
}else{
    $.getElementById('h2').innerHTML=shoes.price
}
document.title = 'Product | '+shoes.h1
    }
})

var text_form  = [
    {id: 1 , h2:'تنها چیزی که برای ورود به بازار کار و استخدام تو شرکتای برنامه نویسی نیاز هست، فقط نمونه کار قابل قبول هست. هر چقدر که پروژه هاتون کامل‌تر و واقعی‌تر باشن، به همون اندازه شانس استخدامیتون میره بالا. به همین خاطر خیلی از برنامه نویسای فرانت‌اند واسه این که پروژه هاشون کامل و واقعی‌ باشن، دنبال برنامه نویس بک‌اند میگردن تا واسه پروژه هاشون بک‌اند بنویسه. حتی گاها این کار رو با پرداخت هزینه انجام میدن که خب کاملا منطقیه.به همین خاطر ما دور ای پی ای نویسی را برگذار کردیم.'},  //API for Node.js
    {id: 2 , h2:'ممکن است در خیلی از وب سایت ها و شبکه های مجازی پروژه هایی را دیده باشید که خیلی خیلی خوشگل و زیبا هستند و با خودتان بگویید “من کِی میتونم همچین چیزی پیاده سازی کنم؟” یا اصلا فکر کنید همچین چیزایی با جاوا اسکریپت غیر ممکنه! هدف این دوره اینه که شما عزیزان با دیدن پروژه های خلاقانه و زیبا نه تنها دیگه همچین فکری نکنید، بلکه خودتون بتونید پروژه های خلاقانه و تعاملی رو با جاوا اسکریپت پیاده سازی کنید.'},  //JS creative Projects
    {id: 3 , h2:' این دوره مربوط یک ماژول مربوط به سی اس اس است . کارکردن با این ماژول بسیار جذاب است و با امکانات و پراپرتی هایی که در اختیار ما قرار میدهد نه تنها مشکلات گذشته در طراحی و ریسپانسیو را نخواهیم داشت بلکه میتوانیم خیلی راحت تر از قبل کد بزنیم و لذت ببریم. پس یادتان باشد با کمک این ماژول میتوانیم صفحات وب سایت خود را به آسانی پیاده سازی کنیم.'},  //Css Grid
    {id: 4 , h2:'اگر شما به حوزه طراحی و برنامه نویسی وب علاقه داشته باشید قطعا در مورد صفحه آرایی، ریسپانسیو سازی، فلکس باکس و … شنیده اید. در این دوره قصد داریم ماژول فلکس باکس را به صورت پروژه محور و از صفر تا صد به شما آموزش دهیم.اگر شما به حوزه طراحی و برنامه نویسی وب علاقه داشته باشید قطعا در مورد صفحه آرایی، ریسپانسیو سازی، فلکس باکس و … شنیده اید. در این دوره قصد داریم ماژول فلکس باکس را به صورت پروژه محور و از صفر تا صد به شما آموزش دهیم.'},  //Flex Box
    {id: 5 , h2:'اگر تا اینجا با اچ تی ام ال اشنا شدی و میتونی اسکلت یه سایتو پیاده کنی دمت گرم. یه قدم بزرگ برداشتی. حالا وقتشه که با یادگیری این زبان  به اسکلتی که ساختی پوست و گوشت بدی تا تبدیل به یه موجود زیبا بشه.  این زبان این کارو برات انجام میده.توی دوره مقدماتی تا پیشرفته یاد میگیری چطوری به المانای خشک و بی جون وبسایت زیبایی ببخشی. اینجا ما از رنگی کردن متن و دکمه ها میگیم تا پیاده سازی یه لندینگ پیج خفن و دلنشین یاد میدیم بهت تضمین میدم محتوای این دوره به حدی شیرینه که بعد از این دوره استایل اطرافیانتو به صورت کد میبینی .'},  //Css3
    {id: 6 , h2:'اولین قدم شروع طراحی وبسایت، آموزش این زبان هست. این یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی.همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه، هیچ وبسایتی هم نمیتونه بدون این زبان لود بشه. با یادگیریش خیلی راحت و قشنگ میتونی یه اسکلت سفت و سخت برای وبسایتت درست کنی.نگران یادگیریشم نباش. ما تو کد لرن به صورت کاملا رایگان یه دوره مقدماتی تا پیشرفته تدارک دیدیم، تا بدون دغدغه مسیر طراحی سایت رو شروع کنی.این آموزش به صورت کاملا عملی و پروژه محور هست، طوری که بعد از چند جلسه به راحتی میتونی یه فرم ثبت نام با کمک  این زبان خوب طراحی کنی.'},  //Html5
    {id: 7 , h2:'جاوا اسکریپت خالص به این معنی ا ست که شما به‌طور مستقیم از خود زبان جاوا اسکریپت برای برنامه‌نویسی استفاده کنید. بنابراین این دوره به آموزش زبان جاوا اسکریپت می‌پردازد و شما را برای یادگیری فریم‌ورک‌ها و سایر امکانات این زبان شیرین آماده می‌کند. گرچه گذراندن این دوره، راه ورود به دنیای بزرگ جاوا اسکریپت است؛ فراموش نکنید که برای بهینه کد زدن در این قلمرو باید حتما به سراغ فریم‌ورک‌های مناسب جاوا اسکریپت نیز بروید و دانش خود را تا جای ممکن افزایش دهید.اگر به دنیای طراحی وب به شکل حرفه‌ای علاقه دارید، جاوا اسکریپت یکی از مهارت‌های کلیدی شما برای پیشرفت و کسب درآمد است. فریم‌ورک‌ها و کتابخانه‌های این زبان که بعدا آن‌ها را خواهید آموخت امکانات گسترده‌ای در حوزه وب، اپلیکیشن موبایل و تحت وب در اختیار شما قرار می‌دهند و هرکدام می‌توانند منبع درآمد متفاوتی باشند.    '},  //JS master's
    {id: 8 , h2:'جاوا به معنای واقعی یکی از زبانرهای مطرح دنیا که برای کار های مختلف چه وب و چه اندروبد استفاده میه اگر چه نسبت به بقیه زبان ها کمی سختره اما کد لرن سعی کرده اون رو به بهترین شیوه اموزش بده و این دوره یکی از بهترین دوره های کد لرن هست.'},  //Java
    {id: 9 , h2:'حیف نیست محبوب ترین زبان برنامه نویسی دنیا رو  ناقص و بی هدف یادبگیری؟ ما تصمیم داریم دوره پایتون رو به نحوی آموزش بدیم که کامل ترین دوره آموزشی، هم در مقایسه با دوره های خارجی و هم در مقایسه با دوره های داخلی باشه و همه ی تجربه های تلخت رو از یادگیری برنامه نویسی بشوره ببره! این آموزش از زیر صفر و پایه ترین مبحث شروع میشه تا تخصصی ترین و پیشرفته ترین مباحث، هر قسمت کلی پروژه و تمرین حل می کنیم، برات تکلیف مشخص می کنیم، کاربردشو تو دنیای واقعی نشون میدیم و در آخر…؛این یعنی یک دوره صفر تا نزدیکای صد پایتون! در ادامه به طور کامل راجع به آموزش  پایتون  آکادمی کد لرن توضیحات کامل می-دهیم.'},  //Payton 2022
    {id: 10 , h2:'ری اکت یکی از کتابخانه‌های متن باز و رایگان جاوا اسکریپت است که توسط فیسبوک و برای بهبود طراحی رابط کاربری در وب عرضه شده است. هدف ری اکت این است که روند توسعه ساده و سریع شود و یادگیری آن فرصت‌های شغلی جدیدی را برای شما به ارمغان می‌آورد. ویژگی‌های کاربردی این کتابخانه باعث شده که اغلب برنامه‌نویسان جاوا اسکریپت برای یادگیری آن اقدام کنند.این دوره شما را به خوبی با کتابخانه ری اکت آشنا می‌کند و اگر به فکر افزایش سطح مهارت خود هستید، می‌توانید روی این دوره حساب کنید.'},  //React.Js
    {id: 11 , h2:'هیچ‌کدام از ما نمی‌توانیم آینده را بدون گوشی‌های هوشمند تصور کنیم. اندروید قدرتمند اکنون بیش از 70% بازار جهانی گوشی‌های هوشمند را در دست دارد و فرصت ویژه‌ای برای دوست‌داران خود فراهم کرده تا در هر گوشه از جهان دست به خلق محصول بزنند و کارفرمای خود باشند. شما به‌عنوان یک برنامه‌نویس حرفه‌ای اندروید فرصت‌های شغلی و کسب درآمد بسیار زیادی دارید. از راه‌اندازی کسب‌وکار شخصی گرفته تا ساخت اپلیکشن و فروش آن در مارکت‌ها یا همکاری با شرکت‌های خارجی و کسب درآمد ارزی.'},  //Android
    {id: 12 , h2:'اغراق نیست اگر زبان برنامه‌نویسی پی اچ پی را پرچم‌دار حوزه بکند بدانیم زیرا کاربرد آن به‌قدری گسترده است که در ایران سایت‌هایی مانند دیجی‌کالا، اسنپ و در جهان سایت‌های بزرگی مانند فیس‌بوک و پینترست به آن اعتماد کرده‌اند. استفاده از این زبان در پروژه‌های بزرگ نشان می‌دهد که یادگیری پی اچ پی  برای علاقه‌مندان حوزه وب ضروری به نظر می‌رسد. ما برای صرفه‌جویی در زمان باید بهترین راه یادگیری پی اچ پی را انتخاب کرده و از بهترین منابع آموزش پی اچ پی استفاده کنیم.دوره‌ متخصص پی اچ پی با هدف تدریس تمامی مباحث و سرفصل‌های لازم برای تسلط و آمادگی دانشجویان جهت ورود به بازار کار ارائه شده است. '},  //php
] 
text_form.forEach(function (tet){
    if( id == tet.id){
        $.querySelector('.lopp').innerHTML=tet.h2
    }
})

window.onload = function them(){
    if(localStorage.getItem('them') == 'dark'){
        $.body.style.backgroundColor='#000011' 
        $.querySelector('.courses').style.backgroundColor='black' 
        $.querySelector('.courses3').style.backgroundColor='black' 
        $.querySelector('.courses4').style.backgroundColor='black' 
        $.querySelector('.courses8').style.backgroundColor='black' 
        $.querySelector('.courses6').style.backgroundColor='black' 
        $.querySelector('.courses7').style.backgroundColor='black' 
        $.querySelector('p').style.color='white' 
        $.querySelector('h1').style.color='white' 
    }else if(localStorage.getItem('them') == 'lig'){
        $.body.style.backgroundColor='#ffffff' 
            $.querySelector('.courses').style.backgroundColor='#ffffff' 
            $.querySelector('.courses3').style.backgroundColor='#ffffff' 
            $.querySelector('.courses4').style.backgroundColor='#ffffff' 
            $.querySelector('.courses8').style.backgroundColor='#ffffff' 
            $.querySelector('.courses6').style.backgroundColor='#ffffff' 
            $.querySelector('.courses7').style.backgroundColor='#ffffff' 
            $.querySelector('p').style.color='black' 
            $.querySelector('h1').style.color='black' 
    }
    setTimeout(() => {
        $.querySelector('.page1').hidden=true
        $.querySelector('.page2').hidden=false
    }, 4000);
}

var on=0
$.getElementById('descrip-btn').addEventListener('click' , ()=>{
    if(on==0){
        $.querySelector('.descrip').hidden=false;
        on++
    }else{
        $.querySelector('.descrip').hidden=true;
        on--
    }
})

var w = 0
$.querySelector('.sqea').addEventListener('click'  ,()=>{
    if(w==0){
        $.querySelector('.sqea').style.height = '330px'
        $.getElementById('pa').style.transform = 'rotate(180deg)'
        w++
    }else{
        $.querySelector('.sqea').style.height = '100px'
        $.getElementById('pa').style.transform = 'rotate(0deg)'
        w--
    }
})

$.querySelector('.sqeb').addEventListener('click'  ,()=>{
    if(w==0){
        $.querySelector('.sqeb').style.height = '330px'
        $.getElementById('pb').style.transform = 'rotate(180deg)'
        w++
    }else{
        $.querySelector('.sqeb').style.height = '100px'
        $.getElementById('pb').style.transform = 'rotate(0deg)'
        w--
    }
})

$.querySelector('.sqec').addEventListener('click'  ,()=>{
    if(w==0){
        $.querySelector('.sqec').style.height = '330px'
        $.getElementById('pc').style.transform = 'rotate(180deg)'
        w++
    }else{
        $.querySelector('.sqec').style.height = '100px'
        $.getElementById('pc').style.transform = 'rotate(0deg)'
        w--
    }
})

$.querySelector('.sqed').addEventListener('click'  ,()=>{
    if(w==0){
        $.querySelector('.sqed').style.height = '330px'
        $.getElementById('pd').style.transform = 'rotate(180deg)'
        w++
    }else{
        $.querySelector('.sqed').style.height = '100px'
        $.getElementById('pd').style.transform = 'rotate(0deg)'
        w--
    }
})

$.querySelector('.sqee').addEventListener('click'  ,()=>{
    if(w==0){
        $.querySelector('.sqee').style.height = '330px'
        $.getElementById('pe').style.transform = 'rotate(180deg)'
        w++
    }else{
        $.querySelector('.sqee').style.height = '100px'
        $.getElementById('pe').style.transform = 'rotate(0deg)'
        w--
    }
})



var icon = [
    {id:'btn1' , h1:'ظمانت بازگشت وجه'},
    {id:'btn2' , h1:'آموزش پروژه محور'},
    {id:'btn3' , h1:'رفع اشکال و پشتیبانی'},
    {id:'btn4' , h1:'پشتیبانی دائم بعد از خرید'},
    {id:'btn5' , h1:'دسترسی دائمی و بدون محدودیت'}
]
var idicon4;
$.querySelector('.all-icon').addEventListener('click' , (event)=>{
    idicon4 = event.target.id
    icon.forEach(function (lop){
       if(idicon4 == lop.id){
        $.querySelector('.icon-text').innerHTML= lop.h1
       }
    })
})

$.addEventListener('mousemove' ,(event)=>{
    $.querySelector('.mose').style.top=  event.clientY +'px'
    $.querySelector('.mose').style.left=   event.clientX +'px'
})

//------------------------------------share body------------------------------------------

var shareDate = {
    title:'لینک وبسایت اموزشی کد لرن',
    text:'CODE LEARN',
    url:'index.html'
}
