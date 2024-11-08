import { beforeEach, describe, expect, test } from '@jest/globals';
import Dog from './dog.js';

describe('Dog class tests', () => {
  let dog;

  beforeEach(() => {
    dog = new Dog('Buddy', 'Golden Retriever', 2, 'Golden');
  });

  test('Dog description', () => {
    expect(dog.getDescription()).toBe('Buddy is a Golden Retriever.');
  });

  test('Dog can sleep', () => {
    expect(dog.sleep()).toBe('Buddy is now sleeping.');
  });

  test('Dog can wake up', () => {
    expect(dog.wakeUp()).toBe('Buddy woke up.');
  });

  test('Dog can bark', () => {
    expect(dog.bark()).toBe('Woof! Woof!');
  });

  test('Dog can learn a new trick', () => {
    expect(dog.learnTrick('roll over')).toBe(
      'Buddy learned a new trick: roll over.',
    );
  });

  test('Dog cannot learn an empty trick', () => {
    expect(() => dog.learnTrick('')).toThrow('Trick cannot be empty');
  });

  test('Dog information', () => {
    expect(dog.displayInfo()).toBe(
      'Buddy is a Golden Golden Retriever that is 2 years old.',
    );
  });
});
