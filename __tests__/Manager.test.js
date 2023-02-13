const Manager = require('../lib/Manager');

test('create a new Manager object', () => {
    let manager = new Manager('Genesis', '18', 'gnsis1812@email.com', '1');
    expect(manager.name).toBe('Genesis');
    expect(manager.id).toBe('18');
    expect(manager.email).toBe('gnsis1812@email.com');
    expect(manager.officeNumber).toBe('1')
})