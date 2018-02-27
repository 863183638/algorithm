export default function(ints,s) {
    let obj = {};
    for(let i = 0;i < ints.length; i++) {
      if(obj[s-ints[i]]) return [s-ints[i],ints[i]];
      obj[ints[i]] = true;
    }
}