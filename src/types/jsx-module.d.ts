// Allow importing .jsx modules in TypeScript without error 7016
declare module '*.jsx' {
  import type { ComponentType } from 'react';
  const Component: ComponentType<any>;
  export default Component;
}
