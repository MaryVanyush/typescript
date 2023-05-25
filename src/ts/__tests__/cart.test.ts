import Cart from "../cart";
import Book from "../book";
import Movie from "../movie";

test('check class Cart and method add', () => {
    const received = new Cart();
    received.add({
            id: 11,
            name: 'test',
            onlyOne: false,
            price: 100,
        });
    const expected = [{
        id: 11,
        name: 'test',
        onlyOne: false,
        price: 100,
    }];
    expect(received.items).toEqual(expected);
  });

  test('check method add unicue item ', () => {
    const received = new Cart();
    const item = {
        id: 11,
        name: 'test',
        onlyOne: true,
        price: 100,
    };
    received.add(item);
    received.add(item);
    const expected = [{
        id: 11,
        name: 'test',
        onlyOne: true,
        price: 100,
    }];
    expect(received.items).toEqual(expected);
  });

  test('check method getPrice ', () => {
    const cart = new Cart();
    const movie = new Movie(18, 'Мстители', true, 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], ['137 мин', '02:17']);
    const item = { id: 11, name: 'test', onlyOne: true, price: 100};
    const book = new Book(12, 'test', true, 100, 10);
    cart.add(item);
    cart.add(book);
    cart.add(movie);
    const received = cart.getPrice();
    const expected = 200;
    expect(received).toEqual(expected);
  });

  test('check method getDiscountPrice ', () => {
    const cart = new Cart();
    const item = { id: 11, name: 'test', onlyOne: true, price: 100};
    const book = new Book(12, 'test', true, 100, 10);
    cart.add(item);
    cart.add(book);
    const received = cart.getDiscountPrice(50);
    const expected = 100;
    expect(received).toEqual(expected);
  });

  test('check method deleteItem ', () => {
    const cart = new Cart();
    const item = { id: 11, name: 'test', onlyOne: false, price: 100};
    const book = new Book(12, 'test', true, 100, 10);
    const movie = new Movie(18, 'Мстители', true, 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], ['137 мин', '02:17']);
    cart.add(item);
    cart.add(item);
    cart.add(book);
    cart.add(movie);
    cart.deleteItem(11);
    cart.deleteItem(18);
    const received = cart.items;
    const expected = [
        { id: 11, name: 'test', onlyOne: false, price: 100 },
        {
            id: 12,
            name: 'test',
            onlyOne: true,
            price: 100,
            discount: 10
        }
    ];
    expect(received).toEqual(expected);
});
