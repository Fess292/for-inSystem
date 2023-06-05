function toform(id) {
	id.click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $("#form").offset().top // класс объекта к которому приезжаем
		}, 700); // Скорость прокрутки
	});
}
toform($('.toform'));

// hamburger

          function toggleCssMenu(icon) {
              var cssmenu = document.getElementById('cssmenu');
              if (icon.className.indexOf('active') == -1) {
                  icon.className = 'header__icon active';
            cssmenu.style.display = "block";
            setTimeout(function(){cssmenu.className = 'active';},0);            
              }
              else {
                  icon.className = 'header__icon';
            cssmenu.className = '';
            setTimeout(function(){cssmenu.style.display = "none";},411); 
              }
          }

// range active steps

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + '%'; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + '%';
}


// fixed header
$(function() {
	let header = $('.header');
	// let hederHeight = header.height(); // вычисляем высоту шапки
	 
	$(window).scroll(function() {
	  if($(this).scrollTop() > 1) {
	   header.addClass('header__fixed');
	//    $('body').css({
	// 	  'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
	//    });
	  } else {
	   header.removeClass('header__fixed');
	//    $('body').css({
	// 	'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
	//    })
	  }
	});
   });




