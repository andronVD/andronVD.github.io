document.addEventListener("DOMContentLoaded", function(event) { 

   var url = window.location.href;
   var title = document.title;
   var subject = "Заказ по сварочным работам";
   var description = "Сварочные работы в Ялте 'ДарсанСварка' svarka-yalta-ru.1gb.ru";
   var via = "";
   var imagePin = "https://cdn.dribbble.com/users/13301/screenshots/381297/picture_114.png";

//facebook
$('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
//twitter
$('#share-tw').attr('data-url', url).attr('data-title', description).attr('data-via', via).attr('data-sharer', 'twitter');
// google plus
$('#share-gp').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
// email
$('#share-em').attr('data-to', 'vlad-vd69@mail.ru').attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email');
// pinterest
$('#share-pi').attr('data-url', url).attr('data-image', imagePin).attr('data-description', description).attr('data-sharer', 'pinterest');

//Prevent basic click behavior
$( ".sharer button" ).click(function() {
  event.preventDefault();
});


});