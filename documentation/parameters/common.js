module.exports = {
  id: {
    name: 'coinId',
    in: 'path',
    description: 'Id of the currency to add to the user',
    schema: {
      $ref: '#/components/schemas/id',
    },
    required: true,
  },
};
