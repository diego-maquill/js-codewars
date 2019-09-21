/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.
*/

const complexFunction = function(arg1, arg2) { return arg1+arg2; };

function cache(func) {
  let cache = {};
  return (...args) => {
    let arg1 = args[0];
    let arg2 = args[1];

    // Use JSON.stringify on the arguments to create a cache key
    let cache_key = JSON.stringify(args);;

    // console.log('CACHE_KEY: '+cache_key);
    // console.log(cache);
    // If cache key is present in cache, retrieve the value of the cache key
    if (cache_key in cache) {
      console.log('Fetching from cache');
      return cache[cache_key];
    }
    // Otherwise, calculate the result of the complex function by calling it
    else {
      console.log('Calculating result');
      cache[cache_key] = func(arg1,arg2);
      return cache[cache_key];
    }
  }
}

const cachedFunction = cache(complexFunction);
console.log( cachedFunction('foo', 'bar') ); // complex function should be executed
console.log( cachedFunction('foo', 'bar') ); // complex function should not be invoked again, instead the cached result should be returned
console.log( cachedFunction('foo', 'baz') ); // should be executed, because the method wasn't invoked before with these arguments
console.log( cachedFunction() );
console.log( cachedFunction('367177654', undefined) );
console.log( cachedFunction({ foo: 'foo', bar: 'bar' }, { baz: 'baz' }) );