import * as Keychain from 'react-native-keychain';

const Storage = {
  /**
   * Store data securely using react-native-keychain
   * @param {string} key
   * @param {any} value
   */
  async setData(key, value) {
    try {
      await Keychain.setGenericPassword(key, JSON.stringify(value), {
        service: key,
      });
    } catch (error) {
      console.error('Error saving data with Keychain:', error);
    }
  },

  /**
   * Retrieve data securely using react-native-keychain
   * @param {string} key
   * @returns {any|null}
   */
  async getData(key) {
    try {
      const credentials = await Keychain.getGenericPassword({ service: key });
      if (credentials) {
        return JSON.parse(credentials.password);
      }
      return null;
    } catch (error) {
      console.error('Error getting data from Keychain:', error);
      return null;
    }
  },

  /**
   * Clear attempt data securely using react-native-keychain
   * @param {string} key
   */
  async clearAttemptData(key) {
    try {
      await Keychain.resetGenericPassword({ service: key });
    } catch (error) {
      console.error('Error clearing attempt data from Keychain:', error);
    }
  },

  /**
   * Clear data securely using react-native-keychain
   * @param {string} key
   */
  async clearData(key) {
    try {
      await Keychain.resetGenericPassword({ service: key });
    } catch (error) {
      console.error('Error clearing data from Keychain:', error);
    }
  },
};

export default Storage;
