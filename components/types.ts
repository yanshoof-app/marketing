import { Context, ReactNode, useContext } from "react";

export type Wrapper = { children?: ReactNode | ReactNode[] };

export function createUseContextHook<T>(ctx: Context<T>) {
    return function useSpecificContext(): T {
      return useContext(ctx)
    }
  }
  