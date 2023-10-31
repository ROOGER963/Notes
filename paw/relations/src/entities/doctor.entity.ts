import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";


import { PetEntity } from "./pet.entity";
import { LocalEntity } from "./local.entity";
import { ClientEntity } from "./client.entity";

@Entity('doctors', { schema: 'veterinaria' })
export class DoctorEntity {
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
        comment: 'doctor name',
    })
    name: string;
    @Column('varchar', {
        name: 'fullName',
        nullable: false,
        comment: 'doctor fullName',
    })
    fullName: string;
    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'doctor address',
    })
    address: string;
    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'doctor email',
    })
    email: string;
    @Column('integer', {
        name: 'phone',
        nullable: false,
        comment: 'doctor phone',
    })
    phone: number;
    //Relacion

    //mascota
    @OneToOne(() => PetEntity, pet => pet.doctor)
    pet: PetEntity;
    //CLient
    @OneToMany(() => ClientEntity, client => client.doctors)
    client: ClientEntity;

    //local
    @ManyToMany(() => LocalEntity, locals => locals.doctors)
    @JoinTable()
    locals: DoctorEntity[];
}