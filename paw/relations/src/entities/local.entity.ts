import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

import { ClientEntity } from "./client.entity";
import { DoctorEntity } from "./doctor.entity";
import { PetEntity } from "./pet.entity";

@Entity('locals', { schema: 'veterinaria' })
export class LocalEntity {
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
        comment: 'local name',
    })
    name: string;
    @Column('varchar', {
        name: 'fullName',
        nullable: false,
        comment: 'local fullName',
    })
    fullName: string;
    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'local address',
    })
    address: string;
    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'local email',
    })
    email: string;
    @Column('integer', {
        name: 'phone',
        nullable: false,
        comment: 'local phone',
    })
    phone: number;
    //Relacion clientes
    @ManyToMany(() => ClientEntity, clients => clients.id)
    @JoinTable()
    clients: ClientEntity[];
    //mascotas
    @ManyToMany(() => PetEntity, pets => pets.id)
    @JoinTable()
    pets: PetEntity[];
    //Doctores
    @ManyToMany(() => DoctorEntity, doctors => doctors.id)
    @JoinTable()
    doctors: DoctorEntity[];

}