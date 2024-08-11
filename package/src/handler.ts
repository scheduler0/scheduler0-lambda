import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Your lambda logic here
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from Lambda!' }),
    };
};
