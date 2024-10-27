const config = {
  development: {
    apiUrl: "http://localhost:3000/api",
  },
  production: {
    apiUrl: "http://35.173.238.141/api",
  },
};

const getEnvConfig = () => {
  if (import.meta.env.MODE === "production") {
    return config.production;
  }
  return config.development;
};

export default getEnvConfig;
