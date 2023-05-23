import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";

@Entity()
@ObjectType()
export class Countries {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  @Column()
  @Field()
  code: string;

}

@InputType()
export class CountriesInput {


  @Field()
  name: string; 
  
  @Field()
  emoji: string;

  @Field()
  code: string;
}
