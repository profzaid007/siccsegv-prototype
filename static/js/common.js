var stripe=Stripe(public_key);$("#checkout-consult").click(function(){fetch('/api/mobsf_consult',{method:'POST',}).then(function(response){return response.json();}).then(function(session){return stripe.redirectToCheckout({sessionId:session.id});}).then(function(result){if(result.error){Swal.fire({title:'Error!',text:result.error.message,icon:'error',confirmButtonText:'Ok'})}}).catch(function(error){console.error('Error:',error);});});function processDonation(amount){var currency=$("select#currency option:checked").val();fetch('/api/donate',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded',},body:'currency='+currency+'&amount='+amount,}).then(function(response){return response.json();}).then(function(session){return stripe.redirectToCheckout({sessionId:session.id});}).then(function(result){if(result.error){Swal.fire({title:'Error!',text:result.error.message,icon:'error',confirmButtonText:'Ok'})}}).catch(function(error){console.error('Error:',error);});}
$(document).ready(function(){if(typeof currencies!=='undefined'){currencies.forEach(cur=>$("#currency").append(new Option(cur.toUpperCase(),cur)));$('select option:contains("USD")').prop('selected',true);}});$('#currency').change(function(){var currency=$(this).find("option:selected").attr('value');switch(currency){case 'usd':$('#t1').text('$10')
$('#t2').text('$20')
$('#t3').text('$50')
$('#t4').text('$100')
$('#t5').text('$500')
$('#t6').text('$1000')
break;case 'cad':$('#t1').text('CA$10')
$('#t2').text('CA$20')
$('#t3').text('CA$50')
$('#t4').text('CA$100')
$('#t5').text('CA$500')
$('#t6').text('CA$1000')
break;case 'aud':$('#t1').text('A$10')
$('#t2').text('A$20')
$('#t3').text('A$50')
$('#t4').text('A$100')
$('#t5').text('A$500')
$('#t6').text('A$1000')
break;case 'nzd':$('#t1').text('NZ$10')
$('#t2').text('NZ$20')
$('#t3').text('NZ$50')
$('#t4').text('NZ$100')
$('#t5').text('NZ$500')
$('#t6').text('NZ$1000')
break;case 'eur':$('#t1').text('€10')
$('#t2').text('€20')
$('#t3').text('€50')
$('#t4').text('€100')
$('#t5').text('€500')
$('#t6').text('€1000')
break;case 'inr':$('#t1').text('₹250')
$('#t2').text('₹500')
$('#t3').text('₹750')
$('#t4').text('₹1000')
$('#t5').text('₹2500')
$('#t6').text('₹5000')
break;case 'gbp':$('#t1').text('£10')
$('#t2').text('£20')
$('#t3').text('£50')
$('#t4').text('£100')
$('#t5').text('£500')
$('#t6').text('£1000')
break;case 'chf':$('#t1').text('CHF10')
$('#t2').text('CHF20')
$('#t3').text('CHF50')
$('#t4').text('CHF100')
$('#t5').text('CHF500')
$('#t6').text('CHF1000')
break;case 'cny':$('#t1').text('¥25')
$('#t2').text('¥50')
$('#t3').text('¥100')
$('#t4').text('¥250')
$('#t5').text('¥500')
$('#t6').text('¥1000')
break;case 'aed':$('#t1').text('د.إ0')
$('#t2').text('د.إ50')
$('#t3').text('د.إ100')
$('#t4').text('د.إ250')
$('#t5').text('د.إ500')
$('#t6').text('د.إ1000')
break;default:break;}});var fields=['#t1','#t2','#t3','#t4','#t5','#t6'];fields.forEach(field=>$(field).click(function(){var amount=$(field).text().match(/\d+/)
processDonation(amount)}));$("#donate").click(function(){var amount=$('#custom').val();processDonation(amount);});$(document).ready(function(){if(window.location.hash==='#success'){Swal.fire({title:'Success!',text:'Transaction confirmed! We will reachout to the email provided within 2-4 business days.',icon:'success',confirmButtonText:'Ok'})}else if(window.location.hash==='#thanks'){Swal.fire({title:'Success!',text:'Thank you for supporting MobSF ❤️!',icon:'success',confirmButtonText:'Ok'})}else if(window.location.hash==='#cancel'){Swal.fire({title:'Error!',text:'Transaction Failed. Please try again!',icon:'error',confirmButtonText:'Ok'})}});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-57047568-1',{'allowAnchor':true});ga('send','pageview',{'page':location.pathname+location.search+location.hash});if("onhashchange"in window)
window.onhashchange=function(){ga('send','pageview',{'page':location.pathname+location.search+location.hash});}