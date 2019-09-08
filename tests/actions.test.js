import * as actions from '../actions';

test('hello', () => {
    const event = 'event';
    const context = 'context';
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body).toBe("string");
    };

    actions.hello(event, context, callback);
});
