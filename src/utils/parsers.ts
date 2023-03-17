import moment from "moment";
import { DATE_FORMAT } from "../config/constants";

export const getDateString = (date: Date) => {
  return moment(date).format(DATE_FORMAT);
};

export const getWrittenDateString = (dateString?: string) => {
  return moment(dateString).format("MMMM Do, Y");
};