/// <reference path='fourslash.ts'/>

////var x;
////var n;
////
////function n(x: number, [|[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}n|]: number|]) {
////    [|{| "isWriteAccess": true |}n|] = 32;
////    x = [|n|];
////}

verify.singleReferenceGroup("(parameter) n: number", "n");
