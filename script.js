

document.getElementById('iphone-plus').addEventListener('click', function()
{
    let iphoneNumber = parseFloat(document.getElementById('number-of-iphone').value);
    iphoneNumber++;

    let finalAmount = 1219*iphoneNumber;
    
    
    
    document.getElementById('number-of-iphone').value = iphoneNumber;
    document.getElementById('per-amount').innerText = finalAmount;
    calculateSubtoal();


});
document.getElementById('iphone-minus').addEventListener('click', function()
{
    let iphoneNumber = parseFloat(document.getElementById('number-of-iphone').value);
    
    let finalAmount;

    if (iphoneNumber > 0) {
        iphoneNumber--;
        finalAmount = 1219* iphoneNumber;
        
    }else{ iphoneNumber=0; finalAmount=0;  }
    

    document.getElementById('number-of-iphone').value = iphoneNumber;
    document.getElementById('per-amount').innerText = finalAmount;
    calculateSubtoal();
    


});

document.getElementById('casing-plus').addEventListener('click', function(){

    let casingNumber = parseFloat(document.getElementById('casing-number').value);
    casingNumber++;
    let finalAmount = casingNumber*59;
    document.getElementById('casing-number').value = casingNumber;
    document.getElementById('casing-price').innerText = finalAmount;
    calculateSubtoal();

});
document.getElementById('casing-minus').addEventListener('click',function()
{
    let casingNumber = parseFloat(document.getElementById('casing-number').value);
    let finalAmount;
    if(casingNumber>0){ casingNumber--; finalAmount = casingNumber*59; }else
    { casingNumber =0; finalAmount = 0;  }

    document.getElementById('casing-number').value = casingNumber;
    document.getElementById('casing-price').innerText = finalAmount;
    calculateSubtoal();
});


function calculateSubtoal(){
    let iphoneFinalAmount = parseFloat(document.getElementById('per-amount').innerText);
    let casingFinalAmount = parseFloat(document.getElementById('casing-price').innerText);
    //let currentSubtotal = parseFloat(document.getElementById('sub-total').innerText);

    let subtotal = iphoneFinalAmount + casingFinalAmount;
    

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('total').innerText = subtotal;
}