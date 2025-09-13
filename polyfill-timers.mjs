if (typeof globalThis !== 'undefined') {
  const originalSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = (fn, delay, ...args) => {
    const wrappedFn = typeof fn === 'function' ? fn : () => {};
    const timer = originalSetTimeout(wrappedFn, delay, ...args);
    if (!timer._onTimeout) timer._onTimeout = wrappedFn;
    return timer;
  };

  const originalSetInterval = globalThis.setInterval;
  globalThis.setInterval = (fn, delay, ...args) => {
    const wrappedFn = typeof fn === 'function' ? fn : () => {};
    const timer = originalSetInterval(wrappedFn, delay, ...args);
    if (!timer._onTimeout) timer._onTimeout = wrappedFn;
    return timer;
  };
}
