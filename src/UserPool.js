import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.REACT_APP_COGNITO_UserPoolId,
    ClientId: process.env.REACT_APP_COGNITO_ClientId
}

export default new CognitoUserPool(poolData);
