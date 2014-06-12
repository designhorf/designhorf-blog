$(document).ready(function() {
   $('#language').click(function() {
       $('h1').hide().text('Notting Hill Karnevál').show();
       $('#szoveg').hide().text('Súlyos közlekedési baleset történt pénteken este hat óra környékén az A4-es autópályán 
       	- írja a Kisalföld.hu. Egy Ford kisbuszban hét magyar utazott, amikor Gálos (Gols) térségében összeütköztek egy 
       	román kamionnal. A teherautó száz méteren keresztül húzta maga után a pótkocsiba beakadt járművet. Három utas a 
       	helyszínen életét veszítette, három embert pedig a kismartoni (Eisenstadt) kórházba szállítottak. A kamion 
       	sofőrje nem sérült meg.').show();
       /*$('#3').hide().text('három').show();
       $('#4').hide().text('négy').addClass("updatedContent").show();*/
   }); 
});