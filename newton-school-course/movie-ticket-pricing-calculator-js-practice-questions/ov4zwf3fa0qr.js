function calculateTotalCost(basePrice, weekendSurcharge, imaxFee, bookingFee) {
    let oneTicketCost = basePrice + weekendSurcharge + imaxFee + bookingFee;
    let totalCostForFour = oneTicketCost * 4;
    let discount = totalCostForFour * 0.15;
    let finalAmount = totalCostForFour - discount;
    
    console.log(`Total cost for 4 tickets: ₹${finalAmount}`);
}