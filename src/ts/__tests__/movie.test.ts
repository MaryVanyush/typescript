import Movie from "../movie";

test('check clase Movie', () => {
  const received = new Movie(18, 'Мстители', true, 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], ['137 мин', '02:17']);
  const expected = {
        id: 18,
        name: 'Мстители',
        onlyOne: true,
        nameInEnglish: 'The Avengers',
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: [ 'фантастика', 'боевик', 'фэнтези', 'приключения' ],
        time: [ '137 мин', '02:17' ]
    };
  expect(received).toEqual(expected);
});
