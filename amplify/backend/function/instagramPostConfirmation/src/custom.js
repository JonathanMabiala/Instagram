/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log('Hey lambda function is working');
  console.log(event);
  return event;
};
