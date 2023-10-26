import { CategoryEntity } from "./category.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products',{schema:'ventas'})
export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt:Date;

    @Column('varchar',{
        name:'title',
        nullable:false,
        comment:'product title'
    })
    title:string;
    @Column('number',{
        name:'price',
        nullable:false,
        comment:'product price'
    })
    price:number;
    @Column('varchar', {
        name:'description',
        nullable:true,
        comment:'product description'
    })
    description:string;
    @Column('varchar',{
        name:'image',
        nullable:false,
        comment:'product image'
    })
    image:string;
    @Column('varchar', {
        name:'category',
        nullable:false,
        comment:'category product'
    })


@BeforeInsert()
@BeforeUpdate()

async setCategory(){
    if(!this.setCategory){
        return;
    }
    this.setCategory
}


@BeforeInsert()
@BeforeUpdate()

async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}
@BeforeInsert()
@BeforeUpdate()
async upperCase(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}

@BeforeInsert()
@BeforeUpdate()

async setDescription(){
    if(!this.description){
        return;
    }
    this.description = this.description.toLowerCase();
}

// @BeforeInsert()
// @BeforeInsert()
// async setEmail(){
//     if(!this.email){
//         return;
//     }
//     this.email = this.email.toLowerCase().trim() ; metodo trim omite los espacion.
// }

// @BeforeInsert()
// @BeforeInsert()

// async HashPassword(){
//     if(!this.password){
//         return
//     }
//     this.password = Bcrypt.hash(this.password, 12) con el Bcrypt increptamos las contraseña
// }

}

