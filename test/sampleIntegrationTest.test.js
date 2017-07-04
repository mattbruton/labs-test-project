const chai = require('chai');
const request = require('supertest');
const app = require('../server/app');

const expect = chai.expect;
describe('homepage', () => {
  it('returns 200 status code', () => {
    request(app).get('/')
      .expect(200)
  });
  it('has expected title', () => {
    request(app).get('/')
      .expect(/<title>URL SEO\/Speed Test<\/title>/)
  });
});
