// Import the forked modules,
import * as React from "react";
import WebComponent from "./Component.web";
import NativeComponent from "./Component.native";
import ComponentProps from "./Component.props";

// Ensure that the modules have the same interface.
declare var _test1: WebComponent;
declare var _test1: React.ComponentClass<ComponentProps>;
declare var _test2: NativeComponent;
declare var _test2: React.ComponentClass<ComponentProps>;

// Re-export just one of the modules to make TypeScript happy.
export { default } from "./Component.web";
