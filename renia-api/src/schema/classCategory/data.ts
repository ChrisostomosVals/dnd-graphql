import { ClassCategoryRepository } from "../../../../database/src/repository";
import { Db } from "mongodb";
import { ClassCategory } from "./model";
import { mapOne, mapMany } from "./map";

export class ClassCategoryService {
  private repository: ClassCategoryRepository;

  constructor(db: Db) {
    this.repository = new ClassCategoryRepository(db);
  }

  async getAll(): Promise<ClassCategory[]> {
    return mapMany(await this.repository.getAsync());
  }

  async getByIdAsync(id: string): Promise<ClassCategory | null> {
    const category = await this.repository.getByIdAsync(id);
    if(!category) return null;
    return mapOne(category);
  }
}
