
  $(document).ready(function(){

  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('header').addClass('header2');
    } else {
      $('header').removeClass('header2');
    }
  });

});



  let products=[];
let total=0;

function add(product, price){
	console.log(product, price);
	products.push(products);
	total= total+price;
	document.getElementById("checkout").innerHTML='Pagar $${total}';
}
function pay(){
	window.alert(product.join(", \n"));
}