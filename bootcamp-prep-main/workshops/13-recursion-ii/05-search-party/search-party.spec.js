describe('searchParty', () => {
  let simpleWorld = {
    'living room': 'Maureen',
    'kitchen': 'Brian',
    'bedroom': 'Julio'
  };

  let newYorkCity = {
    'Manhattan': {
      'Uptown': {
        'Washington Heights': 'Daniel',
        'UWS': 'Cathy'
      },
      'Midtown': {
        'Madison Square': 'Susan',
        'Theater District': ['Robert', 'Latisha']
      },
      'Downtown': {
        'Tribeca': 'Billy',
        'Financial District': {
          'Fullstack': {
            '11th floor': ['David', 'Nimit'],
            '25th floor': 'Ashi'
          }
        }
      }
    },
    'Brooklyn': {
      'Bushwick': 'Marilyn',
      'Bed-Stuy': ['Juan', 'Denice']
    },
    'Queens': {
      'Astoria': 'Ella',
      'Flushing': 'Eric'
    },
    'Bronx': {
      'Fordham': 'Aaron',
      'Melrose': 'Krysten'
    },
    'Staten Island': {
      'Arlington': ['Nadine', 'Mose'],
      'Elm Park': 'Arthur'
    }
  };

  it('is a function', () => {
    expect(typeof searchParty).toEqual('function');
  });

  it('returns a path to the person if they are found in a simple world', () => {
    let returnedValue = searchParty('Julio', simpleWorld);
    expect(returnedValue).toEqual(['bedroom']);
  });

  it('returns null if they are not found in a simple world', () => {
    let returnedValue = searchParty('Joel', simpleWorld);
    expect(returnedValue).toEqual(null);
  });

  it('returns a path to the person if they are found in a string in New York City', () => {
    let returnedValue = searchParty('Susan', newYorkCity);
    expect(returnedValue).toEqual(['Manhattan', 'Midtown', 'Madison Square']);
  });

  it('returns a path to the person if they are found in an array in New York City', () => {
    let returnedValue = searchParty('Nimit', newYorkCity);
    expect(returnedValue).toEqual(['Manhattan', 'Downtown', 'Financial District', 'Fullstack', '11th floor']);
  });

  it('returns null if they are not found in New York City', () => {
    let returnedValue = searchParty('John', newYorkCity);
    expect(returnedValue).toEqual(null);
  });

});
