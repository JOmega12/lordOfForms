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
    return phoneNumber.replace(/(\d{2})(?=\d{2,})/g, '$1-');
}