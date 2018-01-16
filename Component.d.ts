// Import the forked modules,
import * as React from "react";
import { Props as WebComponentProps } from "./Component.web";
import { Props as NativeComponentProps } from "./Component.native";

// Ensure that the modules have the same interface.
declare var _test: WebComponentProps;
declare var _test: NativeComponentProps;

// Re-export just one of the modules to make TypeScript happy.
export { default } from "./Component.web";
