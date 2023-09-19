export const LoginOptions = {
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
};
