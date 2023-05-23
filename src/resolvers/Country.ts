import { Resolver, Mutation, Arg, Query, ID } from "type-graphql";
import { Countries, CountriesInput } from "../entities/Countries";
import datasource from "../utils";

@Resolver()
export class CountryResolver {
  @Mutation(() => Countries)
  async createCountries(
    @Arg("data", () => CountriesInput) data: CountriesInput
  ): Promise<Countries> {
    return await datasource.getRepository(Countries).save(data);
  }

  @Query(() => [Countries])
  async Countries(): Promise<Countries[]> {
    return await datasource.getRepository(Countries).find({});
  }

  @Query(() => Countries)
  async country(@Arg("id", () => ID) id: number): Promise<Countries | null> {
    return await datasource.getRepository(Countries).findOne({ where: { id } });
  }
}
