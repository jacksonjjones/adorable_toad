// This function validates an email address using a regular expression.
function validateEmail(email) {
  // Regular expression pattern for validating email addresses
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Testing if the provided email matches the regular expression pattern
  return re.test(String(email).toLowerCase());
}
// Exporting the validateEmail function to be used in other files
export default validateEmail;
