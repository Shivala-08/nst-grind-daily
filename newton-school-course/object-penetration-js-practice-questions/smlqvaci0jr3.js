function objPenetration(data) {
  // Navigate through the nested object properties to return the pincode
  return data.user.profile.details.address.pincode;
}