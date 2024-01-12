export const maskSsn = (number: string) => {
  let numLength = number.length;
  let numArray = [];
  for (let i = 0; i < numLength; i++) {
    if (i < 5) {
      numArray[i] = number[i].replace(/^(\d+|-)$/, '*');
    } else {
      numArray[i] = number[i];
    }
  }

  let fullNumber = '';
  for (let i = 0; i < numLength; i++) {
    fullNumber += numArray[i];
  }
  return fullNumber;
};

export const formatSsn = (value: string) => {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const ssn = value.replace(/[^\d|*|-]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const ssnLength = ssn.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (ssnLength < 4) return ssn;

  if (ssnLength < 6) {
    return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
  }

  return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5)}`;
};
