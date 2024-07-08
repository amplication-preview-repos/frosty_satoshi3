import { Zone as TZone } from "../api/zone/Zone";

export const ZONE_TITLE_FIELD = "name";

export const ZoneTitle = (record: TZone): string => {
  return record.name?.toString() || String(record.id);
};
