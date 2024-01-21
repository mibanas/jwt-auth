const courseModelDefinition = {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      courseName: { type: 'string' },
      courseImage: { type: 'string' },
    },
  };
  
// Swagger definition for get all courses operation
const getAllCourses = {
    tags: ['Courses'],
    description: 'Get all courses',
    operationId: 'getAllCourses',
    responses: {
      '200': {
        description: 'Courses retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                data: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Course' },
                },
              },
            },
          },
        },
      },
      '404': {
        description: 'No courses found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'No courses found.' },
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
  
  // Swagger definition for get course by ID operation
  const getCourseById = {
    tags: ['Courses'],
    description: 'Get course by ID',
    operationId: 'getCourseById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of the course',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      '200': {
        description: 'Course retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                data: { $ref: '#/components/schemas/Course' },
              },
            },
          },
        },
      },
      '404': {
        description: 'Course not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Course not found.' },
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
  
// Swagger definition for addCourse operation
const addCourse = {
    tags: ['Courses'],
    description: 'Add a new course',
    operationId: 'addCourse',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              courseName: { type: 'string' },
            },
            required: ['courseName'],
          },
        },
      },
    },
    responses: {
      '201': {
        description: 'Course added successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                data: courseModelDefinition, // Reference the model definition
              },
            },
          },
        },
      },
      '404': {
        description: 'Courses already in database',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Courses already in database. Please add new courses.' },
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
    
  // Swagger definition for updateCourse operation
const updateCourse = {
    tags: ['Courses'],
    description: 'Update a course by ID',
    operationId: 'updateCourse',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of the course',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              courseName: { type: 'string' },
            },
            required: ['courseName'],
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Course updated successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                data: courseModelDefinition, // Reference the model definition
              },
            },
          },
        },
      },
      '404': {
        description: 'Course not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Course not found.' },
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

  // Swagger definition for deleteCourse operation
const deleteCourse = {
    tags: ['Courses'],
    description: 'Delete a course by ID',
    operationId: 'deleteCourse',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID of the course',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      '200': {
        description: 'Course deleted successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                message: { type: 'string', example: 'Course deleted successfully.' },
                dataDeleted: courseModelDefinition, // Reference the model definition
              },
            },
          },
        },
      },
      '404': {
        description: 'Course not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Course not found.' },
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
  
  
  export { getAllCourses, getCourseById, addCourse, updateCourse, deleteCourse };
  