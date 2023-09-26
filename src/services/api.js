// /* eslint-disable no-param-reassign */

// const getStatusPayment = async (responsePayment) => {
//   const { data } = await api.get(`v1/payments/${responsePayment.data.id}`);
//   if (data.status === 'approved') {
//     return true;
//   }

//   return false;
// };

// const getPaymentMethods = async () => {
//   api.get('v1/payment_methods').then((response) => {
//     console.log(response);
//   });
// };

// const postPayment = (body) => {
//   api.post('v1/payments', body).then((response) => {
//     console.log(response.data);
//   }).catch((err) => {
//     // eslint-disable-next-line no-alert
//     alert(err);
//   });
// };

// export { getStatusPayment, postPayment, getPaymentMethods };
