import dynamicScript from "./dynamicScript";

async function List() {
  let sha512 = await import('module_b/Sha512').then((m) => {
    return m.default;
  }).catch(e => {
    console.log(e);
  });

  let sha224 = await import('@sha/Sha224').then((m) => {
    return m.default;
  });
  let sha384 = await import('@sha/Sha384').then((m) => {
    return m.default;
  });

  return [sha224, sha384, sha512];
}

export default List;