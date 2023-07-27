// DOM => Document Object Model
// BOM => Browser Object Model

var $= document ;
var shoz = [
    {id:1 , h1: 'API for Node.js' , img : 'https://usefulangle.com/img/thumb/nodejs.png' , price:260000},
    {id:2 , h1: 'JS creative Projects' , img : 'https://cdn.karlancer.com/assets/programming-landing/chapter-1-3.png' , price:140000},
    {id:3 , h1: 'Css Grid' , img : 'https://files.virgool.io/upload/users/1493150/posts/ce3q6mznaaxn/ixexhhizz1z6.png' , price:20000},
    {id:4 , h1: 'Flex Box' , img : 'https://files.virgool.io/upload/users/1183847/posts/zbh3v5mmt84q/vnxyhdvwfuwi.webp' , price:'!رایگان'},
    {id:5 , h1: 'Css3' , img : 'https://mona.media/wp-content/uploads/2021/07/css.png' , price:100000},
    {id:6 , h1: 'Html5' , img : 'https://cdn.karlancer.com/assets/programming-landing/programming-banner.png' , price:'!رایگان'},
    {id:7 , h1: "JS master's" , img : 'https://www.iraniancyber.com/wp-content/uploads/2022/02/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA.jpg' , price:4000000},
    {id:8 , h1: 'Java' , img : 'https://blog.faradars.org/wp-content/uploads/2021/02/Java-Programs.jpg' , price:2100000},
    {id:9 , h1: 'Payton 2022' , img : 'https://faradars.org/wp-content/uploads/2016/09/fvpht950-png.png' , price:3500000},
    {id:10 , h1: 'React.Js' , img : 'https://reactjs.org/logo-og.png' , price:2200000},
    {id:11 , h1: 'Android' , img : 'https://th.bing.com/th/id/R.6032775e95569a36b36a9f7be3b141c9?rik=6qU2v5CA7vYRJQ&pid=ImgRaw&r=0' , price:400000},
    {id:12 , h1: 'php' , img : 'https://th.bing.com/th/id/R.0f47a45c1cf9e6ab3cc67131a34a5fbc?rik=GK%2b%2bk3PCM%2fWd8Q&pid=ImgRaw&r=0' , price:4700000},

    {id:13 , h1: 'Webinar' , img : 'https://blog.prosci.com/hubfs/3.images/listing-images/webinar-listing-featured.jpg#keepProtocol' , price:'!رایگان'},
    {id:14, h1: 'Vue.js' , img : 'https://swansoftwaresolutions.com/wp-content/uploads/2020/01/Benefits-of-Using-VUE.JS.jpeg' , price:440000},
    {id:15 , h1: 'Laravel' , img : 'https://th.bing.com/th/id/OIP.sGmrhfsTn5BEe1YlXUUMQgHaDv?pid=ImgDet&rs=1' , price:2000000},
    {id:16 , h1: 'Network Security' , img : 'https://th.bing.com/th/id/OIP.RPknrLwUZEG4NSD6YBYoPQHaDt?pid=ImgDet&w=2560&h=1281&rs=1' , price:1300000},
    {id:17 , h1: 'Black Js' , img : 'https://th.bing.com/th/id/R.d0dd84dc9a670686ca5204d53c011f2e?rik=DnR62Y3Lkov2Tg&pid=ImgRaw&r=0&sres=1&sresct=1' , price:'!رایگان'},
    {id:18 , h1: 'WordPress' , img : 'https://th.bing.com/th/id/R.a98c9005efeb5f11c2b17197dd75f4ac?rik=a5%2fZsrK1A9t5hA&pid=ImgRaw&r=0' , price:900000},
]
shoz.forEach(function (shoes) {
    var divall = $.querySelector('.container')
    var divall2 = $.querySelector('.container2')
    var divall3 = $.querySelector('.container3')
var img45 = shoes.img
var h6 = shoes.h1
if(shoes.price == '!رایگان'){
    var price =0 
}else{
    var price = shoes.price
}



var divcard = $.createElement('div')
divcard.classList.add('product-card')

var h1 = $.createElement('h1') 
h1.innerHTML=shoes.h1

var p =$.createElement('p')
p.innerHTML='Lorem ipsum, or lipsum as it is sometimes known'

var divimg = $.createElement('div') 
divimg.classList.add('product-pic')
divimg.style.backgroundImage = 'url('+ shoes.img+')'

var divinfo = $.createElement('div')
divinfo.classList.add('product-info')

var divprice = $.createElement('div') 
divprice.classList.add('product-price')
if(shoes.price == '!رایگان'){
    divprice.innerHTML=shoes.price
}else{
    divprice.innerHTML="تومان"+shoes.price
}

var shop = $.createElement('a')
shop.classList.add('product-shop')
var span = $.createElement('apan')
span.classList.add('material-symbols-outlined')
span.innerHTML='add_circle'
shop.addEventListener('click' , ()=>{
    ssd(price , img45 ,h6)
})

var diva = $.createElement('a')
diva.classList.add('product-button') 
diva.innerHTML='مشاهده دوره'
diva.setAttribute('href' , 'desc/product.html?id=' + shoes.id )

var h3 = $.createElement('h3')
h3.classList.add('name-info')
h3.innerHTML= 'مدرس دوره : سبحان موسی زاده'

divcard.append(h1 , p , divimg , h3 ,divinfo )
divinfo.append(divprice , diva ,shop)
shop.append(span)
divall.append(divcard)
if(shoes.id == 13 || shoes.id == 14 || shoes.id == 15){
    diva.setAttribute('href' , '' )
    diva.innerHTML='بزودی'
    divall2.append(divcard)
}else if(shoes.id == 16 || shoes.id == 17 || shoes.id == 18){
    diva.setAttribute('href' , '' )
    diva.innerHTML='بزودی'
    divall3.append(divcard)
}
})
var ew=0;
setInterval(() => {
    if(ew==0){
        $.querySelector('.con2').hidden=true
        $.querySelector('.con3').hidden=false
        ew++
    }else{
        $.querySelector('.con2').hidden=false
        $.querySelector('.con3').hidden=true
        ew--
    }
}, 7000);
setTimeout(() => {
    $.querySelector('.loded').classList.add('loded2')
    setTimeout(() => {
        $.querySelector('.loded').classList.remove('loded2')
        $.querySelector('.loded').classList.add('loded3')
    setTimeout(() => {
        if(navigator.onLine){
            $.querySelector('.loded').classList.remove('loded3')
        $.querySelector('.page1').hidden=true
        $.querySelector('.page2').hidden=false
        }else{
            $.querySelector('.net').innerHTML= 'Please check your connection to the Internet.'
        }
    }, 1000);
    }, 3000);
});


