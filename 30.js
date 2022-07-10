const flip=(d, a)=>{
    const aSorted = a.sort((a,b) => a-b);
    if (d === 'R') {
      return aSorted;
    } else {
    return aSorted.reverse();
      }
  }