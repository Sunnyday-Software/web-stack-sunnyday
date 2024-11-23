import {list} from "@keystone-6/core";
import {allowAll} from "@keystone-6/core/access";
import {integer, relationship, text} from "@keystone-6/core/fields";
import type {Lists} from ".keystone/types";

const menuItemsCollection = {
    
    MenuItem: list({
        access: allowAll,
        description: "The collection containing all the dynamic",
        fields: {
            menuId: relationship({ref: "Menu.identifier", many: false}),
            children: relationship({ref: "MenuItem", many: true}),
            parentId: relationship({ref: "MenuItem.children", many: false}),
            label: text({validation: {isRequired: true}, isIndexed: true}),
            iconName: text(),
            href: text(),
            order: integer({
                defaultValue: -1,
                validation: {
                    isRequired: true,
                    min: -1,
                    max: 1000,
                },
                isOrderable: true,
            })
        }
    }),
}
const menusCollection = {
    Menu: list({
        access: allowAll,
        description: "The collection that contains the available dynamic navigation menu in the application.",
        fields: {
            identifier: text({validation: {isRequired: true}, isIndexed: 'unique'}),
            items: relationship({ref: 'MenuItem', many: true})
        }
    })
} satisfies Lists;

export default {
    ...menusCollection,
    ...menuItemsCollection
};