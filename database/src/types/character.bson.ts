import { ObjectId } from 'mongodb';
import { GearBson } from './gear.bson';
import { ArsenalBson } from './arsenal.bson';
import { SkillBson } from './skill.bson';
import { StatBson } from './stat.bson';
import { PropertyBson } from './property.bson';
export type CharacterBson = {
    _id: ObjectId;
    worldId: string;
    name: string;
    classId: string;
    raceId: string;
    type: string;
    gear?: GearBson[];
    arsenal?: ArsenalBson[];
    skills?: SkillBson[];
    feats?: string[];
    specialAbilities?: string[];
    stats?: StatBson[];
    properties?: PropertyBson[];
    visible: boolean;
}