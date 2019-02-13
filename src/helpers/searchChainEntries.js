

export function searchChainEntries(id, callback) {
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
  
  var apiInstance = new HarmonyConnectClient.EntriesApi();
  var chainId = id; // String | Chain identifier

  apiInstance.getEntriesByChainID(id, null, callback);
};