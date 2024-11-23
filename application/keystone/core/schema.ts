// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example

// the document field is a more complicated field, so it has it's own package
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields
// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import {type Lists} from '.keystone/types'
import localizations from "./schema/localizations";
import dynamicMenus from "./schema/dynamic-menus";
import users from "./schema/users";
import tags from "./schema/tags";
import posts from "./schema/posts";
import webRequests from "./schema/web-requests";

export const lists = {
    
    ...localizations,
    ...dynamicMenus,
    ...users,
    ...posts,
    ...tags,
    ...webRequests,
} satisfies Lists
