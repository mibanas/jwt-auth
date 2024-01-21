// Swagger definition for register operation
const registerUser = {
  tags: ['Authentification'],
  description: 'Register a new user in the system',
  operationId: 'registerUser',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            userName: { type: 'string' },
            password: { type: 'string' },
            completName: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string' },
          },
          required: ['userName', 'password', 'completName', 'email', 'role'],
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'User registered successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: { type: 'boolean', example: true },
              message: { type: 'string', example: 'Registration successful.' },
              user: { type: 'object' }, // Update this based on your user model
            },
          },
        },
      },
    },
    '400': {
      description: 'Bad Request - Username already exists or invalid data',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: { type: 'boolean', example: false },
              message: { type: 'string', example: 'Username already exists.' },
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: { type: 'boolean', example: false },
              message: { type: 'string', example: 'Internal Server Error' },
              error: { type: 'string' },
            },
          },
        },
      },
    },
  },
};


// Rest of your code...



// Swagger definition for login operation
const loginUser = {
  tags: ['Authentification'],
  description: 'Authenticate a user and generate a token',
  operationId: 'loginUser',
  requestBody: {},
  responses: {
    '200': {
      description: 'User authenticated successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: {
                type: 'boolean',
                example: true,
              },
              message: {
                type: 'string',
                example: 'User is authenticated',
              },
              user: {
                type: 'string',
                example: 'john_doe',
              },
              token: {
                type: 'string',
                example: 'your_generated_token_here',
              },
            },
          },
        },
      },
    },
    '400': {
      description: 'Bad Request - Email or password is wrong',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: {
                type: 'boolean',
                example: false,
              },
              message: {
                type: 'string',
                example: 'Email or password is wrong!',
              },
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: {
                type: 'boolean',
                example: false,
              },
              message: {
                type: 'string',
                example: 'Internal Server Error',
              },
            },
          },
        },
      },
    },
  },
};



export { registerUser, loginUser };
