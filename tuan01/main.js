
function calculateTip(billValue) {
    
    const tip = (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.20;

    const totalValue = billValue + tip;
    
    console.log(`The bill was ${billValue}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
}


const billValues = [275, 40, 430];

billValues.forEach(bill => calculateTip(bill));