var i = 0;
        $.querySelector('.dark').addEventListener('click' , () =>{
            $.querySelector('.dark').classList.add('darkmode')
            setTimeout(() => {
                $.querySelector('.dark').classList.remove('darkmode')
            }, 2000);
            if(i==0){
            $.body.style.backgroundColor='#ffffff' 
            localStorage.setItem('them' , 'lig')
            $.querySelector('.courses').style.backgroundColor='white' 
            i++;
            }else if(i==1){
                $.body.style.backgroundColor='#000011' 
                localStorage.setItem('them' , 'dark')
                $.querySelector('.courses').style.backgroundColor='black' 
                i--;
            }
        })


window.onload = function them(){
    if(localStorage.getItem('them') == 'dark'){
        $.body.style.backgroundColor='#000011' 
        $.querySelector('.courses').style.backgroundColor='black' 
        $.querySelector('.courses44').style.backgroundColor='black' 
        $.querySelector('.courses55').style.backgroundColor='black' 
        $.querySelector('.courses66').style.backgroundColor='black' 
        $.querySelector('.courses77').style.backgroundColor='black' 
    }else if(localStorage.getItem('them') == 'lig'){
        $.body.style.backgroundColor='#ffffff' 
            $.querySelector('.courses').style.backgroundColor='white' 
            $.querySelector('.courses44').style.backgroundColor='white' 
            $.querySelector('.courses55').style.backgroundColor='white' 
            $.querySelector('.courses66').style.backgroundColor='white' 
            $.querySelector('.courses77').style.backgroundColor='white' 
    }

    var user = localStorage.getItem('user')
    $.querySelector('.user').innerHTML  = user

    setTimeout(() => {
        $.querySelector('.swel').hidden=false
    }, 10000);

    
}

$.querySelector('.btn-top').addEventListener('click' , ()=>{
    $.documentElement.scrollTop=0
})
document.addEventListener('scroll',() => {
  if($.documentElement.scrollTop < 100){
      $.querySelector('.div0').style.position = 'relative'
      $.querySelector('.text-top').style.opacity='0'
    $.querySelector('.text-top').style.transform='translateX(-200px)'
    $.querySelector('.btn-top').hidden = true;
}else{
    $.querySelector('.div0').style.position = 'fixed'
    $.querySelector('.text-top').style.opacity='1'
    $.querySelector('.text-top').style.transform='translateX(0px)'
    $.querySelector('.btn-top').hidden = false;
  }  

});

$.querySelector('.btn-us').addEventListener('click' , ()=>{
    $.querySelector('.call').hidden=false
    setTimeout(() => {
        $.querySelector('.call').hidden=true
    }, 4000);
})

