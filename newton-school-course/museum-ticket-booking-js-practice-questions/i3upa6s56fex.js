function calculateTicketPrice(age, isWeekend, hasStudentCard) {
  let price = 12; // Base price

  if (age < 12) {
    price -= 5; // Age Discount
  }

  if (isWeekend) {
    price += 3; // Weekend Markup
  }

  if (hasStudentCard) {
    price -= 2; // Student Discount
  }

  return price;
}