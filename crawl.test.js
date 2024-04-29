const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals');

test('trailing slash', ()=> {
    const input = 'https://poorvas.webflow.io'
    const actual = normalizeURL(input)
    const expected = "poorvas.webflow.io"
    expect(actual).toEqual(expected)
})

test('strip capital', ()=> {
    const input = 'https://Poorvas.webflow.io'
    const actual = normalizeURL(input)
    const expected = "poorvas.webflow.io"
    expect(actual).toEqual(expected)
})

test('http string', ()=> {
    const input = 'http://poorvas.webflow.io'
    const actual = normalizeURL(input)
    const expected = "poorvas.webflow.io"
    expect(actual).toEqual(expected)
})
