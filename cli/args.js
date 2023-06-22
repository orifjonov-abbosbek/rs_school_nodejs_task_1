const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};

  let propName = null;

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      propName = arg.substring(2);
    } else if (propName !== null) {
      parsedArgs[propName] = arg;
      propName = null;
    }
  });

  Object.entries(parsedArgs).forEach(([propName, propValue]) => {
    console.log(`${propName} is ${propValue}`);
  });
};

parseArgs();
