import { RecognitionModelWhereInput } from "./RecognitionModelWhereInput";
import { RecognitionModelOrderByInput } from "./RecognitionModelOrderByInput";

export type RecognitionModelFindManyArgs = {
  where?: RecognitionModelWhereInput;
  orderBy?: Array<RecognitionModelOrderByInput>;
  skip?: number;
  take?: number;
};
