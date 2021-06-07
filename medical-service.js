
var uiControl = (function(){
    return{
  //  set active item function start
    setActiveItemInService: function(num){
      document.querySelector('.service-item-1').classList.remove('active-item-1');
      document.querySelector('.service-item-2').classList.remove('active-item-1');
      document.querySelector('.service-item-3').classList.remove('active-item-1');
      document.querySelector('.service-item-4').classList.remove('active-item-1');
      document.querySelector('.service-item-5').classList.remove('active-item-1');
      document.querySelector('.service-item-' + '' + num).classList.add('active-item-1');
      document.querySelector('.item-no-1').classList.remove('active-item-2')
      document.querySelector('.item-no-2').classList.remove('active-item-2')
      document.querySelector('.item-no-3').classList.remove('active-item-2');
      document.querySelector('.item-no-4').classList.remove('active-item-2');
      document.querySelector('.item-no-5').classList.remove('active-item-2');
      document.querySelector('.item-no-' + '' + num).classList.add('active-item-2');
      if(num === 1){
        document.querySelector('.content-box-5-a').innerHTML = `
             <svg class="check-icon">
             <use xlink:href = "./images/sprite.svg#icon-accessibility"></use>
         </svg>
         <p class="text">urology</p>
             `;
             document.querySelector('.service-content-img-1').src = "./images/medical-room.jpeg";
             document.querySelector('.service-content-img-2').src = "./images/medical-18.jpeg";
      }
      if(num === 2){
        document.querySelector('.content-box-5-a').innerHTML = `
                     <svg class="check-icon">
                     <use xlink:href = "./images/sprite.svg#icon-accessibility"></use>
                 </svg>
                 <p class="text">dental clinic</p>
                     `;
             document.querySelector('.service-content-img-1').src = "./images/medical-17.jpeg";
             document.querySelector('.service-content-img-2').src = "./images/medical-25.jpeg";
      }
    if(num === 3){
      document.querySelector('.content-box-5-a').innerHTML = `
                     <svg class="check-icon">
                     <use xlink:href = "./images/sprite.svg#icon-accessibility"></use>
                 </svg>
                 <p class="text">surgery</p>
                     `;
             document.querySelector('.service-content-img-1').src = "./images/medical-20.jpeg";
             document.querySelector('.service-content-img-2').src = "./images/medical-21.jpeg";
    }
     if(num === 4){
      document.querySelector('.content-box-5-a').innerHTML = `
      <svg class="check-icon">
      <use xlink:href = "./images/sprite.svg#icon-accessibility"></use>
  </svg>
  <p class="text">clinical specialties</p>
      `;
      document.querySelector('.service-content-img-1').src = "./images/medical-22.jpeg";
      document.querySelector('.service-content-img-2').src = "./images/medical-23.jpeg";
     }
     if(num === 5){
      document.querySelector('.content-box-5-a').innerHTML = `
      <svg class="check-icon">
      <use xlink:href = "./images/sprite.svg#icon-accessibility"></use>
  </svg>
  <p class="text">minimal A.Surgery</p>
      `;
        document.querySelector('.service-content-img-1').src = "./images/medical-24.jpeg";
        document.querySelector('.service-content-img-2').src = "./images/medical-26.jpeg";
     }
    },
  // end of set active item on service page
   // remove list from service page
     removeListFromServicePage : function(){
       document.querySelector('.service-list-box').classList.remove('translateX');
     document.querySelector('.arrow-box-left').style.display = 'none';
     document.querySelector('.arrow-box-right').style.display = 'block';
     } ,
      // end remove list from service page
      // add list from service page
      addListToServicePage: function(){
       document.querySelector('.service-list-box').classList.add('translateX');
       document.querySelector('.arrow-box-left').style.display = 'block';
       document.querySelector('.arrow-box-right').style.display = 'none'; 
      },
 
    }
 
 })();
 
 
 var globalControl = (function(uiCtrl){
   // add and remove list from service page
   document.addEventListener('DOMContentLoaded', function(){
     uiCtrl.addListToServicePage();
 
     setTimeout(function(){uiCtrl.removeListFromServicePage();}, 3000)
   });
   //  removelist from service page
  document.querySelector('.arrow-box-left').addEventListener('click', function(){
     uiCtrl.removeListFromServicePage();
  });
   //  add list to service page
   document.querySelector('.arrow-box-right').addEventListener('click', function(){
     uiCtrl.addListToServicePage();  
  });
 
    //  set active item in service page
    document.querySelector('.service-item-1').addEventListener('click', function(){
      uiCtrl.setActiveItemInService(1);
    });
    document.querySelector('.service-item-2').addEventListener('click', function(){
      uiCtrl.setActiveItemInService(2);
    });
    document.querySelector('.service-item-3').addEventListener('click', function(){
      uiCtrl.setActiveItemInService(3);
    });
    document.querySelector('.service-item-4').addEventListener('click', function(){
      uiCtrl.setActiveItemInService(4);
    });
    document.querySelector('.service-item-5').addEventListener('click', function(){
      uiCtrl.setActiveItemInService(5);
    });
 
 
 
 })(uiControl);
 
   
 