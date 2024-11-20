export default {
  name: 'transaction',
  title: 'Transaction',
  type: 'document',
  fields: [
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
    },
    {
      name: 'userEmail',
      title: 'User Email',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'string',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'transactionDetails',
      title: 'Transaction Details',
      type: 'string',
      fields: [
        {
          name: 'rawData',
          title: 'Raw Data',
          type: 'text',
        },
      ],
    },
  ],
}
