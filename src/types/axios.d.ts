type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchErrorResponse {
  errorCode: string;
  statusCode: number;
  timestamp: string;
  path: string;
}

interface FetchSuccessResponse {
  data: any;
  statusCode: number;
}
