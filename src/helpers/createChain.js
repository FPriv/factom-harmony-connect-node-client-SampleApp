import { base64encode, base64decode } from 'nodejs-base64';

export function createChain(externalIds, content, callback) {
  var HarmonyConnectClient = require('harmony-connect-client');
  var defaultClient = HarmonyConnectClient.ApiClient.instance;
  
  // Configure API key authorization: AppId
  var AppId = defaultClient.authentications['AppId'];
  AppId.apiKey = process.env.REACT_APP_HARMONY_APPLICATION_ID;
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //AppId.apiKeyPrefix = 'Token';
  
  // Configure API key authorization: AppKey
  var AppKey = defaultClient.authentications['AppKey'];
  AppKey.apiKey = process.env.REACT_APP_HARMONY_APPLICATION_KEY;
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //AppKey.apiKeyPrefix = 'Token';

  let encodedExternalIds = externalIds.map(entry => base64encode(entry));
  console.log("ENCODED IDS", encodedExternalIds);
  let encodedContent = base64encode(content);
  console.log("ENCODED CONTENT", encodedContent);

  var apiInstance = new HarmonyConnectClient.ChainsApi();
  var chainCreate = new HarmonyConnectClient.ChainCreate(encodedExternalIds, encodedContent); // ChainCreate | 

  apiInstance.postChain(chainCreate, callback);
};