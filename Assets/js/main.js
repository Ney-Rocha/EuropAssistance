$(document).ready(function(){
    
    
    $('.targetbar').each(function () {
        $(this).find('.targetbar-bar').animate({
            width: $(this).attr('data-percent')+"%"
        }, 2000);
       
    });


    $('#type-account').click(function(){
        var radio =$('input[name="account"]:checked').val()
        if(radio == 'pjYes'){
            $('#formPj').removeClass('form-block')
            $('#owner').removeAttr('hidden', 'true')
            $('#responsible').attr('hidden', 'true')
            
        } else if(radio == 'pjNo'){
            $('#owner').attr('hidden', 'true')
            $('#responsible').removeAttr('hidden')
        }
    })
    
})


document.querySelector('#arquivo').addEventListener('change', function(){
    document.querySelector('#textFile').textContent =this.files[0].name
})

// maskara de telefone
// var CelMaskBehavior = function (val) {
//     return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
// },
//     spOptions = {
//         onKeyPress: function (val, e, field, options) {
//             field.mask(CelMaskBehavior.apply({}, arguments), options);
//     }
// };

// $('.celphones').mask(CelMaskBehavior, spOptions);

// var options =  {
//     onKeyPress: function(cep, e, field, options) {
//       var masks = ['00000-000', '00000-000'];
//       var mask = (cep.length>7) ? masks[1] : masks[0];
//       $('.crazy_cep').mask(mask, options);
//   }};
  
//   $('.crazy_cep').mask('00000-000', options);


