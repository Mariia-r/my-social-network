export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator  = (maxLength) => (value) => {
    if (value.length > maxLength) return `Must be ${maxLength} characters or less`;
    return undefined;
}

export const maxLength10 = maxLengthCreator(10);
export const maxLength30 = maxLengthCreator(30);
export const maxLength100 = maxLengthCreator(100);