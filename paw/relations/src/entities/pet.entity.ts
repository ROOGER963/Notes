import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

import { DoctorEntity } from "./doctor.entity";
import { ClientEntity } from "./client.entity";
import { LocalEntity } from "./local.entity";


@Entity('pets', { schema: 'veterinaria' })
export class PetEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'crate_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creatAt: Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;
    @DeleteDateColumn({
        name: 'crate_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;
    //Columnas
    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'pet name',
    })
    name: string;
    @Column('varchar', {
        name: 'fullName',
        nullable: false,
        comment: 'pet fullName',
    })
    fullName: string;
    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'pet address',
    })
    address: string;
    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'pet email',
    })
    email: string;
    @Column('integer', {
        name: 'phone',
        nullable: false,
        comment: 'pet phone',
    })
    phone: number;
    //Relacion
    
    //local
    @ManyToMany(() => LocalEntity, locals => locals.pets)
    locals: LocalEntity[];
    //doctor
    @OneToOne(() => DoctorEntity, doctor => doctor.id)
    doctor: DoctorEntity;
    //cliente
    @ManyToOne(() => ClientEntity, client => client.id)
    client: ClientEntity[];
}