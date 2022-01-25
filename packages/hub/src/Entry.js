function Entry() {
  import('@sha/Sha224').then((m) => {
    console.log(m);
  });

  return <h1>Entry</h1>
}

export default Entry;