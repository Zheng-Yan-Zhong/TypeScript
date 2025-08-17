interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

const fn1: GenericIdentityFn = identity;
