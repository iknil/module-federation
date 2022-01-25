async function dynamicScript({ url }) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('Url is empty.'));
    }

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      resolve();
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      reject(new Error('Dynamic Script Error.'));
    };

    document.head.appendChild(element);
  });
}

export default dynamicScript;