import {format} from 'date-fns';

jest.useFakeTimers().setSystemTime(new Date('2024-05-09'));

describe("Test suite", () => {
    it('a', () => {
        expect(format(new Date('2000-01-01'), 'yyyy')).toStrictEqual('2000');
    });

    it('b', () => {
        expect(1 + 1).toBe(2);
    });

    it('c', () => {
        expect(1 + 1).toBe(2);
    });

    it('d', () => {
        expect(1 + 1).toBe(2);
    });

    it('e', () => {
        expect(1 + 1).toBe(2);
    });
});