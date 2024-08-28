const AWS = require('aws-sdk');
const moment = require('moment');

async function getAWSJPYCost() {
  const now = moment()
  const start = now.format('YYYY-MM-01')
  const end = now.add(1, 'months').format('YYYY-MM-01')

  const costExplorer = new AWS.CostExplorer({ region: 'ap-northeast-1' })
  const params = {
      TimePeriod: {
          Start: start,
          End: end
      },
      Granularity: 'MONTHLY',
      Metrics: ['UnblendedCost']
  }
  const costAndUsage = await costExplorer.getCostAndUsage(params).promise()
  const usdCost = costAndUsage.ResultsByTime[0].Total.UnblendedCost.Amount
  const exchangeRate = 144.33; // 2024/08/28時点の1ドルの値段
  const jpyCost = usdCost * exchangeRate;

  return jpyCost
}

exports.handler = async (event, context) => {
  const usdCost = await getAWSJPYCost()

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ message: `region: ap-northeast-1のコスト【${usdCost} 円】` }),
  };
}
