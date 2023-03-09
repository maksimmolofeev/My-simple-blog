import { classNames } from "./classNames";

describe('classNames', () => {
    test('single first parameter', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('additional parameters in an array', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2')
    })
    test('additional mods', () => {
        expect(classNames(
                'someClass',
                {hovered: true, scrollable: true},
                ['class1', 'class2'])
            ).toBe('someClass class1 class2 hovered scrollable')
    })
    test('one element mods false', () => {
        expect(classNames(
                'someClass',
                {hovered: false, scrollable: true},
                ['class1', 'class2'])
            ).toBe('someClass class1 class2 scrollable')
    })
    test('one element mods undefined', () => {
        expect(classNames(
                'someClass',
                {hovered: true, scrollable: undefined},
                ['class1', 'class2'])
            ).toBe('someClass class1 class2 hovered')
    })
})