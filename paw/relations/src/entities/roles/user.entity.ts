import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { RoleEntity } from "./rol.entity";

@Entity('users', { schema: 'usuarios' })
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @Column('varchar', {
        name: 'username',
        nullable: false,
        unique: true,
        comment: 'Username'
    })
    username: string;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        unique: true,
        comment: 'Email'
    })
    email: string;

    @Column('varchar', {
        name: 'password',
        nullable: false,
        comment: 'Password'
    })
    password: string;

    @ManyToMany(type => RoleEntity, role => role.users)
    @JoinTable()
    roles: RoleEntity[];


}
