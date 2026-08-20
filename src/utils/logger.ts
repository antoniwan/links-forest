import debug from 'debug';

// Create debug instances for different parts of the application
export const configLogger = debug('links-forest:config');
export const pageLogger = debug('links-forest:page');
export const dataLogger = debug('links-forest:data');

// Enable debug logging in the terminal during `astro dev`, not in the browser.
if (import.meta.env.DEV && import.meta.env.SSR) {
  debug.enable('links-forest:*');
}

// Helper function to log data loading
export const logDataLoading = (dataName: string) => {
  dataLogger(`Loading data: ${dataName}`);
  return () => {
    dataLogger(`Data loaded: ${dataName}`);
  };
};
