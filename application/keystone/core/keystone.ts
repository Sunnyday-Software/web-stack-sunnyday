// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import {config} from '@keystone-6/core'

// to keep this file tidy, we define our schema in a different file
import {lists} from './schema'

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import {session, withAuth} from './auth'
import dotenv from 'dotenv';

dotenv.config();


const {
    DB_URL: databaseUrl = "postgres://keystone:password123@postgres:5432/keystone",
    DB_SEED: isDatabaseToSeed,
    
    S3_ACCESS_KEY_ID: s3AccessKeyId = 'root',
    S3_SECRET_ACCESS_KEY: s3SecretAccessKey = 'password123',
    S3_BUCKET_NAME: s3BucketName = 'localdev',
    S3_REGION: s3Region = 'eu-west-1',
    S3_ENDPOINT: s3Endpoint = 'http://localhost:9000',
} = process.env;


export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            url: databaseUrl,
            enableLogging: true,
            idField: {
                kind: "uuid",
            },
            onConnect: async (context) => {
                console.log('Connected to Postgresql');
                console.log("Verifying needing to seed database")
                if (isDatabaseToSeed === "true") {
                    console.log("Proceed to seed the DB.")
                } else {
                    console.log("DB does not need to seed.")
                }
            }
        },
        lists,
        session,
        storage: {
            s3_images: {
                kind: "s3",
                region: s3Region,
                type: "image",
                accessKeyId: s3AccessKeyId,
                secretAccessKey: s3SecretAccessKey,
                bucketName: s3BucketName,
                endpoint: s3Endpoint,
            }
        },
        telemetry: false,
    })
)
