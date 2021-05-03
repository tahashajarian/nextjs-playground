export function checkMelliCode(code: any) {
  if (!code || !/^[0-9]{10}$/.test(code)) return false;
  const factors = [10, 9, 8, 7, 6, 5, 4, 3, 2, 0, 0];
  const digits = Array.from(code).map((c: any) => +c);
  if (new RegExp(`^[${digits[0]}]+$`).test(code)) return false;
  const sumDigits = digits
    .map((digit, idx) => digit * factors[idx])
    .reduce((a, b) => a + b, 0);
  const digitForControl: any = digits[digits.length - 1];
  const r: any = sumDigits - parseInt((sumDigits / 11).toString()) * 11;
  return r <= 1 ? r === digitForControl : digitForControl === 11 - r;
}

export function checkMelliShenase(code: any) {
  return code.toString().length === 11 ? true : false;
}

export const withSeparator = (number: any) => {
  if (number) {
    return number
      .toString()
      .split(",")
      .join("")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return number;
};

export const removeSeparator = (number: any) => {
  if (number) {
    return number.toString().split(",").join("").trim();
  }
  return number;
};

export const checkNumber = (e) => {
  console.log(removeSeparator(e.target.value));
  return false;

  // if (isNaN(input)) return false;
  // else return input;
};

export const filterNumbers = (number) => {
  number = removeSeparator(number);
  if (number && isNaN(number) && number !== "-") {
    const arr = number.split("");
    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (isNaN(char) || char === " ") {
        if (i === 0 && char === "-") {
        } else {
          arr.splice(i, 1);
        }
      }
    }
    // arr.pop();
    number = arr.join("");
    return number;
  }
  return number;
};

export const checkEmail = (email) => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const checkMobile = (mobile) => {
  // const mobile = parseInt(mobile) 09216317519
  if (parseInt(mobile) >= 9000000000 && parseInt(mobile) <= 9999999999)
    return true;
  return false;
};

export const checkPassword = (pass: string) => {
  const hasUpperCase = /[A-Z]/.test(pass);
  const hasLowerCase = /[a-z]/.test(pass);
  const hasNumbers = /\d/.test(pass);
  // const hasNonalphas = /\W/.test(pass);
  const goodLength = pass.length > 7 && pass.length < 33;
  if ((goodLength && (hasLowerCase || hasUpperCase) && hasNumbers) || !pass) {
    return true;
  } else {
    return false;
  }
};

export const convertToBullet = (pass) => {
  if (pass) {
    let convertedPass = "";
    for (let i = 0; i < pass.length; i++) {
      convertedPass += "•";
    }
    return convertedPass;
  } else {
    return "";
  }
};
