// posts.test.js - Integration tests for posts API endpoints
import { jest } from '@jest/globals';
jest.setTimeout(30000);

import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../src/app.js';
import Post from '../../src/models/Post.js';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('POST /api/posts', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        title: 'Test Post',
        content: 'This is a test post.'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('title', 'Test Post');
  });
});
