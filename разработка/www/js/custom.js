window.addEventListener('DOMContentLoaded', function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:330,
		autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
		stagePadding: 230,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	})
	
	
	 // Modal

   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close'),
	   textImmonial = document.querySelector('.text-testimonial');
	   
	   
	 

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach
   
   
   //обрезаем текст 
   
   function cutLongText(textSize, finalLength) {
    $('.text-testimonial').each(function() {
      if ($(this).text().length > textSize) {
        $(this).html($(this).text().slice(0, finalLength) + '...');
      }
    })
  }
  cutLongText(150, 150);

   
   
   //создаём класс для карточек 
   
   class MenuCard {
	   constructor(src, alt, title, descr, price, ...classes) {
           
            this.title = title;
            this.descr = descr;
            this.price = price;
			this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            
        }
	   
	   
	   
   }
   
   
   
/*     modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    }); 
	
*/



	
	

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });


	
	
	
	
	
	
});