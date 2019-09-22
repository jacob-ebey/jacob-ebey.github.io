import { createClient } from "@tiny-graphql/core";

import { url } from "./blog.json";

export default createClient({ url });
