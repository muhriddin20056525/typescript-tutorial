declare module "safe-json-parse/callback" {
  type SafeParseCallback = (err: Error | null, result: any) => void;

  export function safeParse(
    jsonString: string,
    callback?: SafeParseCallback
  ): [Error | null, any];

  export default safeParse;
}
