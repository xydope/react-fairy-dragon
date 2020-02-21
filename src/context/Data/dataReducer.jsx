
const handlers = {
    DEFAULT: (state) => state
}

export default (state, action) => {
    const handle = handlers[action.type || 'DEFAULT'];
    return handle(state, action);
};