const Intern = require('../lib/Intern');

test('create a new Intern object', () => {
    let intern = new Intern('juana', '15', 'juanafirelis@email.com', 'pucmm');
    expect(intern.name).toBe('juana');
    expect(intern.id).toBe('15');
    expect(intern.email).toBe('juanafirelis@email.com');
    expect(intern.school).toBe('pucmm')
})