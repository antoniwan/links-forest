import debug from "debug";

// Create debug instances for different parts of the application
export const configLogger = debug("links-forest:config");
export const layoutLogger = debug("links-forest:layout");
export const pageLogger = debug("links-forest:page");
export const componentLogger = debug("links-forest:component");
export const dataLogger = debug("links-forest:data");

// Enable debug logging in development
if (import.meta.env.DEV) {
  debug.enable("links-forest:*");
}

// Helper function to log component lifecycle
export const logComponentLifecycle = (componentName: string) => {
  componentLogger(`Component ${componentName} mounted`);
  return () => {
    componentLogger(`Component ${componentName} unmounted`);
  };
};

// Helper function to log data loading
export const logDataLoading = (dataName: string) => {
  dataLogger(`Loading data: ${dataName}`);
  return () => {
    dataLogger(`Data loaded: ${dataName}`);
  };
};
