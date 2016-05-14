/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// trigger to  change language
$(document).on('click','#lang_change li', function(e) {
    e.preventDefault();

    var html_ = $(this).find("a").html();
    var img_ = html_.substring(0,html_.indexOf(">")+1);
    var label_ = html_.substring(html_.indexOf(">")+1);

    // coloca a escolha como posição ativa
    var link_ = $(this).parents("li").find("a.dropdown-toggle");
    link_.html('&nbsp;' + img_ + '<span>&nbsp;'+label_+'&nbsp;</span>'+
               '<i class="fa fa-angle-down"></i>');
    
    // remover a classe active
    link_ = $(this).parents("li").find("li").removeClass("active");
    
    // adicionar a classe active à escolha corrente
    link_ = $(this).addClass("active");
    

    
    lang_ = $(this).find("img").attr("class");
    lang_ = lang_.substr(lang_.indexOf("-")+1);
    
//    alert("lang:"+lang_)

});
