import Joi from 'joi';

// Define Joi schema for UserName
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .custom((value, helpers) => {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      if (value !== firstNameStr) {
        return helpers.error('any.invalid', { value });
      }
      return value;
    }, 'Capitalization validation')
    .messages({
      'any.required': 'First name is required',
      'string.max': 'First name cannot be more than 20 characters',
      'any.invalid': '{#value} is not in capitalized format',
    }),
  middleName: Joi.string().trim().allow(''),
  lastName: Joi.string()
    .trim()
    .required()
    .alphanum()
    .messages({
      'any.required': 'Last name is required',
      'string.alphanum': '{#value} is not valid',
    }),
});

// Define Joi schema for Guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'any.required': 'Father name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': 'Father contact number is required',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': 'Mother contact number is required',
  }),
});

// Define Joi schema for LocalGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'any.required': 'Local guardian name is required',
  }),
  occupation: Joi.string().required().messages({
    'any.required': 'Local guardian occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Local guardian contact number is required',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Local guardian address is required',
  }),
});

// Define Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'any.required': 'Gender is required',
      'any.only': 'The gender field can only be one of the following: male, female, or other.',
    }),
  dateOfBirth: Joi.string().allow(''), // Not required
  email: Joi.string()
    .trim()
    .email()
    .required()
    .messages({
      'any.required': 'Email is required',
      'string.email': '{#value} is not a valid email type.',
    }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required',
  }),
  profileImg: Joi.string().allow(''), // Not required
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': 'The isActive field can only be active or blocked.',
    }),
});

export default studentValidationSchema;