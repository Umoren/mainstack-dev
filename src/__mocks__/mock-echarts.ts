export const initMock = jest.fn(() => ({
    setOption: jest.fn(),
    dispose: jest.fn(),
}));

const mock = {
    init: initMock,
};

export default mock;