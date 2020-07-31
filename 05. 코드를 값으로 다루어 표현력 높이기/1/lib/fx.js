const log = console.log;


// curry : 함수를 받아서 함수를 리턴. 리턴된 함수에서는 사용할 인자들을 대신해서 받게 됨 
// length가 있다면( 인자가 2개 이상이라면) 받아둔 함수를 즉시 실행 , 없다면 다시한번 함수를 리턴 
const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
