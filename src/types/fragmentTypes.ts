
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "ActiveRecordInterface",
        "possibleTypes": [
          {
            "name": "Listing"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};
      export default result;
    