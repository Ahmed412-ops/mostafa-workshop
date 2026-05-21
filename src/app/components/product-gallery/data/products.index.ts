import { WorkshopProject } from '../product-gallery';
import { KITCHENS_PROJECTS } from './kitchens.data';
import { BEDROOMS_PROJECTS } from './bedrooms.data';
import { DOORS_PROJECTS } from './doors-windows.data';
import { LIVING_PROJECTS } from './living.data';
import { DRESSINGS_PROJECTS } from './dressings.data';

// هنا بندمج كل المصفوفات الصغيرة في مصفوفة واحدة عملاقة ونصدرها
export const MOCK_PROJECTS: WorkshopProject[] = [
  ...DOORS_PROJECTS,
  ...LIVING_PROJECTS,
  ...BEDROOMS_PROJECTS,
  ...KITCHENS_PROJECTS,
  ...DRESSINGS_PROJECTS,
];