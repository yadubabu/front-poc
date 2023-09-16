export const registerOptions = {
  name: {
    required: "Name is required",
  },
  email: {
    required: "Email is Required",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Pattern should be test@test.com",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password not less than 6 characters",
    },
    maxLength: {
      value: 10,
      message: "Password not more than 10 characters",
    },
  },
  confirmpassword: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password not less than 6 characters",
    },
    maxLength: {
      value: 10,
      message: "Password not more than 10 characters",
    },
  },
  pancard: {
    required: "Pancard is required",
  },
  phone: {
    required: "Phone is required",
    minLength: {
      value: 10,
      message: "Not less than 10 numbers",
    },
    maxLength: {
      value: 10,
      message: "Not more than 10 numbers",
    },
  },
};
