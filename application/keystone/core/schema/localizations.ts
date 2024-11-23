import {list} from "@keystone-6/core";
import {allowAll} from "@keystone-6/core/access";
import {text} from "@keystone-6/core/fields";
import type {Lists} from ".keystone/types";

const localizations= {
    Localization: list({
        access: allowAll,
        description: "The collection that contains the configured localization in the application.",
        fields: {
            locale: text({validation: { isRequired: true }, isIndexed: true}),
            code: text({validation: { isRequired: true }, isIndexed: 'unique'}),
        }
    })
}  satisfies Lists;

export default localizations;