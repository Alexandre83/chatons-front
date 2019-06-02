import { Breed } from '../../breed/models/breed.model';
import { Color } from '../../color/models/color.model';
import { RestEntity } from '../../rest/models/rest-entity';

export class Chaton extends RestEntity {
    color: Color;
    breed: Breed;
    img: string;
    birthDate: Date;
}
