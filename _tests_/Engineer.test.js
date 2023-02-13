const Engineer = require('../lib/Engineer');

test('create a new Engineer object', () => {
    let engineer = new Engineer('Manuel R', '23', 'mannyrveloz32@email.com', 'mannyrveloz32');
    expect(engineer.name).toBe('Manuel R');
    expect(engineer.id).toBe('23');
    expect(engineer.email).toBe('mannyrveloz23@email.com');
    expect(engineer.github).toBe('mannyrveloz32')

})