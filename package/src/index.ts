import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import handler from './handler';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return await handler(event);
};
