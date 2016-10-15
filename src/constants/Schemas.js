import { Schema, arrayOf } from 'normalizr';

const doctor = new Schema('doctors');
const filter = new Schema('filters');

export const doctorSchema = doctor;
export const filterSchema = filter;
