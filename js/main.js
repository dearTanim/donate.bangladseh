
// Get Input Money
function getInputValueById (id){

    const donateMoneyInput = parseFloat(document.getElementById(id).value); 
    return donateMoneyInput;
};

// Get Section balance
function getSecBalance (id){
    
    const secBalance = parseFloat(document.getElementById(id).innerText);
    return secBalance;
};

// Get main balance
function getMainBalance (id){
    
    const mainBalance = parseFloat(document.getElementById(id).innerText);
    return mainBalance;
};

// // showing section
// function showSectionById (id){
//   document.getElementById('donation-content').classList.add('hidden');
//   document.getElementById('history').classList.add('hidden');

//   document.getElementById(id).classList.remove('hidden');
// }