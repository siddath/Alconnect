const expect = require('expect');
const sinon = require('sinon');
const path = require('path');
const { ObjectID } = require('mongodb');
const validator = require('../../../app/common/validator');

const dbModels = require(path.join(process.env.PWD, 'app/server/models'));

describe('uploadHistory', () => {
    // Not sure what to test here as no values are required or validated in the DB model
});
