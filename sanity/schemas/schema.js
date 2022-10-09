// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import artCard from "./artCard";
import filmCard from "./filmCard";
import blogCard from "./blogCard";
import dominationCard from "./dominationCard";
import musicCard from "./musicCard";
import youtube from "./youtube";
import richText from "./richText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ,
    blogCard,
    musicCard,
    dominationCard,
    filmCard,
    artCard,
    youtube,
    richText
  ]),
});
