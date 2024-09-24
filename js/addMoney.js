// Section-1
document.getElementById('sec1-donate-btn').addEventListener('click', function(){
      
    const donateMoneyInput = getInputValueById('sec1-amount-input');

    const sec1Balance = getSecBalance('sec1-balance');

    const mainBalance = getMainBalance ('main-balance');

    if( mainBalance < donateMoneyInput || mainBalance < 0 || isNaN(donateMoneyInput) ){
        alert('Please input a valid data')
        return;  
     }

    const sec1NewBalance = donateMoneyInput + sec1Balance;

    document.getElementById('sec1-balance').innerText = sec1NewBalance;
    
    const newMainBalance = mainBalance - donateMoneyInput;

     document.getElementById('main-balance').innerText = newMainBalance;

    //  Modal 
    const modalBalance = donateMoneyInput; 

    if( modalBalance <= 0 || isNaN(modalBalance) ){
        alert('Please input a valid data');
     }
     else{
        document.getElementById('donation-modal').classList.remove('hidden');
     }      

     document.getElementById('modal-balance').innerText = modalBalance; 

     const modalText = document.getElementById('sec1-text').innerText;

     document.getElementById('modal-text').innerText = modalText;

   //Hisory   
    const  historyContent = document.createElement('div')

    historyContent.className ='bg-base-100 p-5 border shadow-md mb-3';

    historyContent.innerHTML = `
     <p class='text-md font-bold mb-1'>${donateMoneyInput+ ' BDT '+ modalText}</p>
     <p>${new Date()}</p>
     `
     const historyContainer = document.getElementById('history-container');

    historyContainer.prepend(historyContent);
});

// Section-2
document.getElementById('sec2-donate-btn').addEventListener('click', function(){
      
    const donateMoneyInput = getInputValueById('sec2-amount-input');

    const sec2Balance = getSecBalance('sec2-balance');

    const mainBalance = getMainBalance ('main-balance');

    if( mainBalance < donateMoneyInput || mainBalance < 0 || isNaN(donateMoneyInput) ){
        alert('Please input a valid data')
        return;   
     };

    const sec2NewBalance = donateMoneyInput + sec2Balance;

    document.getElementById('sec2-balance').innerText = sec2NewBalance;
    
    const newMainBalance = mainBalance -donateMoneyInput;

     document.getElementById('main-balance').innerText = newMainBalance;

    //  Modal      
    const modalBalance = donateMoneyInput; 

    if( modalBalance <= 0 || isNaN(modalBalance) ){
        alert('Please input a valid data');
     }
     else{
        document.getElementById('donation-modal').classList.remove('hidden');
     };

     document.getElementById('modal-balance').innerText = modalBalance; 

     const modalText = document.getElementById('sec2-text').innerText;

     document.getElementById('modal-text').innerText = modalText;

     //Hisory   
    const  historyContent = document.createElement('div')

    historyContent.className ='bg-base-200 p-5 border shadow-md mb-3';

    historyContent.innerHTML = `
     <p class='text-md font-bold mb-1'>${donateMoneyInput+ ' BDT '+ modalText}</p>
     <p>${new Date()}</p>
     `
     const historyContainer = document.getElementById('history-container');

    historyContainer.prepend(historyContent);

});

// Section-3
document.getElementById('sec3-donate-btn').addEventListener('click', function(){
      
    const donateMoneyInput = getInputValueById('sec3-amount-input');

    const sec3Balance = getSecBalance('sec3-balance');

    const mainBalance = getMainBalance ('main-balance');

    if ( mainBalance < donateMoneyInput || mainBalance < 0 || isNaN(donateMoneyInput) ){
        alert('Please input a valid data')
        return;  
     };

    const sec3NewBalance = donateMoneyInput + sec3Balance;

    document.getElementById('sec3-balance').innerText = sec3NewBalance;
    
    const newMainBalance = mainBalance - donateMoneyInput;

     document.getElementById('main-balance').innerText = newMainBalance;

    //  Modal 
         
     const modalBalance = donateMoneyInput;

     if( modalBalance <= 0 || isNaN(modalBalance) ){
        alert('Please input a valid data');
     }
     else{
        document.getElementById('donation-modal').classList.remove('hidden');
     } 

     document.getElementById('modal-balance').innerText = modalBalance; 

     const modalText = document.getElementById('sec3-text').innerText;

     document.getElementById('modal-text').innerText = modalText;

     //Hisory   
    const  historyContent = document.createElement('div')

    historyContent.className ='bg-base-300 p-5 border shadow-md mb-3';

    historyContent.innerHTML = `
     <p class='text-md font-bold mb-1'>${donateMoneyInput+ ' BDT '+ modalText}</p>
     <p>${new Date()}</p>
     `
     const historyContainer = document.getElementById('history-container');

    historyContainer.prepend(historyContent);

});





