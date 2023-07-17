export const capitalize = (input) => {
    // todo: build this function
    // `capitalize("jOn")` should output `"Jon"`
    if (typeof input !== 'string') {
        return null
    } else if (input.length === 0) {
        return input
    } else {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}

export const formatPhoneNumber = (phoneNumber) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  if (!phoneNumber || phoneNumber.length < 2) {
    return phoneNumber; // Return original value if invalid
  }
  const firstPart = phoneNumber.slice(0, 1);
  const secondPart = phoneNumber.slice(1, 2);
  const thirdPart = phoneNumber.slice(2, 3);
  const fourthPart = phoneNumber.slice(3);
  return `${firstPart}-${secondPart}-${thirdPart}-${fourthPart}`;
}