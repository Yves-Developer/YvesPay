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
      name: 'zipFile',
      title: 'Ebbok ZIP File',
      type: 'file', // Type set to 'file' for any file type
      options: {
        accept: '.zip', // Restrict file selection to ZIP files only
      },
    },
    {
      name: 'priceId',
      type: 'string',
      title: 'Price ID',
    },
  ],
}
