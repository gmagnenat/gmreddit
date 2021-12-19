import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entitites/Post';
import microConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
  // connect to database
  const orm = await MikroORM.init(microConfig);
  // run the migration
  await orm.getMigrator().up();

  const app = express();

  app.get('/', (_, res) => {
    res.send('Hello');
  });

  app.listen(4000, () => {
    console.log('server started on localhost:4000');
  });
};

main().catch((err) => {
  console.error(err);
});
