import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from "./user.entity"; 
enum UserRole {
    ESTUDIANTE = "estudiante",
    PROFESOR = "profesor",
}

@Entity('roles', { schema: 'roles' })
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('enum', {
        name: 'name',
        enum: UserRole,
        nullable: false,
        comment: 'Role Name'
    })
    name: UserRole;

    @ManyToMany(type => UserEntity, user => user.roles)
    @JoinTable()
    users: UserEntity[];

}
