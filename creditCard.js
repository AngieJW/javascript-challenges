// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
  //   keep the 4 last digits
    const digits = cc.slice(-4);
  //   replace all the string characters by the # and lose the 4 first
    const masked = cc.replaceAll(/./g, '#').substring(4)
  //   add the digits to the string of #
    return masked + digits
  }
