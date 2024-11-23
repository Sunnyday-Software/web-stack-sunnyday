import {list} from "@keystone-6/core";
import {allowAll} from "@keystone-6/core/access";
import {relationship, text, timestamp} from "@keystone-6/core/fields";
import type {Lists} from ".keystone/types";

const webRequestsCollection = {
    WebRequest: list({
        access: allowAll,
        description: "The collection containing the requests from the contact forms in the various websites.",
        fields: {
            id: text({
                validation: {isRequired: true}, isIndexed: true, db: {
                    nativeType: "Uuid"
                }
            }),
            name: text({validation: {isRequired: true}}),
            email: text({validation: {isRequired: true}, isIndexed: true}),
            message: text({validation: {isRequired: true}}),
            createdAt: timestamp({
                // this sets the timestamp to Date.now() when the user is first created
                defaultValue: {kind: 'now'},
            }),
            updatedAt: timestamp({
                // this sets the timestamp to Date.now() when the user is first created
                defaultValue: {kind: 'now'},
            }),
            registeredUserId: relationship({ref: "User.id", many: false}),
        }
    })
} satisfies Lists;

export default webRequestsCollection;