export const parseEnv = () => {
  const keyword = "RSS_";

  let count = 1;

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith(keyword)) {
      const indexCount = `RSS_name${count}`;
      console.log(`${indexCount}=${value}`);
      count++;
    }
  });
};

parseEnv();
