import { expect } from 'chai'
import whereInTheJson from '../excercises/where_in_the_json'

describe('whereInTheJson', () => {
  let json = `{
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}`
  it('exists', () => {
    expect(whereInTheJson).to.be.a('function')
  })
  it('return the path to the value in the json', () => {
    expect(whereInTheJson(json, "1591")).to.equal("works -> 0 -> published")
  })
})
