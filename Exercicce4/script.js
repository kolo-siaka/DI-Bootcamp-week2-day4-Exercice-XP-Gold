//Omnipresent Value

function isOmnipresent(arr, val) {
  for (const sub of arr) {
    if (!sub.includes(val)) {
      return false;
    }
  }
  return true;
}
