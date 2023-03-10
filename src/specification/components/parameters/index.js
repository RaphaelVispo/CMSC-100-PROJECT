export const parameters = {
  BlogParameterId: {
    name: 'blogId',
    in: 'path',
    required: true,
    description: 'This is the id of the Blog',
    schema: {
      type: 'string'
    }
  },

  CommentParameterId: {
    name: 'commentId',
    in: 'path',
    required: true,
    description: 'This is the id of the Comment',
    schema: {
      type: 'string'
    }
  },
  UserParameterId: {
    name: 'userId',
    in: 'path',
    required: true,
    description: 'This is the id of the user',
    schema: {
      type: 'string'
    }
  }
};
