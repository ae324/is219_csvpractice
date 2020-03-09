const Crimes = require('../Models/crimes')

test('Can create a crime object', () => {
    let Crimes = new Crimes();
    expect(crimes).toBeInstanceOf(Crimes);
});

