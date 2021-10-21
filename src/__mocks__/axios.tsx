const mockAxios = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  put: jest.fn(() => Promise.resolve({ data: {} })),
  create: () => mockAxios,
  defaults: {
    adapter: {},
  },
  interceptors: {
    request: {
      use: jest.fn(),
    },
  },
};

export default mockAxios;
