import { RecognitionModel as TRecognitionModel } from "../api/recognitionModel/RecognitionModel";

export const RECOGNITIONMODEL_TITLE_FIELD = "name";

export const RecognitionModelTitle = (record: TRecognitionModel): string => {
  return record.name?.toString() || String(record.id);
};
