import '@testing-library/jest-dom/vitest';

// jsdom não implementa alguns APIs comuns do browser que seus hooks usam.
// Esses mocks evitam que os testes falhem antes de chegar na asserção.
beforeAll(() => {
  if (typeof window.requestAnimationFrame === 'undefined') {
    window.requestAnimationFrame = (cb: FrameRequestCallback) => {
      return window.setTimeout(() => cb(performance.now()), 0);
    };
  }

  if (typeof window.cancelAnimationFrame === 'undefined') {
    window.cancelAnimationFrame = (id: number) => {
      window.clearTimeout(id);
    };
  }

  if (typeof window.IntersectionObserver === 'undefined') {
    class IntersectionObserverMock {
      constructor(
        _callback: IntersectionObserverCallback,
        _options?: IntersectionObserverInit,
      ) {}

      observe() {}
      unobserve() {}
      disconnect() {}
    }

    window.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
  }
});

