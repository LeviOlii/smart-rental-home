export class UpdatePropertyDto {
  name?: string;
  address?: string;
  status?: 'AVAILABLE' | 'OCCUPIED' | 'INACTIVE';
}
