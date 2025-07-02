"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { Logo } from "@/assets/logo";

import { apiVersion, dataset, projectId } from "./src/lib/sanity/env";
import { schema } from "./src/lib/sanity/schemaTypes";
import { structure } from "./src/lib/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Piptan Investment & Securities",
  icon: Logo,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: isDev
    ? [
        structureTool({ structure }),
        media(),
        visionTool({ defaultApiVersion: apiVersion }),
      ]
    : [structureTool({ structure }), media()],
});
