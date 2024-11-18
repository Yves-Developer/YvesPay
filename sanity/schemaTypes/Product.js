export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'keyword',
      type: 'string',
      title: 'Product Keyword',
    },
    {
      name: 'image',
      type: 'array',
      title: 'Product Image',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Product Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'priceId',
      type: 'string',
      title: 'Price ID',
    },
  ],
}
