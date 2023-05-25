import Book from "../book";

test('check clase Book', () => {
    const received = new Book(12, 'test', true, 100, 10);
    const expected = {
        id: 12,
        name: 'test',
        onlyOne: true,
        price: 100,
        discount: 10
    };
    expect(received).toEqual(expected);
});
