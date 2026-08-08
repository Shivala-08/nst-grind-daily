const isPasswordValid = function(password) {
    // Check if the password is at least 8 characters long
    const isLongEnough = password.length >= 8;
    
    // Check if it contains at least one number (0-9)
    const hasNumber = /[0-9]/.test(password);
    
    // Check if it contains at least one letter (a-z or A-Z)
    const hasLetter = /[a-zA-Z]/.test(password);
    
    // Return true only if all conditions are met
    return isLongEnough && hasNumber && hasLetter;
};