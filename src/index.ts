import { object, string } from "yup";

export const userRegistrationSchema = object({
  username: string().min(3).required(),
  email: string().email().required(),
  password: string().min(3).required(),
});

export const userLoginSchema = object({
  usernameOrEmail: string()
    .required()
    .test(
      "usernameOrEmail",
      "please enter valid username or email",
      (value) => {
        if (value.includes("@.com")) {
          return true;
        } else return value.length > 3;
      }
    ),
  password: string().min(3).required(),
});

// const validate = async () => {
//   try {
//     await userLoginSchema.validate(
//       {
//         usernameOrEmail: "asasa@.com",
//         password: "hem",
//       },
//       { abortEarly: false }
//     );
//   } catch (err) {
//     console.log(err.inner);
//   }
// };
//
// validate();
