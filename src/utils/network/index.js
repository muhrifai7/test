import NetInfo from '@react-native-community/netinfo';
export const NetworkUtils = async () => {
  const response = await NetInfo.fetch();
  return response.isConnected;
};
