export function isEmail(v) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v)
}
export function isPhoneNumber(v) {
  return /^1[3,4578][0-9]{9}$/.test(v)
}