var t ;
        document.addEventListener('scroll',() => {
        if(innerWidth>1000){
            if(document.documentElement.scrollTop!==0){
                t = document.documentElement.scrollTop / (9160-innerHeight) *180
                $.querySelector('.div-scroll').style.width =t+'%'
            }
        }else{
            if(document.documentElement.scrollTop!==0){
                t = document.documentElement.scrollTop / (11000-innerHeight) *95
                $.querySelector('.div-scroll').style.width =t+'%'
            }
        }
        });
        var po=0;
        setInterval(() => {
            if(po==0){
                $.querySelector('.pa1').style.backgroundColor='#b1b1b1' 
                $.querySelector('.pa1').style.width = '20px'
                $.querySelector('.pa2').style.backgroundColor='#4df200' 
                $.querySelector('.pa2').style.width = '50px'
                po++
            }else{
                $.querySelector('.pa2').style.backgroundColor='#b1b1b1' 
                $.querySelector('.pa2').style.width = '20px'
                $.querySelector('.pa1').style.backgroundColor='#4df200' 
                $.querySelector('.pa1').style.width = '50px'
                po--
            }
            
        }, 7000);

        $.querySelector('.btn-sub').addEventListener('click' , ()=>{
            var num1= $.getElementById('num1').value
            var num2=$.getElementById('num2').value
            var num3=$.getElementById('num3').value
            if(num1=='' || num2=='' || num3==''){
                $.querySelector('.tet-form').hidden=false
                $.querySelector('.tet-form').innerHTML='.لطفا اطلاعات خود را کامل کنید'
                setTimeout(() => {
                    $.querySelector('.tet-form').hidden=true
                }, 3000);
            }else{
                $.getElementById('num1').value=''
                $.getElementById('num2').value=''
                $.getElementById('num3').value=''
                $.querySelector('.cer').hidden=false
            setTimeout(() => {
                $.querySelector('.tet-form').hidden=false
                $.querySelector('.tet-form').innerHTML='.پاسخ به صورت پیامک برایتان ارسال می گردد'
                $.querySelector('.cer').hidden=true
                setTimeout(() => {
                    $.querySelector('.tet-form').hidden=true
                }, 2000);
            }, 3000);
            }
        })
            $.getElementById('cart').addEventListener('click' , ()=>{
                    $.querySelector('.cart').hidden=false
                    document.documentElement.scrollTop=0
                    $.querySelector('.bg-shop').hidden=false
            })
            $.querySelector('.exit').addEventListener('click' , ()=>{
                $.querySelector('.cart').hidden=true
                $.querySelector('.bg-shop').hidden=true
                
        })

        $.querySelector('.back-top').addEventListener('click' , ()=>{
            $.querySelector('.notif').classList.add('anim')
            setTimeout(() => {
                $.querySelector('.notif').hidden=true
            }, 900);
        })
        $.querySelector('.ex').addEventListener('click' , ()=>{
            $.querySelector('.swel').hidden=true
        })
var abc=0;
        $.querySelector('.menu_btn').addEventListener('click' , ()=>{
            if(abc==0){
                $.querySelector('.menu_btn').innerHTML ='close'
                $.querySelector('.menu_div').hidden=false
                abc++
            }else{
                $.querySelector('.menu_btn').innerHTML ='menu'
                $.querySelector('.menu_div').hidden=true
                abc--
            }
        })
        

            $.addEventListener('mousemove' ,(event)=>{
                $.querySelector('.mose').style.top=  event.clientY +'px'
                $.querySelector('.mose').style.left=   event.clientX +'px'
            })
//------------------------------------shop carts------------------------------------------
var total=0;
function ssd(price , img45 , h6){

    total  +=  price
    
    $.querySelector('.total').innerHTML=total+':مبلغ کل'
    
    var shop2 = $.createElement('div')
    shop2.classList.add('shop-2')



    var img_elem =$.createElement('img')
    img_elem.classList.add('img-shop')
    img_elem.setAttribute('src' , img45 )
    

    var  p_elem = $.createElement('p')
    p_elem.classList.add('p-shop')
    p_elem.innerHTML = price


    var h1_elem = $.createElement('h1')
    h1_elem.classList.add('h1-shop')
    h1_elem.innerHTML = h6


    shop2.append(img_elem , h1_elem , p_elem)
    $.querySelector('.shop').append(shop2)

}


//------------------------------------screen body------------------------------------------

setInterval(
    function filter(){
    var body=new Date()
    if(body.getHours() >= 20){
        $.documentElement.style.filter = 'brightness(.6)'
    }
})

//------------------------------------share body------------------------------------------

var shareDate = {
    title:'لینک وبسایت اموزشی کد لرن',
    text:'CODE LEARN',
    url:'index.html'
}